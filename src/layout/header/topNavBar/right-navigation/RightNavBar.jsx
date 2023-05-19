import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../../../../providers/ThemeProvider";
import { useUser } from "../../../../users/providers/UserProvider";
import Logged from "./Logged";
import MoreButton from "./MoreButton";
import NotLogged from "./NotLogged";
import SearchAppBar from "./SearchAppBar";

export default function RightNavBar() {
  const { isDark, toggleDarkMode } = useTheme();
  const { user } = useUser();
  return (
    <>
      <SearchAppBar />
      <Box
        sx={{
          display: { xs: "none", md: "inline-flex" },
          alignItems: "center",
        }}
      >
        {user ? (
          <Typography variant="body1">
            <strong>Hello:</strong>{" "}
            {`${user?.name.first} ${user?.name.middle} ${user?.name.last}`}
          </Typography>
        ) : null}
        <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        {user && <Logged />}
        {!user && <NotLogged />}
      </Box>

      <MoreButton />
    </>
  );
}
