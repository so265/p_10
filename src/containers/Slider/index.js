import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  
  // Triez les événements par date en ordre décroissant
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtB.date) - new Date(evtA.date)
  );

  const nextCard = () => {
    setTimeout(() => setIndex(index < byDateDesc.length - 1 ? index + 1 : 0), 5000);
  };

  useEffect(() => {
    nextCard();
  }, [index]); // Ajoutez [index] comme dépendance pour que cela se déclenche lorsqu'index change.

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <div
          key={event.title}
          className={`SlideCard SlideCard--${index === idx ? "display" : "hide"}`}
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

      {/* Vous pouvez ajouter la pagination ici si nécessaire */}
    </div>
  );
};

export default Slider;
