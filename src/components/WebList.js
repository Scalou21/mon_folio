import {
  faHtml5,
  faCss3,
  faJs,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconsWeb = [
  { icon: faHtml5, alt: "HTML" },
  { icon: faCss3, alt: "CSS" },
  { icon: faJs, alt: "JavaScript" },
  { icon: faPhp, alt: "PHP" },
];

export default function WebList() {
  return (
    <ul>
      {iconsWeb.map((element) => (
        <li key={element.alt} id={element.alt}>
          <FontAwesomeIcon icon={element.icon} alt={element.alt} />
        </li>
      ))}
    </ul>
  );
}
