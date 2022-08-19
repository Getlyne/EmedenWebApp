import {React,Component} from 'react';
import Nav from '../components/nav.js';
import '../scss/home.scss';
import Card from '@mui/material/Card';
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
import potato from '../images/potatoes.jpg';
import onion from '../images/onions.jpg';
import pumpkin from '../images/Pumpkin-Farm.jpg';
import urea from '../images/urea.jpg';
import tomato from '../images/Tomato 2.png';
import hoho from '../images/hoho.jpg';
import carrot from '../images/cutcarrots.jpg';
import fertilizer from '../images/fertilizer.jpg';
import carrot2 from '../images/young-carrot.jpg';
import small_ova from '../images/cut-avocado.jpg';

class Home extends Component {
    render() {
        return(
            <div>
                <Nav/>
                <div className='sidemenu'>
                  <div className='profile'>
                    <p> Gilbert Onyiniyi</p>
                  </div>
                  <div className='menu'>
                     <p> <SiMarketo/>Soko mkononi</p>
                    <p>  <BsFillPersonFill/>Mwalimu</p>
                     <p> <FaMoneyBillWaveAlt/>Sell</p>
                    <p>  <FaFirstOrderAlt/>Order history</p>
                   <p>    <GiFarmTractor/>My farm produce</p>
                     <p><IoIosNotifications/>Notifications</p>
                     <p><HiShoppingCart/>shopping cart</p>
                     <p><SiMarketo/>market</p>
                    <p>  <RiLoginBoxFill/>login</p>
                  </div>
              </div>
                <div class='menu-veg'>
                <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {Beans} width='160px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                        Heading 1
                        body
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {Avo} width='160px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                        Heading 2
                        body
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {hoho} width='160px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                        Heading 3
                        body
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {pumpkin} width='160px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                    Heading 4
                    body
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {carrot} width='160px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                        Heading 5
                        body
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {small_ova} width='160px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                      Heading 6
                      body
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {fertilizer} width='160px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                     Heading 7
                     body
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {onion} width='160px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                     Heading 8
                     body
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {carrot2} width='160px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                        Heading 9
                        body
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {potato} width='160px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                     Heading 10
                     body
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {tomato} width='160px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                       Heading 11
                       body
                    </CCardText>
                    </CCardBody>
                  </CCard>

                  <CCard style={{ width: '10rem', background:'#fff'}}>
                    <CCardImage orientation="top" src= {urea} width='160px'/>
                  <CCardBody style={{align:'center'}}>
                    <CCardText>
                      Heading 12
                      body
                    </CCardText>
                    </CCardBody>
                  </CCard>
                </div>
            </div>
        )
    }
}
export default Home;