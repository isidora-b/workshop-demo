import React from "react";
import "./BookCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import bookImg from "../assets/book-img.svg";

const BookCard = () => {
  return (
    <>
      <div className="book-card-container">
        <Card sx={{ height: "390px", width: "204px", boxShadow: "none" }}>
          <CardActionArea>
            <div>
              <CardMedia
                component="img"
                height="212px"
                width="148px"
                image={bookImg}
                alt="book"
                //   sx={{ backgroundSize: "cover" }}
              />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
};

export default BookCard;
