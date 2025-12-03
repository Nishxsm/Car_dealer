import "../styles/carCard.css";



export default function CarCard({ car }) {
  return (
    <div className="car-card">
      <div className="car-img-container">
        <img src={car.image} className="car-img" />
      </div>

      <h3 className="car-title">{car.title}</h3>

      <div className="car-specs-row">
        <span>{car.km} km</span>
        <span>{car.fuel}</span>
        <span>{car.transmission}</span>
      </div>

      <h4 className="car-price">₹ {car.price.toLocaleString()}</h4>
    </div>
  );
}
