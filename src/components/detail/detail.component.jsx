import user1 from '../../assets/img/user-1.jpg';
import user2 from '../../assets/img/user-2.jpg';
import user3 from '../../assets/img/user-3.jpg';
import user4 from '../../assets/img/user-4.jpg';
import user5 from '../../assets/img/user-5.jpg';
import user6 from '../../assets/img/user-6.jpg';

const Detail = () => (
	<div className="detail">
		<div className="description">
			<p className="paragraph">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione
				sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
			</p>
			<p className="paragraph">
				Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore
				iure aliquid aliquam.
			</p>
			<ul className="list">
				<li className="list__item">Close to the beach</li>
				<li className="list__item">Breakfast included</li>
				<li className="list__item">Free airport shuttle</li>
				<li className="list__item">Free wifi in all rooms</li>
				<li className="list__item">Air conditioning and heating</li>
				<li className="list__item">Pets allowed</li>
				<li className="list__item">We speak all languages</li>
				<li className="list__item">Perfect for families</li>
			</ul>
			<div className="recommend">
				<p className="recommend__count">Lucy and 3 other friends recommend this hotel.</p>
				<div className="recommend__friends">
					<img src={user3} alt="Friend 1" className="recommend__photo" />
					<img src={user4} alt="Friend 2" className="recommend__photo" />
					<img src={user5} alt="Friend 3" className="recommend__photo" />
					<img src={user6} alt="Friend 4" className="recommend__photo" />
				</div>
			</div>
		</div>
		<div className="user-reviews">
			<figure className="review">
				<blockquote className="review__text">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi,
					totam, itaque officia ex.
				</blockquote>
				<figcaption className="review__user">
					<img src={user1} alt="User 1" className="review__photo" />
					<div className="review__user-box">
						<p className="review__user-name">Nick Smith</p>
						<p className="review__user-date">Feb 23rd, 2021</p>
					</div>
					<div className="review__rating">7.8</div>
				</figcaption>
			</figure>
			<figure className="review">
				<blockquote className="review__text">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
				</blockquote>
				<figcaption className="review__user">
					<img src={user2} alt="User 2" className="review__photo" />
					<div className="review__user-box">
						<p className="review__user-name">Mary Thomas</p>
						<p className="review__user-date">June 18th, 2021</p>
					</div>
					<div className="review__rating">9.3</div>
				</figcaption>
			</figure>
			<button className="btn-inline">
				Show all <span>→</span>
			</button>
		</div>
	</div>
);

export default Detail;
