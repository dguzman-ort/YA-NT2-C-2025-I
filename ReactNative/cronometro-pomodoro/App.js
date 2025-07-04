import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { Button, StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants";

// import { vibrate, vibrateLong } from "./utils";

/** UI Components */
import Cronometro from "./components/Cronometro";
import Control from "./components/Control";
import Status from "./components/Status";

/** Hooks */
import { CronometroProvider, useCronometro } from "./hooks/useCronometro";

// console.log(Constants.statusBarHeight)

export default function App() {

  return (
    <View style={styles.container}>
      
      <CronometroProvider>
        <Status />
        <Cronometro />  
        <Control />
      </CronometroProvider>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    // justifyContent: 'center',
  }  
});
