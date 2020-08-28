import React, { useState, useEffect, FC } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import ListItem from '../components/ListItem'
import SkeletonContent from 'react-native-skeleton-content';
import Dots from '../components/DotsBounce'

const userLayout: object = {
  width: 60,
  display: "flex",
  flexDirection: "row",
  marginTop: 20,
  children: [
    {
      width: 50,
      height: 50,
      borderRadius: 30,
    },
    {
      flexDirection: 'column',
      marginLeft: 10,
      children: [
        {
          width: 150,
          height: 20,
          marginBottom: 10
        },
        {
          width: 250,
          height: 20,
        },
      ]
    },
  ]
}

interface User {
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

const SkeletonLayout: object[] = [
  userLayout,
  userLayout,
  userLayout,
  userLayout,
  userLayout,
  userLayout,
  userLayout,
  userLayout,
  userLayout,
  userLayout,
  userLayout,
]

const ItemList = (user: User) => (
  <ListItem item={user.item} />
)

const UserList: FC = () => {
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [endReached, setEndReached] = useState(false)
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [seed, setSeed] = useState(1)
  const [error, setError] = useState(null)

  const makeRemoteRequest = (page: number, seed: number) => {
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`
    setLoading(true)

    fetch(url)
      .then(res => res.json())
      .then(res => {
        if(endReached) {
          const result = [...data, ...res.results] as any
          setData(result)
        } else {
          setData(res.results || [])
        }
        setRefreshing(false)
      })
      .catch( error => {
        setError(error)
      })
    setEndReached(false)
    setLoading(false)
  }

  useEffect(() => {
    makeRemoteRequest(page, seed)
  }, [seed, page])

  const handleRefresh = (): void => {
    setRefreshing(true)
    setSeed(seed + 1)
  }

  const handleEndReached = (): void => {
    setEndReached(true)
    setPage(page + 1)
  }

  return (
    <SkeletonContent
      containerStyle={styles.skeleton}
      isLoading={loading}
      layout={SkeletonLayout}
    >
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={ItemList}
          keyExtractor={user => user.email}
          refreshing={refreshing}
          onRefresh={handleRefresh}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.001}
          ListFooterComponent={<Dots />}
        />
      </View>
    </SkeletonContent>
  )
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  skeleton: {
    padding: 20,
  },
});

export default UserList
