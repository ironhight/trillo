import { ReactComponent as IconHome } from '../../assets/img/SVG/home.svg';
import { ReactComponent as IconAircarftTakeOff } from '../../assets/img/SVG/aircraft-take-off.svg';
import { ReactComponent as IconKey } from '../../assets/img/SVG/key.svg';
import { ReactComponent as IconMap } from '../../assets/img/SVG/map.svg';

const SideBar = () => (
	<nav className="sidebar">
		<ul className="side-nav">
			<li className="side-nav__item side-nav__item--active">
				<a href="#" className="side-nav__link">
					<IconHome className="side-nav__icon" />
					<span>Hotel</span>
				</a>
			</li>
			<li className="side-nav__item">
				<a href="#" className="side-nav__link">
					<IconAircarftTakeOff className="side-nav__icon" />
					<span>Flight</span>
				</a>
			</li>
			<li className="side-nav__item">
				<a href="#" className="side-nav__link">
					<IconKey className="side-nav__icon" />
					<span>Car rental</span>
				</a>
			</li>
			<li className="side-nav__item">
				<a href="#" className="side-nav__link">
					<IconMap className="side-nav__icon" />
					<span>Tours</span>
				</a>
			</li>
		</ul>
		<div className="legal">© 2021 by trillo. All rights reserved.</div>
	</nav>
);

export default SideBar;
