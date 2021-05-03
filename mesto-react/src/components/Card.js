export default function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }
    return(
      <div className="element" id={props.id}>
        <div className="element__image" style = {{ 
            backgroundImage: `url(${props.card.link})` 
            }} 
            onClick={handleClick}>
          <button type="button" className="element__trash"></button>
        </div>
        <div className="element__down">
        <div className="element__title">
          <h2 className="element__name">{props.card.name}</h2>
        </div>
        <div className="element__likes">
          <button type='button' className="element__group"></button>
          <p className="element__group-number">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
            
    )
}