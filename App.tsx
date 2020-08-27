import React from 'react';
import { NativeRouter, Route } from 'react-router-native'
import Home from './src/pages/Home'
import UserList from './src/pages/UserList'

const App = () => (
  <NativeRouter>
    <Route exact path="/" component={Home} />
    <Route path="/lista-de-usuarios" component={UserList} />
  </NativeRouter>
)

export default App