import React from "react";
import styled from "styled-components";
 
export const Container = styled.SafeAreaView`
    background-color: #63C2D1;
    flex: 1;
    justify-content: center;
    align-items: center;

`;

export const InputArea = styled.View`
    padding: 40px;
    width: 100%;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #268596;
    border-radius: 30px;
    justify-content: center;
    align-items: center;

`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: white;
`;

export const SignMessageBtn = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;

export const SignMessageText = styled.Text`
    font-size: 16px;
    color: #268596;
`;

export const SignMessageTextBold = styled.Text`
    font-size: 16px;
    color: #268596;
    font-weight: bold;
    margin-left: 5px;
`;


// SignInput,
