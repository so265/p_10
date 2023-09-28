// Mois qui s'affichent sur les images
export const MONTHS = {
  1: "janvier",
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};

export const getMonth = (date) => MONTHS[date.getMonth() +1]; // J'ajoute +1 à 'index du mois pour afficher les mois correctement, en JavaScript, les mois sont indexés à partir de 0
