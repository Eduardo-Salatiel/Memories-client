import logo from './../../../assets/img/logos/small-logo.png';
import { Link } from 'react-router-dom';

import DropDownMenu from '../../DropDownMenu/DropDownMenu';
import './style.scss';

const Header = () => {
    return ( 
        <header className="header">
            <Link to="/">
                <img className="header-logo" src={logo} alt="memories-logo"/>
            </Link>
            <DropDownMenu />
        </header>
     );
}
 
export default Header;