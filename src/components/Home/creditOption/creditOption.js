import React from 'react';
// import Title from '../../Generic/Title';
import { Row, Col, Card } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';
import diana from '../../../assets/img/svg/diana.svg';
import flecha from '../../../assets/img/svg/flechas.svg';
import reloj from '../../../assets/img/svg/reloj.svg';
// import '../../../css/creditoption.css';
import Icons from '../Icons/Icons';
import PropTypes from "prop-types";

const data = [
  {
    icon: diana,
    title: 'respuestas más ágiles y con mayor precisión',
    description:<>
     la función más importante de un bróker es el asesoramiento y al ser un experto en productos hipotecarios de distintas instituciones. <br/>puede responder mejor todas tus preguntas e incluso darte consejos para elegir tu mejor opción.
    </>,
  },
  {
    icon: flecha,
    title: 'múltiples opciones',
    description: <>
      <p style={{paddingTop:'5px'}}>
      <br/>
      al conocer todos los requerimientos de los bancos, los brokers pueden saber si eres apto para este tipo de créditos o en caso de no ser así te dirá que es lo que debes mejorar y cómo hacerlo.
      </p>
    </>,
  },
  {
    icon: reloj,
    title: 'ahorras dinero y tiempo',
    description: <>
      <p style={{paddingTop:'5px'}}>
      <br/>
      gracias a los análisis y conocimiento de todos los productos hipotecarios en el mercado, nuestros brokers pueden ayudarte a ahorrarte miles de pesos por cada millón.<br/>
      además, no tendrás que acudir a todas las sucursales bancarias a hacer trámites o entregar documentación, el bróker lo hará por ti.
      </p>
    </>,
  },
]



const CreditOption = (props) => {

  
  return (
    <>
      <div id="creditOption" className={`${props.estado === 0 ? 'pt-3 pb-5 background' : 'mt-5 mb-3'} text-center ml-auto mr-auto`}>
      <Card.Header id="header"  className="title-dp-blue fz48  fw300 text-left lg2"><span className='title-dp'> cómo </span> te ayudamos </Card.Header>
      <Row className="justify-content-center g-4 pt-40">
        {
          data.map((item, index) => {
            return (
              <Col key={index} xs={12} sm={6} md={6} lg={3} className="mb-3 align-items-stretch flex30"> 
                <Card className="card-info">
                  <Icons img={item.icon} alt={ item.title } width="100px" />
                    <Card.Body>
                      <Card.Title style={{color:'#023473' ,fontWeight:'600'}}  className="metropolisReg">{item.title}</Card.Title>
                        <Card.Text >
                          <div className="metropolisReg text-center" style={{color:'#023473'}}>
                            {item.description}
                          </div>
                        </Card.Text>
                    </Card.Body>
                  </Card>
              </Col>
            )
          })
        }
      </Row>
        
      </div>
    </>
  );
}

CreditOption.propTypes = {
    estado: PropTypes.number.isRequired,
}

export default CreditOption