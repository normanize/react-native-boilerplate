import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'

import { initStore } from './store/index';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigation from './navigations';

const App = () => {
  const store = initStore();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaProvider>
          <AppNavigation />
        </SafeAreaProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;