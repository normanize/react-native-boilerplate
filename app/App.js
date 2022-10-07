import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import AppNavigation from './navigations';

import { initStore } from './store/index';

const App = () => {
  const store = initStore();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </NavigationContainer>
  );
};

export default App;