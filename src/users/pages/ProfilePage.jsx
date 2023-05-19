import React from "react";
import { useUser } from "../providers/UserProvider";
import { Box, Grid, Typography } from "@mui/material";

export default function ProfilePage() {
  const { user } = useUser();
  return (
    <Grid container justify="center">
      <Box
        p={3}
        boxShadow={2}
        borderRadius={10}
        bgcolor="white"
        display="inline-block"
        margin="0 auto"
        marginTop={5}
      >
        <Typography variant="h2">Your Profile</Typography>
        <Typography variant="body1">
          <strong>Name:</strong>{" "}
          {`${user?.name.first} ${user?.name.middle} ${user?.name.last}`}
        </Typography>
        <Typography variant="body1">
          <strong>Phone:</strong> {user?.phone}
        </Typography>
        <Typography variant="body1">
          <strong>Email:</strong> {user?.email}
        </Typography>
        <Typography variant="body1">
          <strong>Address:</strong>{" "}
          {`${user?.address.street} ${user?.address.houseNumber}, ${user?.address.city}, ${user?.address.state}, ${user?.address.country}`}
        </Typography>
        <Typography variant="body1">
          <strong>ZIP Code:</strong> {user?.address.zip}
        </Typography>
        <Typography variant="body1">
          <strong>Image URL:</strong> {user?.image.url}
        </Typography>
        <Typography variant="body1">
          <strong>Image Alt:</strong> {user?.image.alt}
        </Typography>
        <Typography variant="body1">
          <strong>Business Account:</strong> {user?.isBusiness ? "Yes" : "No"}
        </Typography>
        <Typography variant="body1">
          <strong>Admin Account:</strong> {user?.isAdmin ? "Yes" : "No"}
        </Typography>
        <Typography variant="body1">
          <strong>User ID:</strong> {user?.user_id}
        </Typography>
      </Box>
    </Grid>
  );
}
