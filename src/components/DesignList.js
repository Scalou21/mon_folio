import {
  faLayerGroup,
  faBezierCurve,
  faBookOpen,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconsDesign = [
  { icon: faLayerGroup, alt: "Photoshop" },
  { icon: faBezierCurve, alt: "Illustrator" },
  { icon: faBookOpen, alt: "InDesign" },
  { icon: faPen, alt: "Tablette graphique" },
];

export default function DesignList() {
  return (
    <ul>
      {iconsDesign.map((element) => (
        <li key={element.alt} id={element.alt}>
          <FontAwesomeIcon icon={element.icon} alt={element.alt} />
        </li>
      ))}
    </ul>
  );
}
