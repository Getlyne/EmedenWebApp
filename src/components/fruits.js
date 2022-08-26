import {React, Component} from 'react';
import '../scss/forfruits.scss';
import Footer from '../components/Footer,jsx';
import { CCard } from '@coreui/react';
import { CCardImage } from '@coreui/react';
import { CCardBody } from '@coreui/react';
import { CCardText } from '@coreui/react';
import {SiMarketo} from 'react-icons/si';
import {FaMoneyBillWaveAlt} from 'react-icons/fa';
import {FaFirstOrderAlt} from 'react-icons/fa';
import {GiFarmTractor} from 'react-icons/gi';
import {IoIosNotifications} from 'react-icons/io'
import {RiLoginBoxFill} from 'react-icons/ri';
import {HiShoppingCart} from 'react-icons/hi';
import {BsFillPersonFill} from 'react-icons/bs';
import Beans from '../images/beans.jpg';
import Avo from '../images/avocados.jpg';
import potatos from '../images/potatoes.jpg';
import onion from '../images/onions.jpg';
import pumpkin from '../images/Pumpkin-Farm.jpg';
import tomato from '../images/Tomato 2.png';
import hoho from '../images/hoho.jpg';
import small_ova from '../images/cut-avocado.jpg';
import carrot3 from '../images/Carrot-fruits-From-Engineer.gif';
import courgette from '../images/courgette.jpg';
import potato from '../images/potatoes-farming.jpg';
import pepper from '../images/redpepper.jpg';
import sweet from '../images/sweetpotatoes.png';
import peas from '../images/Peeled-peas.jpg';

class Fruits extends Component {
    render() {
        return(
            <div className='for fruits'>
                  <div className='sidemenu'>
                  <div className='profile'>
                    <p className='profilename'> Gilbert Onyi</p>
                  </div>
                  <div className='menu'>
                     <p> <SiMarketo/>Soko mkononi</p>
                    <p>  <BsFillPersonFill/>Mwalimu</p>
                     <p> <FaMoneyBillWaveAlt/>Sell</p>
                    <p>  <FaFirstOrderAlt/>Order history</p>
                   <p>    <GiFarmTractor/>My farm produce</p>
                     <p><IoIosNotifications/>Notifications</p>
                     <p><HiShoppingCart/>Shopping cart</p>
                     <p><SiMarketo/>Market</p>
                    <p>  <RiLoginBoxFill/>Login</p>
                  </div>
              </div>

              <div className='fruitsmenu'>
              <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {Beans} width='160px' height='200px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                        Heading 1
                     
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {carrot3} width='160px' height='200px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                        Heading 2
                     
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {hoho} width='160px'height='200px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                        Heading 3
                    
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {peas} width='160px' height= '200px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                    Heading 4
                 
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {small_ova} width='160px' height= '200px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                        Heading 5
                       
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {Avo} width='160px' height= '200px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                      Heading 6
                    
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {hoho} width='160px' height= '200px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                     Heading 7
                  
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {pumpkin} width='160px' height= '200px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                     Heading 8
                    
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {pepper} width='160px' height= '200px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                        Heading 9
                 
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {onion} width='160px' height= '200px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                     Heading 10
                    
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {potato} width='160px' height= '200px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                      Heading 12
                   
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {courgette} width='160px' height= '200px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                      Heading 12
                   
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {potatos} width='160px' height= '200px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                      Heading 12
                   
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {Avo} width='160px' height= '200px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                      Heading 12
                   
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {hoho} width='160px' height= '200px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                      Heading 12
                   
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {small_ova} width='160px' height= '200px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                      Heading 12
                   
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {potatos} width='160px' height= '200px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                      Heading 12
                   
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {pumpkin} width='160px' height= '200px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                      Heading 12
                   
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {sweet} width='160px' height= '200px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                      Heading 12
                   
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {tomato} width='160px' height= '200px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                      Heading 12
                   
                    </CCardText>
                    </CCardBody>
                  </CCard>
              </div>
              <footer>
                <Footer/>
                </footer>
            </div>
        )
    }
}

export default Fruits;