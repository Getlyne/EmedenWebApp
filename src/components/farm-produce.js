import {React, Component} from 'react';
import '../scss/farm.scss';
import Footer from '../components/Footer.jsx';
import milk from '../images/milk.jpeg';
import chicken from '../images/chicken.jpeg';
import honey from '../images/honey.jpeg';
import eggs from '../images/eggs.jpeg';
import peas from '../images/Peeled-peas.jpg';
import vegetables from '../images/vegetables.jpeg';
import {SiMarketo} from 'react-icons/si';
import {FaMoneyBillWaveAlt} from 'react-icons/fa';
import {FaFirstOrderAlt} from 'react-icons/fa';
import {GiFarmTractor} from 'react-icons/gi';
import {IoIosNotifications} from 'react-icons/io'
import {RiLoginBoxFill} from 'react-icons/ri';
import {HiShoppingCart} from 'react-icons/hi';
import {BsFillPersonFill} from 'react-icons/bs';


class Farm extends Component {
        render() {
            return(
                <div className='farmproduce'>
                    <h1>Farm produce</h1>
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
                    <div className='produce'>
                    <div className='fruits_veggies'>
                        <div className='veg'>
                        <img src={vegetables} height={'200px'}  width={'150px'}/>
                        </div>
                        <div className='words'>
                            <h2>Fruits and Vegetables</h2>
                            <p>For soil fertility and enhancement</p>
                        </div>
                    </div>

                    <div className='legumes'>
                        <div className='peas'>
                            <img src ={peas} height={'200px'}  width={'150px'}/>
                        </div>
                        <div className='words'>
                            <h2>Legumes</h2>
                            <p>For soil fertility and enhancement</p>
                        </div>
                    </div>
                    

                    <div className='dairy'>
                        <div classname='milk'>
                            <img src={milk} height={'200px'}  width={'150px'}/>
                        </div>
                        <div className='words'>
                            <h2>Dairy Products</h2>
                            <p>For soil fertility and enhancement</p>
                        </div>
                    </div>

                    <div className='chicken'>
                        <div className='kienyeji'>
                            <img src ={chicken} height={'200px'} width={'150px'}/>
                        </div>
                        <div className='words'>
                            <h2>Indigenous(Kienyeji) chicken</h2>
                            <p>For soil fertility and enhancement</p>
                        </div>
                    </div>

                    <div className='bees'>
                        <div className='honey'>
                            <img src={honey} height={'200px'}  width={'150px'}/>
                        </div>
                        <div className='words'>
                            <h2>Bees and Bee products</h2>
                            <p>For soil fertility and enhancement</p>
                        </div>
                    </div>

                    <div className='eggs'>
                        <div className='mayai'>
                            <img src={eggs} height={'200px'}  width={'150px'}/>
                        </div>
                        <div className='words'>
                            <h2>Indigenous eggs</h2>
                            <p>For soil fertility and enhancement</p>
                        </div>
                    </div>
                    </div>
                    <footer>
                        <Footer/>
                    </footer>
                </div>
            )
        }
}
export default Farm;