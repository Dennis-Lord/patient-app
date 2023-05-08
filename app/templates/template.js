import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const optionsObject = [
    {
        iconName: "account",
        option: "Account",
        r: "details"
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

const pallete = {
    greenB:'#27633D',
    tintG: '#E0F6E8',
    white: '#fff',
    tint: '#e5e5e5',
    orange: '#f59e0b',
    blue: '#164e63',
    red: '#F84134',
    pink: '#FCB4B4',
    black: '#000',
    tintGray: '#636363',
    gray: '#a3a3a3',
    darkG: '#363736'
}

const iconColor = {
    bg: '#d4d4d4',
    bgd: '#a3a3a3',
    c: '#52525b',
    gbg: '#27633D',
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
    b: '#164e63',
    n: "#27272a",
    a: "#44403c",
    or: '#f59e0b',
    bg: "#e5e5e5"
}

// styles to wrap hero text and position all headers equally
const wrapper = StyleSheet.create({
    bw: {
        backgroundColor: pallete.white,
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18
    },
    heroPos: {
        marginBottom: 18,
      },
})

export {windowWidth, optionsObject, windowHeight, iconColor, fontColor, wrapper, downloadOption, inv_data, pallete}