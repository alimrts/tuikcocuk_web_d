import './card.css'
import './flip-transition.css'

function Card({ onClick, nameFront, nameBack, icon }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back"> {nameBack}</div>
      <div className="card-front">
         {/* {nameFront} */}
        <img
          src={icon}
          alt={nameFront}
          style={{ width: '240px', height: '320px' }}
        />
      </div>
    </div>
  )
}

export default Card
