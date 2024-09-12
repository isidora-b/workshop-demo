import { useState } from "react";
import { Favorites } from "../components/Favorites";

const Homepage = () => {
  const [like, setLike] = useState(false);

  const handleFavor = () => {
    setLike(!like);
  };

  return (
    <div>
      <Favorites favoriteStatus={like} favoriteAction={handleFavor} />
      <div>Homepage</div>
    </div>
  );
};

export default Homepage;
