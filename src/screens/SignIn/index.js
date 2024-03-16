import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
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

import { signIn } from "../../AuthService";

export default function SignIn(){

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const navigation = useNavigation();

    const handleMessageBtnClick = () => {
        //redirecting the user to the sign up page without make it possible for the use to come back to the previous page (login)
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });
    }

    const handleSignIn = async () => {

        const signUpResult = await signIn(emailValue, passwordValue);

        if(signUpResult.success){
            console.log("User Logado", signUpResult.user);
        }else{
            console.log("User NÃO logado", signUpResult.error);
        }
    }

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
                    <CustomButtonText onPress={handleSignIn}>LOGIN</CustomButtonText>
                </CustomButton>

            </InputArea>

            <SignMessageBtn onPress={handleMessageBtnClick}>
                <SignMessageText>Ainda não possui uma conta?</SignMessageText>
                <SignMessageTextBold>Cadastre-se</SignMessageTextBold>
            </SignMessageBtn>

        </Container>
    )
}