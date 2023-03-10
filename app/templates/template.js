import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const profileObject = [
    {
        n: 'Name',
        v: 'Dennis Lord A.',
        i: 'human-greeting-proximity'
    },
    {
        n: 'Gender',
        v: 'Male',
        i: 'gender-male'
    },
    {
        n: 'Title',
        v: 'Mr.',
        i: 'label-variant'
    },
    {
        n: 'Age',
        v: '26',
        i: 'select-group'
    },
    {
        n: 'Type',
        v: 'O',
        i: 'blood-bag'
    },
    {
        n: 'Height',
        v: '165 cm',
        i: 'human-male-height'
    },
    {
        n: 'Weight',
        v: '123 kg',
        i: 'weight'
    },
    {
        n: 'Allergies',
        v: 'Groundnut',
        i: 'allergy'
    },
    {
        n: 'Sponsor(s)',
        v: 'NHIS',
        i: 'help-network'
    },
]

const optionsObject = [
    {
        iconName: "account",
        option: "Account"
    },
    {
        iconName: "shield-key",
        option: "Privacy policy"
    },
    {
        iconName: "information",
        option: "About us"
    },
    {
        iconName: "help-rhombus",
        option: "Help"
    },
    {
        iconName: "frequently-asked-questions",
        option: "FAQ"
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

export {windowWidth, profileObject, optionsObject, windowHeight, iconColor, fontColor, wrapper, downloadOption, inv_data}