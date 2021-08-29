import hotel1 from '../../assets/img/hotel-1.jpg';
import hotel2 from '../../assets/img/hotel-2.jpg';
import hotel3 from '../../assets/img/hotel-3.jpg';

const Gallery = () => (
	<div className="gallery">
		<figure className="gallery__item">
			<img src={hotel1} alt="Hotel 1" className="gallery__photo" />
		</figure>
		<figure className="gallery__item">
			<img src={hotel2} alt="Hotel 2" className="gallery__photo" />
		</figure>
		<figure className="gallery__item">
			<img src={hotel3} alt="Hotel 3" className="gallery__photo" />
		</figure>
	</div>
);

export default Gallery;
