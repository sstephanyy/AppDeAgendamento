import React from "react";
import { Text } from 'react-native';
import { Container } from './style';

import ComputerLogo from '../../../assets/pointing-to-pc.svg';

export default function PreLoad() {
    return (
        <Container>
            <ComputerLogo width="100%" height="200" fill="white"/>
        </Container>
    );
}
