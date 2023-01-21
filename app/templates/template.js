import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

const profileObject = [
    {
        n: 'Name',
        v: 'Dennis Lord A.'
    },
    {
        n: 'Gender',
        v: 'Male'
    },
    {
        n: 'Title',
        v: 'Mr.'
    },
    {
        n: 'Age',
        v: '26'
    },
    {
        n: 'Type',
        v: 'O'
    },
    {
        n: 'Height',
        v: '165 cm'
    },
    {
        n: 'Weight',
        v: '123 kg'
    },
    {
        n: 'Allergies',
        v: 'Groundnut'
    },
    {
        n: 'Sponsor(s)',
        v: 'NHIS'
    },
]

export {windowWidth, profileObject}