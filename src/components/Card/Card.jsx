import './card.css'

function Card({title, onClick}) {
    return (
        <div className="card" onClick={onClick}>
            <div className="card-icon">
                <h4 style={{textAlign: "center"}}>{title}</h4>
            </div>
        </div>
    );
}

export default Card;