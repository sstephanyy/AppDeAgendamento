import React from "react";
import { Text } from 'react-native';
import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageBtn,
    SignMessageText,
    SignMessageTextBold

} from './style';

import ComputerLogo from '../../../assets/pointing-to-pc.svg';


export default function SignIn(){
    return(
        <Container> 
            <ComputerLogo width="100%" height="200" fill="white"/>

            <InputArea>

                <CustomButton>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>

            </InputArea>

            <SignMessageBtn>
                <SignMessageText>Ainda não possui uma conta??</SignMessageText>
                <SignMessageTextBold>Cadastre-se</SignMessageTextBold>
            </SignMessageBtn>

        </Container>
    )
}