import React from 'react';
import './assets/sass/main.scss';
import Header from './components/header/header.component';
import SideBar from './components/sidebar/sidebar.component';
import Gallery from './components/gallery/gallery.component';
import Overview from './components/overview/overview.component';
import Detail from './components/detail/detail.component';
import Cta from './components/cta/cta.component';

function App() {
	return (
		<div className="container">
			<Header />
			<div className="content">
				<SideBar />
				<main className="hotel-view">
					<Gallery />
					<Overview />
					<Detail />
					<Cta />
				</main>
			</div>
		</div>
	);
}

export default App;
