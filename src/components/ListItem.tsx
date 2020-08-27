import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

interface Item {
  item: {
    name: {
      first: string,
      last: string,
    },
    email: string,
    picture: {
      thumbnail: string,
    },
  },
}

const ListItem = (item: Item) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={{ uri: item.item.picture.thumbnail, width: 20 }}
    />
    <View style={styles.infos}>
      <Text>{item.item.name.first} {item.item.name.last}</Text>
      <Text>{item.item.email}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    display: "flex",
    flexDirection: "row",
  },
  infos: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
  }
});

export default ListItem
