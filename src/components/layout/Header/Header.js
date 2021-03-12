
import DropDownMenu from '../../DropDownMenu/DropDownMenu'
import './style.scss'

const Header = () => {
    return ( 
        <header className="header">
            {/* {TODO-LOGO} */}
            <h1>Memories</h1>
            <DropDownMenu />
        </header>
     );
}
 
export default Header;