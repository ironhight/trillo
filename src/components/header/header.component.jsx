const Header = () => (
	<div className="header">
		<img src="assets/img/logo.png" alt="trillo logo" className="logo" />
		<form action="#" className="search">
			<input type="text" className="search__input" placeholder="Search hotels" />
			<button className="search__button">
				<svg className="search__icon">
					<use href="assets/img/sprite.svg#icon-magnifying-glass" />
				</svg>
			</button>
		</form>
		<nav className="user-nav">
			<div className="user-nav__icon-box">
				<svg className="user-nav__icon">
					<use href="assets/img/sprite.svg#icon-bookmark" />
				</svg>
				<span className="user-nav__notification">7</span>
			</div>
			<div className="user-nav__icon-box">
				<svg className="user-nav__icon">
					<use href="assets/img/sprite.svg#icon-chat" />
				</svg>
				<span className="user-nav__notification">13</span>
			</div>
			<div className="user-nav__user">
				<img src="assets/img/user.jpg" alt="User photo" className="user-nav__user-photo" />
				<span className="user-nav__user-name">Ironhight</span>
			</div>
		</nav>
	</div>
);

export default Header;
