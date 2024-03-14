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

} from '../SignIn/style';

import SignInput from "../../components/SignInput";

import ComputerLogo from '../../../assets/pointing-to-pc.svg';
import EmailIcon from '../../../assets/email.svg';
import LockIcon from '../../../assets/lock.svg';
import PersonIcon from '../../../assets/person.svg';
import { signUp } from "../../API";

export default function SignUp(){
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [nameValue, setNameValue] = useState('');

    const navigation = useNavigation();

    const handleMessageBtnClick = () => {
        //redirecting the user to the sign up page without make it possible for the use to come back to the previous page (login)
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }

    const handleSignUp = async () => {
        // Call signUp function with input field values
        const signUpResult = await signUp(emailValue, passwordValue);
        if (signUpResult.success) {
            // Sign-up successful
            console.log('User signed up:', signUpResult.user);
        } else {
            // Sign-up failed
            console.error('Error signing up:', signUpResult.error);
        }
    }



    return(
        <Container> 
            <ComputerLogo width="100%" height="200" fill="white"/>

            <InputArea>

                <SignInput 
                    IconSvg={PersonIcon}
                    placeholder="Digite seu nome"
                    value={nameValue}
                    onChangeText={text=>setNameValue(text)}
                />
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
                    <CustomButtonText onPress={handleSignUp} >CADASTRAR</CustomButtonText>
                </CustomButton>

            </InputArea>

            <SignMessageBtn onPress={handleMessageBtnClick}>
                <SignMessageText>Já possui uma conta?</SignMessageText>
                <SignMessageTextBold>Fazer Login</SignMessageTextBold>
            </SignMessageBtn>

        </Container>
    )
}