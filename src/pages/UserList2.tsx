import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import Placeholder2 from '../components/Placeholder2'

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingLeft: 30,
    paddingRight: 30,
  },
});

const UserList = () => (
  <View style={styles.container}>
    <Placeholder2 />
  </View>
)

export default UserList