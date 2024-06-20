import React from "react";
// import { useGlobalContext } from "../../context/GalleryContext/GalleryContext";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

function SearchForm() {
  //   const { setSearchTerm } = useGlobalContext();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
    console.log(searchValue);
  };
  return (
    <>
      <Stack
        sx={{
          position: { sx: "absolute" },
          width: "100%",
          height: "auto",
          display: "flex",
          alignItems: "center",
          top: { xs: "0" },
          zIndex: "999",
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "4px 4px",
            display: "flex",
            alignItems: "center",
            width: { xs: "100%" },
          }}
          onSubmit={handleSearchSubmit}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            name="search"
            placeholder="HITEC City"
            inputProps={{ "aria-label": "HITEC City" }}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Stack>
    </>
  );
}

export default SearchForm;
