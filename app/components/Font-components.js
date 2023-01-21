import { Text, StyleSheet } from 'react-native'
import React from 'react'

const HeroFont = ({text}) => {
  return (
      <Text style={fontStyle.heroFont}>{text}</Text>
  )
}

const MediumFont = ({text}) => {
  return (
      <Text style={fontStyle.mediumFont}>{text}</Text>
  )
}

const SemiBoldFont = ({text}) => {
  return (
      <Text style={fontStyle.semiboldFont}>{text}</Text>
  )
}

const SemiFont = ({text}) => {
  return (
      <Text style={fontStyle.semiFont}>{text}</Text>
  )
}

const LightFont = ({text}) => {
  return (
      <Text style={fontStyle.lightFont}>{text}</Text>
  )
}


const fontStyle = StyleSheet.create({
  heroFont: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  mediumFont: {
    fontSize: 18, 
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  semiboldFont: {
    fontSize: 22, 
    fontWeight: '600',
    letterSpacing: -1,
  },
  semiFont: {
    fontSize: 20, 
    fontWeight: '500',
    letterSpacing: -1,
  },
  lightFont: {
    fontSize: 14, 
    fontWeight: '600',
  },
  
})

export {HeroFont, MediumFont, SemiBoldFont, SemiFont, LightFont};