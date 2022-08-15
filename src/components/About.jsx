import {React,Component} from 'react';
import Home from '../components/Home.jsx';
// import '../scss/about.scss';
// import ReactImage from 'react-image-wrapper';
// import Founder from '../images/founderpic.jpg';
import {BsTelephoneFill} from 'react-icons/bs';
import {MdLocationPin} from 'react-icons/md';
import {FaLink} from 'react-icons/fa';
import {TiSocialInstagram  } from 'react-icons/ti';
import {TiSocialTwitter} from 'react-icons/ti';
import {TiSocialSkype} from 'react-icons/ti';


class About extends Component {
    render() {
        return(
            <div>
                <Home />
                <div className='market'>
                    <div className='place'>
                    <h3 className='forfounder'>About us</h3>  
     
                    <p>EMEDEN is leveraging on technology to provide farmers and consumers with a one-stop-shop solution; to meet their needs for value at low costs, all from the comfort of their homes.

The smallholder farmer inside the EMEDEN Farmers Online Platform using his mobile phone or any type of computer connects directly with thousands of other fellow farmers to buy farm inputs, sell farm produce, access training and extension and build their financial capacity

The food consumer too can enter the marketplace and buy home grown food/farm produce directly from the farmers.</p>
                    </div>
                      <h3 className='forfounder'>A word from the founder</h3>
                    <div className='founder'>
                      <p>I believe that farmers play a vital role that is rarely appreciated and underserved. 
                    My aim is to use the EMEDEN Farmers Platform to not only create sustainable livelihoods of rural farmers but a means to eradicate poverty, 
                    stimulate economic growth thereby empowering positive change not only in Kenya but also .</p>
                    {/* <ReactImage className='pic-founder'
                            src={Founder}
                            width={300}
                             height={250}
                        shape="round"
                        />  */}
                    </div>
                </div>
                <div className='footer'>
                    <div className='first-footer'>
                        <div className='call'>
                            <BsTelephoneFill />
                            <p> Call Us</p>
                            <p>+254 799 745 339</p>
                            <p>+254 772 745 339</p>
                        </div>
                        <div className='location'>
                            < MdLocationPin/>
                            <p> SESIA PLAZA. Kisumu Road, 
                                Opposite Nandi Gardens Trucadero, 
                               Eldoret Block E,25/8</p>
                        </div>
                        <div className='links'>
                            <FaLink/>
                            <p> Home</p>
                            <p>About Us/Services</p>
                            <p>Contact us</p>
                        </div>
                        <div className='media-icons'>
                            <TiSocialInstagram/>
                            <TiSocialSkype/>
                            <TiSocialTwitter/>
                        </div>
                    </div>
                    <div className='copyright'>
                    <p>2022 . All Rights Reserved.</p> 
                    </div>
                </div>
            </div>
        )
    }
}
export default About;