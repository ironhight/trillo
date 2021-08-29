import { ReactComponent as IconMagnifyingGlass } from '../../assets/img/SVG/magnifying-glass.svg';
import { ReactComponent as IconBookmark } from '../../assets/img/SVG/bookmark.svg';
import { ReactComponent as IconChat } from '../../assets/img/SVG/chat.svg';
import user from '../../assets/img/user.jpg';
import logo from '../../assets/img/logo.png';

const Header = () => (
	<div className="header">
		<img src={logo} alt="trillo logo" className="logo" />
		<form action="#" className="search">
			<input type="text" className="search__input" placeholder="Search hotels" />
			<button className="search__button">
				<IconMagnifyingGlass className="search__icon" />
			</button>
		</form>
		<nav className="user-nav">
			<div className="user-nav__icon-box">
				<IconBookmark className="user-nav__icon" />
				<span className="user-nav__notification">7</span>
			</div>
			<div className="user-nav__icon-box">
				<IconChat className="user-nav__icon" />
				<span className="user-nav__notification">13</span>
			</div>
			<div className="user-nav__user">
				<img src={user} alt="User" className="user-nav__user-photo" />
				<span className="user-nav__user-name">Ironhight</span>
			</div>
		</nav>
	</div>
);

export default Header;
