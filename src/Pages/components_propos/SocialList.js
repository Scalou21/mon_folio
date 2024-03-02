import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconsSocial = [
  { icon: faGithub, alt: "GitHub" },
  { icon: faLinkedin, alt: "LinkedIn" },
];

export default function SocialList() {
  return (
    <ul>
      {iconsSocial.map((element) => (
        <li key={element.alt} id={element.alt}>
          <FontAwesomeIcon icon={element.icon} alt={element.alt} />
        </li>
      ))}
    </ul>
  );
}
