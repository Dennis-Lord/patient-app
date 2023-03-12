import { Text, StyleSheet } from 'react-native'
import React from 'react'

const HeroFont = ({text, tc}) => {
  return (
      <Text style={[fontStyle.heroFont, {color: tc}]}>{text}</Text>
  )
}

const MediumFont = ({text, tc}) => {
  return (
      <Text style={[fontStyle.mediumFont, {color: tc}]}>{text}</Text>
  )
}

const SemiBoldFont = ({text, tc}) => {
  return (
      <Text style={[fontStyle.semiboldFont, {color: tc}]}>{text}</Text>
  )
}

const SemiFont = ({text, tc}) => {
  return (
      <Text style={[fontStyle.semiFont, {color: tc}]}>{text}</Text>
  )
}

const LightFont = ({text, tc}) => {
  return (
      <Text style={[fontStyle.lightFont, {color: tc}]}>{text}</Text>
  )
}
const LFb = ({text, tc}) => {
  return (
      <Text style={[fontStyle.lightFontb, {color: tc}]}>{text}</Text>
  )
}
const MiniFont = ({text, tc}) => {
  return (
      <Text style={[fontStyle.miniFont, {color: tc}]}>{text}</Text>
  )
}

const SemiLightFont = ({text, tc}) => {
  return (
      <Text style={[fontStyle.semiLightFont, {color: tc}]}>{text}</Text>
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
    fontSize: 18, 
    fontWeight: '600',
    letterSpacing: -1,
  },
  lightFont: {
    fontSize: 16, 
    fontWeight: '500',
  },
  lightFontb: {
    fontSize: 18, 
    fontWeight: '500',
  },
  miniFont: {
    fontSize: 13, 
    fontWeight: '600',
  },
  semiLightFont: {
    fontSize: 16, 
    fontWeight: '600',
  },
  
})

export {HeroFont, MediumFont, SemiBoldFont, SemiFont, LightFont, SemiLightFont, MiniFont, LFb};