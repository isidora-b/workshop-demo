import React from "react";
import "./BookCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import bookImg from "../assets/book-img.svg";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const BookCard = () => {
  return (
    <>
      <div className="book-card-container">
        <Card sx={{ height: "390px", width: "204px", boxShadow: "none" }}>
          <CardActionArea>
            <div className="img-container-div">
              <div className="shadow-img"></div>
              <CardMedia
                component="img"
                height="212px"
                width="148px"
                image={bookImg}
                alt="book"
                sx={{
                  padding: "14px 28px 164px 28px",
                  position: "relative",
                  zIndex: 1,
                  //   objectFit: "none",
                  width: "148px",
                  borderRadius: "8px",
                }}
              />
            </div>
            <CardContent sx={{ padding: "12px 0px 0px 0px" }}>
              <div className="rating">
                <div className="star">
                  <StarBorderIcon sx={{ color: "#979797" }} />
                </div>
                <Typography
                  component="div"
                  fontSize="12px"
                  lineHeight="18px"
                  fontWeight={350}
                  color="#686868"
                  fontFamily="Neue Haas Unica W1G"
                  marginTop="5px"
                >
                  (no ratings)
                </Typography>
              </div>
              <Typography
                component="div"
                fontSize="14px"
                lineHeight="18px"
                fontWeight={400}
                fontFamily="Neue Haas Unica W1G"
                marginBottom="8px"
              >
                Mindwise: Why we misunderstand what others...
              </Typography>
              <Typography
                component="div"
                fontSize="12px"
                lineHeight="18px"
                fontWeight={350}
                fontFamily="Neue Haas Unica W1G"
              >
                Nicholas Epley{" "}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
};

export default BookCard;
