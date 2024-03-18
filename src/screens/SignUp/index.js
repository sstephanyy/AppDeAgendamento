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
import { signUp } from "../../AuthService";

export default function SignUp(){
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigation();

    const handleMessageBtnClick = () => {
        //redirecting the user to the sign up page without make it possible for the use to come back to the previous page (login)
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }

    const handleSignUp = async () => {
        setIsLoading(true); // Set loading state to true to indicate signup process is in progress
    
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            console.error('Invalid email address');
            setIsLoading(false); 
            return;
        }
    
        const signUpResult = await signUp(nameValue, emailValue, passwordValue);
    
        setIsLoading(false); 
    
        if(signUpResult.success){
            console.log("User Criado", signUpResult.user);
            setEmailValue('');
            setPasswordValue('');
            setNameValue('');
        } else {
            console.log("User NÃO criado com sucesso", signUpResult.error);
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

            <CustomButton onPress={handleSignUp} disabled={isLoading}>
                <CustomButtonText>{isLoading ? 'Cadastrando...' : 'CADASTRAR'}</CustomButtonText>
            </CustomButton>

            </InputArea>

            <SignMessageBtn onPress={handleMessageBtnClick}>
                <SignMessageText>Já possui uma conta?</SignMessageText>
                <SignMessageTextBold>Fazer Login</SignMessageTextBold>
            </SignMessageBtn>

        </Container>
    )
}