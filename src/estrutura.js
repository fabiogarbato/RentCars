import './estrutura.css';
import React, { useRef } from 'react';
import imagem1 from '../../images/fabricantes/BERETTA.png'
import imagem2 from '../../images/fabricantes/Bersa.png'
import imagem3 from '../../images/fabricantes/boito.png'
import imagem4 from '../../images/fabricantes/Caracal.png'
import imagem5 from '../../images/fabricantes/Colt.png'
import imagem6 from '../../images/fabricantes/FN.gif'
import imagem7 from '../../images/fabricantes/Girsan.jpg'
import imagem8 from '../../images/fabricantes/Glock.jpg'
import imagem9 from '../../images/fabricantes/glock-old.jpg'
import imagem10 from '../../images/fabricantes/GRAND-POWER-Logo-2012..jpg'
import imagem11 from '../../images/fabricantes/HATSAN.jpg'
import imagem12 from '../../images/fabricantes/HECKER & KOCH.png'
import imagem13 from '../../images/fabricantes/Imbel.jpg'
import imagem15 from '../../images/fabricantes/Mossberg.jpg'
import imagem16 from '../../images/fabricantes/REMINGTON.jpg'
import imagem17 from '../../images/fabricantes/RUGER.png'
import imagem18 from '../../images/fabricantes/SAVAGE.png'
import imagem19 from '../../images/fabricantes/SIG-logo.png'
import imagem20 from '../../images/fabricantes/SPRINGFIELD.jpeg'
import imagem21 from '../../images/fabricantes/SW.png'
import imagem22 from '../../images/fabricantes/Taurus.jpg'

const images = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7, imagem8, imagem9, imagem10, imagem11, imagem12, imagem13, imagem15, imagem16, imagem17, imagem18, imagem19, imagem20, imagem21, imagem22]

function Estrutura() {

  return (
    <Container fluid style={{ backgroundColor: '#2b2928', minHeight: '100vh' }}>
      
        <footer className="bg-black text-light py-3">
            <Container fluid>
                <p className="text-center mb-0">© GB - Tecnologia - {new Date().getFullYear()}</p>
            </Container>
        </footer>
        <WhatsAppButton phoneNumber="41987372059"/>
    </Container>
  );
}

export default Estrutura;