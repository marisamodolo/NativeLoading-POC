import React, { useEffect } from 'react'
import { StyleSheet, View, Animated } from 'react-native'

const fadeAnimation = (fadeValue: Animated.Value) => {
  Animated.sequence([
    Animated.timing(fadeValue, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }),
    Animated.timing(fadeValue, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
    })
  ]).start()
}

const start = (first: Animated.Value, second: Animated.Value, third: Animated.Value) => {
  fadeAnimation(first)
  setTimeout(() => fadeAnimation(second), 700)
  setTimeout(() => fadeAnimation(third), 1400)
  setTimeout(() => start(first, second, third), 2100)
}

const DotsBounce = () => {
  const firstFadeValue = new Animated.Value(0)
  const secondFadeValue = new Animated.Value(0)
  const thirdFadeValue = new Animated.Value(0)

  useEffect (() => start(firstFadeValue, secondFadeValue, thirdFadeValue))

  return (
      <View style={styles.container}>
        <Animated.View
          style={{...styles.dot, opacity: firstFadeValue}}
        />
        <Animated.View
          style={{...styles.dot, opacity: secondFadeValue}}
        />
        <Animated.View
          style={{...styles.dot, opacity: thirdFadeValue}}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center"
  },
  dot: {
    height: 10,
    width: 10,
    margin: 5,
    borderRadius: 30,
    backgroundColor: "#808080",
  }
})

export default DotsBounce