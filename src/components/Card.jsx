import "../styles/Card.css";

function Card({ name, jobTitle, picture }) {
  return (
    <div className="card">
      <span>{jobTitle}</span>
      <img src={picture} alt={`Portrait de ${name}`} height={80} width={80} />
      <span>{name}</span>
    </div>
  );
}

export default Card;
