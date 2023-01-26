import './Header.css';
import { Link } from "react-router-dom"

const Header = () => {
    
	return (
			<header className='header'>
				<Link className='navLink' to="/"> HOME </Link>
				<Link className='navLink' to="/search"> SEARCH </Link>
				<Link className='navLink' to="/login"> LOGIN </Link>
			</header>
	)
}

export default Header
