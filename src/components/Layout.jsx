import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/system";
import { getUsers } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import TopBar from "./TopBar";
import MobileNavbar from "./MobileNavbar";
import { Hidden } from "@mui/material";

export default function Layout({ children }) {
  const theme = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <TopBar />
      <Box
        sx={{
          maxWidth: theme.breakpoints.values.lg,
          margin: "0 auto",
        }}
      >
        {children}
      </Box>
      <Hidden mdUp>
        <MobileNavbar />
      </Hidden>
    </>
  );
}
