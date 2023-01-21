import { Dimensions } from "react-native";

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

export {windowWidth, profileObject, optionsObject, windowHeight}