import {
  faLayerGroup,
  faBezierCurve,
  faBookOpen,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconsDesign = [
  { icon: faLayerGroup, text: "Photoshop" },
  { icon: faBezierCurve, text: "Illustrator" },
  { icon: faBookOpen, text: "InDesign" },
  { icon: faPen, text: "Tablette" },
];

export default function DesignList() {
  return (
    <ul className="is-flex is-align-items-center is-justify-content-space-around width-100vw fa-9x has-text-black flex-wrap-mobile width-75vw-mobile fs-6-mobile text-align-center-mobile fs-7-tablet">
      {iconsDesign.map((element) => (
        <li key={element.text} id={element.text}>
          <FontAwesomeIcon icon={element.icon} text={element.text} />
          <p className="is-size-4 is-flex is-justify-content-center has-text-centered">
            {element.text}
          </p>
        </li>
      ))}
    </ul>
  );
}
