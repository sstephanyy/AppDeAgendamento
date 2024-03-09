import React from "react";
import { Text } from 'react-native';
import { Container, LoadingIcon } from './style';

import ComputerLogo from '../../../assets/pointing-to-pc.svg';

export default function PreLoad() {
    return (
        <Container>
            <ComputerLogo width="100%" height="200" fill="white"/>
            <LoadingIcon size="large" color="#FFFFFF" />
        </Container>
    );
}
