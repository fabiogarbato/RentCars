import './index.css';
import {Container, Row, Col, Image, Form, Button, InputGroup }  from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect } from 'react';
import { FaWhatsapp, FaLinkedinIn, FaGithub} from 'react-icons/fa';
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
import Armory from './images/armory.png';
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

      const handleClear = () => {
        setCepData({
          logradouro: '',
          bairro: '',
          localidade: '',
          uf: ''
        });
        setCep('');
        localStorage.removeItem('cepData'); 
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
                    <Nav.Link href="#sobre" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '30px', color: '#F7A70A', fontFamily: 'Fira Sans Condensed , sans-serif', fontWeight: 900, fontStyle: 'italic'}}>  Apresentação  </Nav.Link>
                    <Nav.Link href="#qualificacao" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '30px', color: '#F7A70A', fontFamily: 'Fira Sans Condensed , sans-serif', fontWeight: 900, fontStyle: 'italic' }}>Qualificações</Nav.Link>
                    <Nav.Link href="#experiencias" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '30px', color: '#F7A70A', fontFamily: 'Fira Sans Condensed , sans-serif', fontWeight: 900, fontStyle: 'italic' }}>Experiências</Nav.Link>
                    <Nav.Link href="#missao" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '30px', color: '#F7A70A', fontFamily: 'Fira Sans Condensed , sans-serif', fontWeight: 900, fontStyle: 'italic' }}>Missão</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Container className='background-space'></Container>
        <Container className='background-section2'>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <span className='text-first' style={{color:'#F7A70A'}}>Quem Sou Eu?</span>
                    </Col>
                </WithAnimation>
            </Row>
            <Container className='background-space'></Container>
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
                    <Col id='sobre' xs={12} lg={6} className='d-flex justify-content-center align-items-center'>
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
            <WithAnimation>
                <Container className='background-button d-flex flex-column flex-sm-row justify-content-center align-items-center' style={{ minHeight: '10vh' }}>
                        <Col xs={4} lg={3} className='d-flex justify-content-center align-items-center'>
                            <a href="https://www.linkedin.com/in/fábio-garbato-046316196/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <Button
                                    style={{
                                        backgroundColor: '#F7A70A',
                                        borderColor: 'black',
                                        borderRadius: '50px',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        fontSize: '20px', 
                                        padding: '15px 30px', 
                                        minWidth: '200px', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center', 
                                    }}
                                    className='rounded-pill custom-btn'
                                >
                                    <FaLinkedinIn style={{ marginRight: '10px' }} />LinkedIn
                                </Button>
                            </a>  
                        </Col>
                        <Col xs={4} lg={3} className='d-flex justify-content-center align-items-center'>
                            <a href="https://github.com/fabiogarbato" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <Button
                                    style={{
                                        backgroundColor: '#F7A70A',
                                        borderColor: 'black',
                                        borderRadius: '50px',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        fontSize: '20px', 
                                        padding: '15px 30px', 
                                        minWidth: '200px', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center', 
                                    }}
                                    className = 'rounded-pill custom-btn'
                                >
                                    <FaGithub style={{ marginRight: '10px' }} />GitHub  
                                </Button>  
                            </a>
                        </Col> 
                </Container>
            </WithAnimation>
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
                                Apaixonado por <span style={{fontWeight: 'bold'}}>tencologia</span>, e entusiasta por <span style={{fontWeight: 'bold'}}>carros</span>, natural de São Paulo - SP, aos 17 anos me mudei para Curitiba, onde resido sozinho até hoje com meus 22 anos.                               
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
                                Como entusiasta do setor automobilistico, gosto muito de sair nos meus tempos livres de carro, viajando, <span style={{fontWeight: 'bold'}}>explorando novos lugares</span>, e <span style={{fontWeight: 'bold'}}>conhecendo novas culturas</span>. Para conhecer novos carros, costumo <span style={{fontWeight: 'bold'}}>alugar</span>, para testar os mais diversos modelos! Também sou <span style={{fontWeight: 'bold'}}>Gamer</span> nas horas vagas, gostando muito de <span style={{fontWeight: 'bold'}}>Simulação, SoulsLike e MetroidVania.</span>
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
                    </Row> 
                </Container>
            </WithAnimation>
        </Container>
        <Container className='background-space'></Container>
        <WithAnimation>
            <Container id='qualificacao' className='text-first background-cardapio' style={{ color: '#F7A70A' }}>Algumas de Minhas Qualificações</Container>
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
                    <WithAnimation>
                        <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'>
                            <span className='text-before' style={{ color: '#F7A70A' }}>EXEMPLO API</span>
                        </Col>
                    </WithAnimation>
                </Row>
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
        <Container className='background-button d-flex justify-content-center align-items-center' style={{ minHeight: '10vh' }}>
            <Button
                style={{
                    backgroundColor: '#F7A70A',
                    borderColor: 'black',
                    borderRadius: '50px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    fontSize: '20px', 
                    padding: '15px 30px', 
                    minWidth: '200px', 
                }}
            className = 'rounded-pill custom-btn'
            onClick={handleClear}
            >
                Limpar
            </Button>
        </Container>
        <Container className='background-space'></Container>
        <WithAnimation>
            <Container id='experiencias' className='text-first background-cardapio' style={{ color: '#F7A70A' }}>Minhas Experiências</Container>
        </WithAnimation>
        <Container className='background-space'></Container>
        <Container className='background-experience'>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'>
                        <span className='text-before' style={{ color: '#F7A70A' }}>ACADÊMICO</span>
                    </Col>
                </WithAnimation>
            </Row>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'> 
                        <div className='d-flex align-items-start flex-grow-1'>
                            <p className='text-description' style={{ color: 'black' }}>
                                Graduado em Bacharel de <span style={{fontWeight: 'bold'}}>Ciência da Computação</span>, com término de Curso em Dezembro de 2023. Orgulhosamente destaco a realização do meu <span style={{fontWeight: 'bold'}}>TCC</span>, que teve como nota final sua pontuação máxima - <span style={{fontWeight: 'bold'}}>10 pontos</span>, o qual junto de minha equipe utilizamos <span style={{fontWeight: 'bold'}}>React.js</span> no framework de FrontEnd do projeto e <span style={{fontWeight: 'bold'}}>Python</span> no Backend, utilizando bibliotecas de redes neurais para a inteligência artificial e bibliotecas de integração com <span style={{fontWeight: 'bold'}}>APIs</span> utlizadas no projeto.                              
                            </p>
                        </div>
                    </Col>
                </WithAnimation>
            </Row>
            <Container className='background-space'></Container>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'>
                        <span className='text-before' style={{ color: '#F7A70A' }}>PROFISSIONAL</span>
                    </Col>
                </WithAnimation>
            </Row>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'> 
                        <div className='d-flex align-items-start flex-grow-1'>
                            <p className='text-description' style={{ color: 'black' }}>
                                Iniciei minha trajetória profissional na área de <span style={{fontWeight: 'bold'}}>T.I</span> em Fevereiro/2020 onde tive meus primeiros contatos com banco de dados relacionais, e a linguagem de programação PASCAL. Nessa época eu atuava como <span style={{fontWeight: 'bold'}}>Suporte ao cliente</span> na área de tecnologia, área que fiquei até 2021, onde consegui uma oportunidade de <span style={{fontWeight: 'bold'}}>Estágio</span>, na empresa que estou atualmente, posteriormente efetivado a <span style={{fontWeight: 'bold'}}>Desenvolvedor Júnior</span> antes do término do meu contrato de estágio, e esse ano de 2024 promovido a <span style={{fontWeight: 'bold'}}>Desenvolvedor Pleno</span>.                              
                            </p>
                        </div>
                    </Col>
                </WithAnimation>
            </Row>
            <Container className='background-space'></Container>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'> 
                        <div className='d-flex align-items-start flex-grow-1'>
                            <p className='text-description' style={{ color: 'black' }}>
                                Em meu contrato <span style={{fontWeight: 'bold'}}>CLT</span>, sou desenvolvedor de sistemas ERP, de gestão empresarial, atuo em grandes clientes como Editora Arco, Aprende Brasil(Positivo) e Parana Clínicas. Trabalho com várias tecnologias, cada uma em seu âmbito específco, dentre elas cito o <span style={{fontWeight: 'bold'}}>Delphi 7/XE</span> nos sitemas ERP, <span style={{fontWeight: 'bold'}}>C#</span> no desenvolvimento de <span style={{fontWeight: 'bold'}}>APIs REST</span>, e no desenvolvimento de websites internos (Back-End e Front-End) com <span style={{fontWeight: 'bold'}}>HTML5, CSS3, JavaScriptES6, Vue.Js, Node.Js e TypeScript.</span>                              
                            </p>
                        </div>
                    </Col>
                </WithAnimation>
            </Row>
            <Container className='background-space'></Container>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'> 
                        <div className='d-flex align-items-start flex-grow-1'>
                            <p className='text-description' style={{ color: 'black' }}>
                                Minha rotina consiste na <span style={{fontWeight: 'bold'}}>análise de demandas</span> passadas pelo cliente, ou pelo meu líder tecnico, avaliar sua severidade, e propor a melhor forma de corrigir, ou melhorar o que está sendo solicitado. Participo de reuniões diárias com os clientes dos projetos os quais participo, para entender melhor as suas necessidades e entregar um <span style={{fontWeight: 'bold'}}>código de qualidade</span>. No meu dia-a-dia também está muito presente a metodologia <span style={{fontWeight: 'bold'}}>SCRUM</span>, com a inclusão de <span style={{fontWeight: 'bold'}}>Dailys</span> e <span style={{fontWeight: 'bold'}}>checkpoints</span> nas Sprints, visando ter um end-to-end nas atividades, e estabelecer pontos resolvidos daquela Sprint.
                            </p>
                        </div>
                    </Col>
                </WithAnimation>
            </Row>
            <Container className='background-space'></Container>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'> 
                        <div className='d-flex align-items-start flex-grow-1'>
                            <p className='text-description' style={{ color: 'black' }}>
                                No que diz respeito ao <span style={{fontWeight: 'bold'}}>controle de código</span> e versionamento, utilizamos o <span style={{fontWeight: 'bold'}}>GIT (Gitea)</span>, o qual é bem parecido com o GitHub, e distribuimos todas as atividades em <span style={{fontWeight: 'bold'}}>Branches</span>, sendo a <span style={{fontWeight: 'bold'}}>Master</span> a que contém codigos utilizados em ambiente de produção, <span style={{fontWeight: 'bold'}}>Develop</span> onde temos códigos que serão feitos os Merges com as branches de cada atividade, para posteriormente fazer o merge com a Master.
                            </p>
                        </div>
                    </Col>
                </WithAnimation>
            </Row>
            <Container className='background-space'></Container>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'> 
                        <div className='d-flex align-items-start flex-grow-1'>
                            <p className='text-description' style={{ color: 'black' }}>
                                Nos meus projetos <span style={{fontWeight: 'bold'}}>freelancer</span>, atuo no desenvolvimento de WebSites institucionais, e participio de projetos de sistemas web com tecnologias como, <span style={{fontWeight: 'bold'}}>HTML5, CSS3, JavaScriptES6, Vue.Js, Node.Js e TypeScript.</span> Recentemente fui contratado para reescrever o site do meu cliente <span style={{fontWeight: 'bold'}}>Armory Consulting.</span> Abaixo link para conferir o preview que está previsto para o final de Fevereiro.
                            </p>
                        </div>
                    </Col>
                </WithAnimation>
            </Row>
            <Container className='background-space'></Container>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <a href="https://armory-consulting.vercel.app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <Image
                                className="d-block zoom-hover"
                                src={Armory}
                                alt="Primeiro slide"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '30vh',
                                    objectFit: 'contain',
                                    objectPosition: 'center center',
                                }}
                            />
                        </a>
                    </Col>
                </WithAnimation>
            </Row>
        </Container>
        <Container className='background-space'></Container>
        <WithAnimation>
            <Container id='missao' className='text-first background-cardapio' style={{ color: '#F7A70A' }}>Missão, Visão e Valores</Container>
        </WithAnimation>
        <Container className='background-space'></Container>
        <Container className='background-experience'>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'>
                        <span className='text-before' style={{ color: '#F7A70A' }}>MISSÃO</span>
                    </Col>
                </WithAnimation>
            </Row>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'> 
                        <div className='d-flex align-items-start flex-grow-1'>
                            <p className='text-description' style={{ color: 'black' }}>
                                Meu compromisso é entregar um serviço de <span style={{fontWeight: 'bold'}}>qualidade</span>, guiado por seriedade e dedicação. Empenho-me em superar expectativas, visando eficiência em cada projeto.                               
                            </p>
                        </div>
                    </Col>
                </WithAnimation>
            </Row>
            <Container className='background-space'></Container>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'>
                        <span className='text-before' style={{ color: '#F7A70A' }}>VISÃO</span>
                    </Col>
                </WithAnimation>
            </Row>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'> 
                        <div className='d-flex align-items-start flex-grow-1'>
                            <p className='text-description' style={{ color: 'black' }}>
                                Almejo ser conhecido no mercado pela <span style={{fontWeight: 'bold'}}>qualidade</span> do meu serviço. Estou comprometido com a melhoria contínua e a inovação, visando sempre a satisfação dos clientes nos projetos os quais participo.
                            </p>
                        </div>
                    </Col>
                </WithAnimation>
            </Row>
        </Container>
        <Container className='background-space'></Container>
        <footer className="text-light py-3" style={{ backgroundColor: '#be7f01' }}>
            <Container fluid>
                <p className="text-center mb-0" style={{color:'black', fontFamily: 'Fira Sans Condensed , sans-serif'}}>© Fábio Garbato - {new Date().getFullYear()}</p>
            </Container>
        </footer>
        <WhatsAppButton phoneNumber="41987372059"/>
    </Container>
  );
}

export default App;