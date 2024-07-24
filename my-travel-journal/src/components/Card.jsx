import pin from "../images/pin.png";

function formatDate(date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

export default function Card({
  name,
  location,
  coverImg,
  googleMaps,
  arriveDate,
  departDate,
  notes,
}) {
  const imgPath = require(`../images/${coverImg}`);
  return (
    <div className="card">
      <img src={imgPath} alt={name} />
      <div className="card--info">
        <div className="location">
          <img src={pin} alt="pin" />
          <p>{location}</p>
          <a href={googleMaps} target="_blank" rel="noreferrer">
            View on Google Maps
          </a>
        </div>
        <h2>{name}</h2>
        <p className="dates">
          {formatDate(arriveDate)} - {formatDate(departDate)}
        </p>
        <p>{notes}</p>
      </div>
    </div>
  );
}
