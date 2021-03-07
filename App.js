
import Store from './src/redux/cake/storeCake'
import { Provider } from 'react-redux'
import React from 'react';
import Cake from './src/Components/Cake/cakeContainer'
export default function App() {

  return (
    <Provider store={Store}>
      <Cake />
    </Provider>
  );
}

