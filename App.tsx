import React from 'react';
import { NativeRouter, Route } from 'react-router-native'
import Home from './src/pages/Home'
import UserList from './src/pages/UserList'
import UserList2 from './src/pages/UserList2'

const App = () => (
  <NativeRouter>
    <Route exact path="/" component={Home} />
    <Route path="/lista-de-usuarios" component={UserList} />
    <Route path="/lista-de-usuarios2" component={UserList2} />
  </NativeRouter>
)

export default App