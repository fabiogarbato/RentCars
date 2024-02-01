import './index.css';
import './tabela.css';
import {Container, Row, Col, Image, Form, Button, InputGroup }  from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import logo from './images/logo.png';
import Hollow from './images/hollow.png'
import Dark from './images/dark.png'
import Euro from './images/euro.png'
import Banco from './images/banco.png'
import Css from './images/css.png'
import Html from './images/html.png'
import JavaScript from './images/javascript.png'
import Nodejs from './images/node.png'
import React_framework from './images/react.png'
import Fabio from './images/fabio.jpg';
import WithAnimation from './WithAnimation';
import fetchCepData from './API_Cep';

const WhatsAppButton = ({ phoneNumber }) => {
    const whatsappLink = `https://wa.me/55${phoneNumber}?text=Olá!%20Estamos%20entrando%20em%20contato%20contigo%20para%20informa-lo%20que%20você%20foi%20*APROVADO*%20em%20nosso%20processo%20seletivo!%20:D`;
    return (
      <a href={whatsappLink} className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
    );
  };

const App = () => {  

    const [cep, setCep] = useState('');
    const [cepData, setCepData] = useState({
      logradouro: '',
      bairro: '',
      localidade: '',
      uf: ''
    });

    useEffect(() => {
        const storedCepData = localStorage.getItem('cepData');
        if (storedCepData) {
          setCepData(JSON.parse(storedCepData));
        }
      }, []);
    
      const handleCepSubmit = async (event) => {
        event.preventDefault();
        const data = await fetchCepData(cep);
        if (data) {
          setCepData(data);
          localStorage.setItem('cepData', JSON.stringify(data));
        }
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setCepData(prevState => ({
          ...prevState,
          [name]: value
        }));
        localStorage.setItem('cepData', JSON.stringify({ ...cepData, [name]: value }));
      };

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
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'>
                        <span className='text-before' style={{ color: '#F7A70A' }}>FÁBIO GARBATO</span>
                    </Col>
                </WithAnimation>
            </Row>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'>
                        <span className='text-before' style={{ color: '#F7A70A' }}>22 ANOS</span>
                    </Col>
                </WithAnimation>
            </Row>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'>
                        <span className='text-before' style={{ color: '#F7A70A' }}>CURITIBA - PR</span>
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
                                Apaixonado por tencologia, e entusiasta por carros, natural de São Paulo - SP, aos 17 anos me mudei para Curitiba, onde resido sozinho até hoje com meus 22 anos.                               
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
        <WithAnimation>
            <Container className='background-section2'>
                <Row className="mb-3">
                    <Col xs={12} md={4} style={{ padding: 0, height: '40vh'}}>
                        <Image
                            className="d-block move"
                            src={Html}
                            roundedCircle
                            style={{
                            width: '100%',        
                            height: '40vh',       
                            objectFit: 'contain', 
                            objectPosition: 'center center' 
                            }}
                        />
                                            </Col>
                    <Col xs={12} md={4} style={{ padding: 0, height: '40vh'}}>
                        <Image
                            className="d-block move"
                            src={Css}
                            roundedCircle 
                            style={{
                            width: '100%',        
                            height: '40vh',       
                            objectFit: 'contain', 
                            objectPosition: 'center center' 
                            }}
                        />
                                            </Col>
                    <Col xs={12} md={4} style={{ padding: 0, height: '40vh'}}>
                        <Image
                            className="d-block move"
                            src={JavaScript}
                            roundedCircle 
                            style={{
                            width: '100%',        
                            height: '40vh',       
                            objectFit: 'contain', 
                            objectPosition: 'center center' 
                            }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4} style={{ padding: 0, height: '40vh'}}>
                        <Image
                            className="d-block move"
                            src={Nodejs}
                            roundedCircle 
                            style={{
                            width: '100%',        
                            height: '40vh',       
                            objectFit: 'contain', 
                            objectPosition: 'center center' 
                            }}
                        />           
                    </Col>
                    <Col xs={12} md={4} style={{ padding: 0, height: '40vh'}}>
                        <Image
                            className="d-block move"
                            src={React_framework}
                            roundedCircle 
                            style={{
                            width: '100%',        
                            height: '40vh',       
                            objectFit: 'contain', 
                            objectPosition: 'center center' 
                            }}
                        />
                    </Col>
                    <Col xs={12} md={4} style={{ padding: 0, height: '40vh'}}>
                        <Image
                            className="d-block move"
                            src={Banco}
                            roundedCircle 
                            style={{
                            width: '100%',        
                            height: '40vh',       
                            objectFit: 'contain', 
                            objectPosition: 'center center' 
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </WithAnimation>
        <Container className='background-space'></Container>
        <WithAnimation>
            <Container className='background-section2'>
                <Row className='h-100 d-flex justify-content-center align-items-center'>
                    <Col xs={12} md={6}>
                        <Form onSubmit={handleCepSubmit}>
                            <Form.Label style={{color:'#F7A70A', fontFamily: 'Fira Sans Condensed , sans-serif', fontWeight: 900, fontStyle: 'italic'}}>CEP</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Digite seu CEP"
                                    value={cep}
                                    onChange={(e) => setCep(e.target.value)}
                                    required
                                />
                                <Button style={{ backgroundColor: '#F7A70A', color:'black' }} variant="outline-secondary" type="submit">
                                    Buscar
                                </Button>
                            </InputGroup>
                        </Form>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label style={{color:'#F7A70A', fontFamily: 'Fira Sans Condensed , sans-serif', fontWeight: 900, fontStyle: 'italic'}}>Logradouro</Form.Label>
                                <Form.Control type="text" name="logradouro" value={cepData.logradouro} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label style={{color:'#F7A70A', fontFamily: 'Fira Sans Condensed , sans-serif', fontWeight: 900, fontStyle: 'italic'}}>Bairro</Form.Label>
                                <Form.Control type="text" name="bairro" value={cepData.bairro} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label style={{color:'#F7A70A', fontFamily: 'Fira Sans Condensed , sans-serif', fontWeight: 900, fontStyle: 'italic'}}>Cidade</Form.Label>
                                <Form.Control type="text" name="localidade" value={cepData.localidade} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label style={{color:'#F7A70A', fontFamily: 'Fira Sans Condensed , sans-serif', fontWeight: 900, fontStyle: 'italic'}}>Estado</Form.Label>
                                <Form.Control type="text" name="uf" value={cepData.uf} onChange={handleChange} />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </WithAnimation>
        <Container className='background-space'></Container>
        <footer className="text-light py-3" style={{ backgroundColor: '#be7f01' }}>
            <Container fluid>
                <p className="text-center mb-0" style={{color:'black'}}>© Fábio Garbato - {new Date().getFullYear()}</p>
            </Container>
        </footer>
        <WhatsAppButton phoneNumber="41987372059"/>
    </Container>
  );
}

export default App;