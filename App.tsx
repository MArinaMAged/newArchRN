/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { NativeModules, Platform, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import VFGNetwork from './src/VFGNetworkSpec';
import Spec from './src/OpenDisplayOverClass';
import { useEffect } from 'react';
// import MyUtil from './src/NativeMyUtil';
// import NativeLocalStorage from './specs/NativeLocalStorage';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <AppContent /> */}
      <AppExtra />
    </SafeAreaProvider>
  );
}
//for ios support 

 function AppExtra() {
  useEffect(() => {
 VFGNetwork.hello('Test Method').then(result => {
    console.log(result); // Logs: Hello from native: Test Method
  });
 console.log('NativeModules.VFGNetwork:', NativeModules?.VFGNetwork);
}, []);
  return (
    <View style={styles.container}>
      <Text>Please see Xcode Log</Text>
    </View>
  );
}
//for android support 
function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
  useEffect(()=>{
    (async ()=>{ 
      if(Platform.OS === 'android') {
        const isDisplayOverAppsGranted = await Spec?.isDisplayOverAppsGranted?.(); 
        console.log('isDisplayOverAppsGranted', isDisplayOverAppsGranted);
        if (isDisplayOverAppsGranted === 'denied') {
          Spec?.openDisplayOverApps?.((result) => {
            console.log('openDisplayOverApps result', result);
          });
        }
      } 
    })()

  }, [])
     
  return (
    <View style={styles.container}>
      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
