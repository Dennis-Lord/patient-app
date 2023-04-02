import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const optionsObject = [
    {
        iconName: "account",
        option: "Account",
        r: "account"
    },
    {
        iconName: "shield-key",
        option: "Privacy policy",
        r: "details"
    },
    {
        iconName: "information",
        option: "About us",
        r: "details"
    },
    {
        iconName: "help-rhombus",
        option: "Help",
        r: "details"
    },
    {
        iconName: "frequently-asked-questions",
        option: "FAQ",
        r: "details"
    },
];

const downloadOption = [
    {
        iN: 'download',
        o: 'Download'
    },
    {
        iN: 'share',
        o: 'Share',
    },
]

const inv_data = [
    {n: [1, 2]}, {n: [1,3]},
]

const iconColor = {
    bg: '#d4d4d4',
    bgd: '#a3a3a3',
    c: '#52525b',
    gbg: '#d9f99d',
    gbgd: '#15803d',
    gc: '#16BC00',
    rc: '#F83434',
    rbg: '#FCB4B4',
    bgw: '#fff'
}

const fontColor = {
    p: '#171717',
    s: '#404040',
    g: '#57F834',
    gd: '#15803d',
    r: '#F84134',
    w: '#fff',
    b: '#164e63'
}

// styles to wrap hero text and position all headers equally
const wrapper = StyleSheet.create({
    bw: {
        backgroundColor: '#fff',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18
    },
    heroPos: {
        marginTop: 6,
        marginBottom: 18,
      },
})

export {windowWidth, optionsObject, windowHeight, iconColor, fontColor, wrapper, downloadOption, inv_data}