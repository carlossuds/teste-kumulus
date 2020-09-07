import React from 'react';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <a href="https://kumulus.com.br/">
        <img
          height={40}
          src={require('../../assets/kumulus.png')}
          alt="Kumulus"
        />
      </a>
    </Container>
  );
}
