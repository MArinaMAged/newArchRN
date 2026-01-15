/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { Platform, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Spec from './src/OpenDisplayOverClass';
import { useEffect } from 'react';
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
  useEffect(()=>{
    (async ()=>{ 
      if(Platform.OS === 'android') {
        const isDisplayOverAppsGranted = await Spec?.isDisplayOverAppsGranted?.(); console.log('isDisplayOverAppsGranted', isDisplayOverAppsGranted);
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
