import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const iconsSocial = [
  { icon: faGithub, alt: "GitHub", href:'https://github.com/Scalou21'  },
  { icon: faLinkedin, alt: "LinkedIn", href:'https://www.linkedin.com/in/j%C3%A9r%C3%B4me-rouchy-b52532128/' },
];

export default function SocialList() {
  return (
    <ul className="fa-9x has-text-black is-flex is-flex-direction-column is-align-items-center flex-column-mobile flex-row-mobile fs-6-mobile fs-6-tablet">
      {iconsSocial.map((element) => (
        <li key={element.alt} id={element.alt}>
          <a href={element.href} className="transition-social"><FontAwesomeIcon icon={element.icon} alt={element.alt} /></a>
        </li>
      ))}
    </ul>
  );
}
