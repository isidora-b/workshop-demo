import React, { useState } from "react";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import BookCard from "./book";
import bookList from "./bookList";

export interface Book {
  id: string;
  author: string;
  image_url: string;
  rating: string | null;
  title: string;
  availability: string;
}

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
        }}
      >
        {cards.map((_, index) => (
          <Box
            key={`card-${index}`}
            sx={{
              width: "100%",
              height: "100%",
              display: currentPage === index ? "block" : "none",
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
                }}
              >
                {cards
                  .slice(
                    index * cardsPerPage,
                    index * cardsPerPage + cardsPerPage
                  )
                  .map((book: Book) => (
                    <Box key={book.id}>
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
