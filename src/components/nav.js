import {React, Component} from "react";
import '../scss/nav.scss';
import logo from '../images/EMEDEN-LOGO.png';


class Nav extends Component{
    render() {
        return (
            <div>
                <div className='nav-wrapper'>
                <div className='nav'>
                    <div className="emeden">
                    <img src={logo} width={60} />
                    </div>
                    <div className="nav-list">
                        <ul>
                        <li> Soko</li>
                        <li>Mwalimu</li>
                        <li>About us</li>
                        <li>Services</li>
                      <li>Contact</li>
                        <li>Sign in</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        )

        
    }
}
export default Nav;
