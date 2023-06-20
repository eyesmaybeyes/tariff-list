import "./Card.css";

function Card(props) {
    const { item } = props;
    return (
        <div
            className={`card ${item.accent ? "card_accented" : ""}`}
            accent={item.accent}
            theme={item.theme}
        >
            <div className="card__title">{item.name}</div>
            <div className="card__price">
                <span className="price-span">{item.price}</span> руб. /мес
            </div>
            <div className="card__speed">{item.speed}</div>
            <div className="card__desc">{item.desc}</div>
        </div>
    );
}

export { Card };
