import React, { useState } from "react";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import BookCard from "./book";
import img1 from "../../assets/book-img-1.svg";
import img2 from "../../assets/book-img-2.svg";
import img3 from "../../assets/book-img-3.svg";
import img4 from "../../assets/book-img-4.svg";
import img5 from "../../assets/book-img-5.svg";

export interface Book {
  id: string;
  author: string;
  image_url: string;
  rating: string | null;
  title: string;
  availability: string;
}

const bookList: Book[] = [
  {
    id: "1",
    author: "Nicholas Epley",
    image_url: img1,
    rating: "5",
    title: "Mindwise: Why we misunderstand what others...",
    availability: "Available",
  },
  {
    id: "2",
    author: "Daniel H. Pink",
    image_url: img2,
    rating: null,
    title: "When: The scientific secrets of perfect timing",
    availability: "Available",
  },
  {
    id: "3",
    author: "Nir Eyal",
    image_url: img3,
    rating: "5",
    title: "Hooked: How to build habit-forming products",
    availability: "Available",
  },
  {
    id: "4",
    author: "Daniel Kahneman",
    image_url: img4,
    rating: "4",
    title: "Thinking, fast and slow",
    availability: "Available",
  },
  {
    id: "5",
    author: "Yasmeen Turayhi",
    image_url: img5,
    rating: "3",
    title: "Product marketing debunked: The essential...",
    availability: "Available",
  },
  {
    id: "6",
    author: "Nicholas Epley",
    image_url: img1,
    rating: null,
    title: "Mindwise: Why we misunderstand what others...",
    availability: "Available",
  },
  {
    id: "7",
    author: "Daniel H. Pink",
    image_url: img2,
    rating: "4",
    title: "When: The scientific secrets of perfect timing",
    availability: "Available",
  },
];

function DBCarousel() {
  const [cards] = useState<Book[]>(bookList);
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState<
    "right" | "left" | undefined
  >("left");

  const cardsPerPage = 5;

  const handleNextPage = () => {
    setSlideDirection("left");
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setSlideDirection("right");
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const containerWidth = cardsPerPage * 250;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "400px",
        width: "100%",
        marginTop: "40px",
      }}
    >
      <IconButton
        className="icon-button"
        onClick={handlePrevPage}
        sx={{
          marginBottom: "180px",
          border: "solid",
          color: "#000000",
        }}
        disabled={currentPage === 0}
      >
        <NavigateBeforeIcon />
      </IconButton>

      <Box
        sx={{
          width: `${containerWidth}px`,
          height: "100%",
          //   "&:hover": { backgroundColor: "white", color: "white", opacity: 100 },
        }}
      >
        {cards.map((_, index) => (
          <Box
            key={`card-${index}`}
            sx={{
              width: "100%",
              height: "100%",
              display: currentPage === index ? "block" : "none",
              //   "&:hover": {
              //     backgroundColor: "white",
              //     color: "white",
              //     opacity: 100,
              //   },
            }}
          >
            <Slide direction={slideDirection} in={currentPage === index}>
              <Stack
                spacing={1.5}
                direction="row"
                justifyContent="center"
                sx={{
                  width: "100%",
                  height: "100%",
                  //   "&:hover": { backgroundColor: "white", color: "white", opacity:100 },
                }}
              >
                {cards
                  .slice(
                    index * cardsPerPage,
                    index * cardsPerPage + cardsPerPage
                  )
                  .map((book: Book) => (
                    <Box
                      key={book.id}
                      sx={
                        {
                          // "&:hover": {
                          //   backgroundColor: "red",
                          //   color: "white",
                          //   opacity: 100,
                          // },
                        }
                      }
                    >
                      <BookCard book={book} />
                    </Box>
                  ))}
              </Stack>
            </Slide>
          </Box>
        ))}
      </Box>

      <IconButton
        className="icon-button"
        onClick={handleNextPage}
        sx={{ marginBottom: "180px", border: "solid", color: "#000000" }}
        disabled={
          currentPage >= Math.ceil((cards.length || 0) / cardsPerPage) - 1
        }
      >
        <NavigateNextIcon />
      </IconButton>
    </Box>
  );
}

export default DBCarousel;
