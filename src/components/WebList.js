import {
  faReact,
  faSass,
  faJs,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconsWeb = [
  { icon: faReact, text: "React" },
  { icon: faSass, text: "Sass" },
  { icon: faJs, text: "JavaScript" },
  { icon: faPhp, text: "PHP" },
];

export default function WebList() {
  return (
    <ul className="is-flex is-align-items-center is-justify-content-space-around width-100vw fa-9x has-text-black flex-wrap-mobile width-75vw-mobile fs-6-mobile text-align-center-mobile fs-7-tablet">
      {iconsWeb.map((element) => (
        <li key={element.text} id={element.text}>
          <FontAwesomeIcon icon={element.icon} alt={element.text} />
          <p className="is-size-4 is-flex is-justify-content-center has-text-centered">
            {element.text}
          </p>
        </li>
      ))}
    </ul>
  );
}
