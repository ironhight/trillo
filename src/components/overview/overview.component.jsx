import { ReactComponent as IconStar } from '../../assets/img/SVG/star.svg';
import { ReactComponent as IconLocationPin } from '../../assets/img/SVG/location-pin.svg';

const Overview = () => (
	<div className="overview">
		<h1 className="overview__heading">Hotel Las Palmas</h1>
		<div className="overview__stars">
			<IconStar className="overview__icon-star" />
			<IconStar className="overview__icon-star" />
			<IconStar className="overview__icon-star" />
			<IconStar className="overview__icon-star" />
			<IconStar className="overview__icon-star" />
		</div>
		<div className="overview__location">
			<IconLocationPin className="overview__icon-location" />
			<button className="btn-inline">Albufeira, Portugal</button>
		</div>
		<div className="overview__rating">
			<div className="overview__rating-average">8.6</div>
			<div className="overview__rating-count">429 votes</div>
		</div>
	</div>
);

export default Overview;
