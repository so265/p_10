/* eslint-disable no-return-assign */
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import { getMonth } from "../../helpers/Date";   //cette importation indique que le fichier Date dans le répertoire helpers contient la logique pour traiter les dates, y compris la fonction getMonth.

import "./style.scss";

const Menu = () => (
  <nav>
    <Logo />
    <ul>
      <li>
        <a href="#nos-services">Nos services</a>
      </li>
      <li>
        <a href="#nos-realisations">Nos réalisations</a>
      </li>
      <li>
        <a href="#notre-equipe">Notre équipe</a>
      </li>
    </ul>
    <Button title="contact" onClick={() => (window.document.location.hash = "#contact")}>
      Contact
    </Button>
  </nav>
);

export default Menu;
