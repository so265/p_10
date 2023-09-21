
import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtB.date) - new Date(evtA.date) // Tri des élémnets pour trier par date decroissante
  );
  useEffect(() => { // j'utilise useEffect à la place de setTimout pour déclencher le changement d'index avec un delai de 5 secondes
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex < byDateDesc.length - 1 ? prevIndex + 1 : 0));
    }, 5000);

    return () => {
      clearTimeout(timer); // gestion de nettoyage avec clearTimeout pour éviter des fuites de mémoire potentielles.
    };
  }, [byDateDesc, index]);

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
          <div
            key={event.title}
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          ))}
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc?.map((event, radioIdx) => (  // Indicateur de pagination
                <input
                  key={`${event.title}`}
                  type="radio"
                  name="radio-button"
                  checked={index === radioIdx}
                  onChange={() => setIndex(radioIdx)}
                />
              ))}
            </div>
          </div>
    </div>
  );
};

export default Slider;