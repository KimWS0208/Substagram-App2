import React, { useState, useEffect } from 'react';
import { Ionicons } from "@expo/vector-icons";
import {AppLoading} from "expo";
import { Text, View, AsyncStorage, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import {Asset} from 'expo-asset';
import apolloClientOptions from './apollo';
import {ApolloProvider} from "react-apollo-hooks";
import { persistCache } from 'apollo-cache-persist';
import {InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-boost";
import {ThemeProvider} from "styled-components";
import styles from './styles';
import { AuthContext, AuthProvider } from './AuthContext';
import NavControllers from './components/NavControllers';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [client, setClient] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  
  const preLoad = async() => {
    try{
      await Font.loadAsync({
      ...Ionicons.font
      })
      await Asset.loadAsync([
        require("./assets/logo.png")
      ])

      const cache = new InMemoryCache();
      await persistCache({
        cache,
        storage: AsyncStorage,
      });

      const client = new ApolloClient({
        cache,
        ...apolloClientOptions
      });
      const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
      
      if (!isLoggedIn || isLoggedIn === "false") {
        setIsLoggedIn(false)
      }else{
        setIsLoggedIn(true)
      };

      setLoaded(true)
      setClient(client)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(()=>{
    preLoad();
  }, []);
  
  

  return loaded && client && isLoggedIn !== null ? (
    <ApolloProvider client={client}>
      <ThemeProvider theme={styles}>
        <AuthProvider isLoggedIn={isLoggedIn}>
          <NavControllers />
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
    ) : (
      <AppLoading />
    )
    
}


