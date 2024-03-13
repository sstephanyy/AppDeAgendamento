import React, { useState } from "react";
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

import SignInput from "../../components/SignInput";

import ComputerLogo from '../../../assets/pointing-to-pc.svg';
import EmailIcon from '../../../assets/email.svg';
import LockIcon from '../../../assets/lock.svg';

export default function SignIn(){

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    return(
        <Container> 
            <ComputerLogo width="100%" height="200" fill="white"/>

            <InputArea>

                <SignInput 
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailValue}
                    onChangeText={text=>setEmailValue(text)}
                />
                <SignInput 
                    IconSvg={LockIcon}
                    placeholder="Digite a sua senha"
                    value={passwordValue}
                    onChangeText={text=>setPasswordValue(text)}
                    password={true}
                />

                <CustomButton>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>

            </InputArea>

            <SignMessageBtn>
                <SignMessageText>Ainda não possui uma conta?</SignMessageText>
                <SignMessageTextBold>Cadastre-se</SignMessageTextBold>
            </SignMessageBtn>

        </Container>
    )
}