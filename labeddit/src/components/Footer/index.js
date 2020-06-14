import React from 'react';
import {
  FooterContainer
} from './style';


const Footer = () => {
  return (
    <FooterContainer>
      <div>
        {`© 2020 - ${(new Date()).getFullYear()}, Todos os direitos reservados`}
      </div>
    </FooterContainer>
  )
}

export default Footer