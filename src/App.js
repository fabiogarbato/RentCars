import './index.css';
import './tabela.css';
import {Container, Carousel, Row, Col, Image, Table, Button}  from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import logo from './images/logo.png';
import OBelico from './images/Obelico.png';
import Cabana from './images/logo-cabana.png';
import Face from './images/face.png';
import Insta from './images/insta.png';
import Fabio from './images/fabio.jpg';
import VideoInstitucional from './video/institucional_video.mp4';
import WithAnimation from './WithAnimation';
import Hollow from './images/hollow.png'
import Dark from './images/dark.png'
import Euro from './images/euro.png'

const WhatsAppButton = ({ phoneNumber }) => {
    const whatsappLink = `https://wa.me/55${phoneNumber}?text=Adorei%20seu%20artigo`;
    return (
      <a href={whatsappLink} className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
    );
  };

const App = () => {  

  return (
    <Container fluid style={{ backgroundColor: 'black', minHeight: '100vh' }}>
        <Navbar bg="blue" expand="lg">
            <Navbar.Brand>
                <Image src={logo} alt="Logo" style={{ maxWidth: '15vh', marginRight: '10px', marginLeft: '60px'}} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#sobre" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '40px', color: '#F7A70A', fontFamily: 'Fira Sans Condensed , sans-serif', fontWeight: 900, fontStyle: 'italic'}}>  Quem Sou  </Nav.Link>
                    <Nav.Link href="#cardapio" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '40px', color: '#F7A70A', fontFamily: 'Fira Sans Condensed , sans-serif', fontWeight: 900, fontStyle: 'italic' }}>Qualificações</Nav.Link>
                    <Nav.Link href="#contato" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '40px', color: '#F7A70A', fontFamily: 'Fira Sans Condensed , sans-serif', fontWeight: 900, fontStyle: 'italic' }}>Experiências</Nav.Link>
                    <Nav.Link href="#localizacao" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '40px', color: '#F7A70A', fontFamily: 'Fira Sans Condensed , sans-serif', fontWeight: 900, fontStyle: 'italic' }}>Missão</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Container id='sobre' className='background-space'></Container>
        <Container className='background-section2'>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <span className='text-first' style={{color:'#F7A70A'}}>Quem Sou Eu?</span>
                    </Col>
                </WithAnimation>
            </Row>
            <Container id='sobre' className='background-space'></Container>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <Image
                            className="d-block"
                            src={Fabio}
                            alt="Primeiro slide"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '70vh',
                                objectFit: 'contain',
                                objectPosition: 'center center',
                                borderRadius: '50%', 
                            }}
                        />
                    </Col>
                </WithAnimation>
            </Row>
            <Container className='background-space'></Container>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'>
                        <span className='text-before' style={{ color: '#F7A70A' }}>UMA BREVE APRESENTAÇÃO</span>
                    </Col>
                </WithAnimation>
            </Row>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'> 
                        <div className='d-flex align-items-start flex-grow-1'>
                            <p className='text-description' style={{ color: 'black' }}>
                                Apaixonado por tencologia, e entusiasta de carros, natural de São Paulo - SP, aos 17 anos me mudei para Curitiba, onde resido sozinho até hoje com meus 22 anos.                               
                            </p>
                        </div>
                    </Col>
                </WithAnimation>
            </Row>
            <Container className='background-space'></Container>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'>
                        <span className='text-before' style={{ color: '#F7A70A' }}>HOBBIES</span>
                    </Col>
                </WithAnimation>
            </Row>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'> 
                        <div className='d-flex align-items-start flex-grow-1'>
                            <p className='text-description' style={{ color: 'black' }}>
                                Como entusiasta do setor automobilistico, gosto muito de sair nos meus tempos livres de carro, viajando, explorando novos lugares, e conhecendo novas culturas. Para conhecer novos carros, costumo alugar, para testar os mais diversos modelos! Também sou Gamer nas horas vagas, gostando muito de Simulação, SoulsLike e MetroidVania.
                            </p>
                        </div>
                    </Col>
                </WithAnimation>
            </Row>
            <Container className='background-space'></Container>
            <WithAnimation>
                <Container className='background-games'> 
                    <Row className="justify-content-center">
                        <Col xs={4} lg={3} className="d-flex justify-content-center px-lg-1">
                            <Image 
                                src={Hollow} 
                                roundedCircle 
                                className='zoom-hover'
                                style={{ 
                                    objectFit: 'cover', 
                                    width: '120px', 
                                    height: '120px',
                                    cursor:'pointer',  
                                }} 
                            />
                        </Col>
                        <Col xs={4} lg={3} className="d-flex justify-content-center px-lg-1">
                            <Image 
                                src={Dark} 
                                roundedCircle
                                className='zoom-hover' 
                                style={{ 
                                    objectFit: 'cover', 
                                    width: '150px', 
                                    height: '150px', 
                                    cursor:'pointer',
                                }} 
                            />
                        </Col>
                        <Col xs={4} lg={3} className="d-flex justify-content-center px-lg-1">
                            <Image 
                                src={Euro} 
                                roundedCircle
                                className='zoom-hover' 
                                style={{ 
                                    objectFit: 'cover', 
                                    width: '120px', 
                                    height: '120px', 
                                    cursor:'pointer',
                                }} 
                            />
                        </Col>
                    </Row> 
                </Container>

            </WithAnimation>
        </Container>
        <Container id='cardapio' className='background-space'></Container>
        <WithAnimation>
            <Container id='cardapio' className='text-first background-cardapio' style={{ color: '#F7A70A' }}>Minhas Qualificações</Container>
        </WithAnimation>
       
        <Container className='background-space'></Container>
        <footer className="bg-black text-light py-3">
            <Container fluid>
                <p className="text-center mb-0">© Fábio Garbato - {new Date().getFullYear()}</p>
            </Container>
        </footer>
        <WhatsAppButton phoneNumber="41987372059"/>
    </Container>
  );
}

export default App;