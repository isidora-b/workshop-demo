import { useEffect, useState } from "react";
import { Favorites } from "../components/Favorites";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/logo.svg";
import "./About.css";

const Homepage = () => {
  const [like, setLike] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!like) {
      toast("Why no like?");
    } else {
      toast("Thanks!");
    }
  }, [like]);

  const handleFavor = () => {
    setLike(!like);
  };

  return (
    <>
      {/* <Header /> */}
      <div>
        <Favorites favoriteStatus={like} favoriteAction={handleFavor} />
        <div>Homepage</div>
      </div>
      {like ? (
        <div onClick={() => navigate("/about")}>
          {/* Click on logo for 'About' page */}
          <img src={logo} alt="Logo" width="50px" />
        </div>
      ) : null}
    </>
  );
};

export default Homepage;
