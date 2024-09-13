import { useNavigate } from "react-router-dom";
import bat from "../assets/bat.svg";
import "./About.css";

const About = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/")}>
      <img src={bat} alt="logo" />
      About
    </div>
  );
};

export default About;
