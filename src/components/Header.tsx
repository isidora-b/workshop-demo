import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";
import { Padding } from "@mui/icons-material";
import Vector from "../assets/Vector.png";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import BookCard from "./BookCard";

export default function ButtonAppBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color="transparent"
          sx={{
            height: "64px",
            padding: "8px 84px 8px 84px",
            boxShadow: "0px 1px 4px 0px #3B3B3B1A",
          }}
        >
          <Toolbar className="toolbar" sx={{ height: "42px" }}>
            <div className="pd-library">
              <div className="img-container">
                <img
                  src={Vector}
                  alt="PD_Logo"
                  width={"28px"}
                  height={"28px"}
                />
              </div>
              <div className="pd-text">
                <div className="pd">ProductDock</div>
                <div className="library">Library</div>
              </div>
            </div>

            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 370,
                height: 40,
                borderRadius: "8px",
                boxShadow: 0,
                backgroundColor: "#F7F7F9",
              }}
            >
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{
                  ml: 1,
                  flex: 1,
                  fontFamily: "Neue Haas Unica W1G, sans-serif",
                  fontWeight: 350,
                  fontSize: "14px",
                  lineHeight: "18px",
                }}
                placeholder="Search for title or author"
                inputProps={{ "aria-label": "search title author" }}
              />
            </Paper>

            <div className="user">
              <div className="letter-user">M</div>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <BookCard />
    </>
  );
}
