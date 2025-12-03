import "../styles/carCard.css";

export default function CarCard({ car }) {
  return (
    <div className="car-card">
      <div className="car-img-container">
        <img src={car.image} alt={car.title} className="car-img" />
      </div>

      <div className="car-info">
        <h3 className="car-title">{car.title}</h3>

        <div className="car-divider"></div>

        <div className="car-specs-row">
          <span>🛣 {car.kms}</span>
          <span>⛽ {car.fuel}</span>
          <span>⚙ {car.transmission}</span>
        </div>

        <div className="car-divider"></div>

        <div className="car-price">₹ {car.price.toLocaleString()}</div>
      </div>
    </div>
  );
}
