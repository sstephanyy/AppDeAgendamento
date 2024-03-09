import React, {useEffect} from "react";
import { Text } from 'react-native';
import { Container, LoadingIcon } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import ComputerLogo from '../../../assets/pointing-to-pc.svg';

export default function PreLoad() {

    const navigation = useNavigation();

    useEffect(() => {
        const checkToken =  async () => {
            const token = await AsyncStorage.getItem('token');
            if(token){
                //validate the token
            }
            else{
                navigation.navigate('SignIn');
            }
        }

    }, []);

    return (
        <Container>
            <ComputerLogo width="100%" height="200" fill="white"/>
            <LoadingIcon size="large" color="#FFFFFF" />
        </Container>
    );
}
