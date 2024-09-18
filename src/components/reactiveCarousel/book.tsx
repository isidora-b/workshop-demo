import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Book } from "./ReactiveCarousel";
import { CardActionArea } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import "./book.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

type BookProps = {
  book: Book;
};

export default function BookCard({ book }: BookProps) {
  return (
    <Card
      sx={{
        height: "390px",
        width: "204px",
        boxShadow: "none",
      }}
    >
      <CardActionArea>
        <div className="img-container-div">
          <div className="shadow-img"></div>
          <CardMedia
            component="img"
            height="212px"
            width="148px"
            image={book.image_url}
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
        <CardContent sx={{ padding: "12px 0px 0px 0px", height: "138px" }}>
          <div className="rating">
            {book.rating == null ? (
              <>
                <div className="star">
                  <StarBorderRoundedIcon sx={{ color: "#979797" }} />
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
                  (no ratings){" "}
                </Typography>
              </>
            ) : (
              <>
                <div className="star">
                  <StarRateRoundedIcon sx={{ color: "#F3E110" }} />
                </div>
                <Typography
                  component="div"
                  fontSize="16px"
                  lineHeight="24px"
                  fontWeight={500}
                  color="black"
                  fontFamily="Neue Haas Unica W1G"
                >
                  {book.rating}
                </Typography>
                <Typography
                  component="div"
                  fontSize="12px"
                  lineHeight="18px"
                  fontWeight={350}
                  color="#686868"
                  fontFamily="Neue Haas Unica W1G"
                  marginTop="5px"
                >
                  /5 (2 ratings)
                </Typography>
              </>
            )}
          </div>
          <Typography
            component="div"
            fontSize="14px"
            lineHeight="18px"
            fontWeight={400}
            fontFamily="Neue Haas Unica W1G"
            marginBottom="8px"
          >
            {book.title}
          </Typography>
          <Typography
            component="div"
            fontSize="12px"
            lineHeight="18px"
            fontWeight={350}
            fontFamily="Neue Haas Unica W1G"
          >
            {book.author}
          </Typography>
          <div className="book-status">
            <div>
              <FiberManualRecordIcon
                sx={{
                  height: "8px",
                  width: "8px",
                  color: "#65B32E",
                  padding: "4px",
                }}
              />
            </div>
            <Typography
              component="div"
              fontSize="14px"
              lineHeight="18px"
              fontWeight={350}
              fontFamily="Neue Haas Unica W1G"
              color="#65B32E"
            >
              Available
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
