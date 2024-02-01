const Card = ({gradient, name, title, discountspeech, price, evento}) => {

    const cardStyle = {
        background: gradient,
        width: '15rem',
        height: '22rem',
        padding: '1rem',
        borderRadius: '15px',
        color: '#fafafa',

      };

    return(
        <div onClick={() => evento()} className="cards" style={cardStyle}>
            <div className="cards__name">{name}</div>
            <div className="cards__title">{title}</div>
            <div className="cards__discount">{discountspeech}</div>
            <div className="cards__price">{price}</div>
        </div>
    )
}

export default Card;