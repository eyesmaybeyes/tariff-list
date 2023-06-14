import "./card.css";
import data from "../tariffs.json";

function Card() {
    return (
        <div className="card-container">
            {data.map((item) => (
                <div
                    className={`card ${item.accent ? "card_accented" : ""}`}
                    accent={item.accent}
                    theme={item.theme}
                >
                    <div className="card__title">{item.name}</div>
                    <div className="card__price">
                        <span className="price-span">{item.price}</span> руб.
                        /мес
                    </div>
                    <div className="card__speed">{item.speed}</div>
                    <div className="card__desc">{item.desc}</div>
                </div>
            ))}
        </div>
    );
}

export { Card };
