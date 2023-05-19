import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import Map from "./Map";

export default function CardDetailsPage() {
  const { id } = useParams();
  const { value, handleGetCard } = useCards();
  const { card } = value;

  useEffect(() => {
    handleGetCard(id);
  }, [handleGetCard, id]);

  return (
    <Grid container justify="center">
      <Container maxWidth="md">
        <PageHeader
          title="Card Details"
          subtitle="Here you can find all the details about a specific card"
        />

        <Box
          p={3}
          boxShadow={2}
          borderRadius={10}
          bgcolor="white"
          marginTop={5}
        >
          <Typography variant="h6" gutterBottom>
            Business Name: {card?.title} {card?.subtitle}
          </Typography>
          <Typography variant="body1">Website: {card?.web}</Typography>
          <Typography variant="body1">Business Email: {card?.email}</Typography>
          <Typography variant="body1">
            Business Phone Number: {card?.phone}
          </Typography>
          <Typography variant="body1">
            Business Number: {card?.bizNumber}
          </Typography>
          <Typography variant="body1">
            Business Description: {card?.description}
          </Typography>

          <Box
            sx={{
              width: "100%",
              height: "50vh",
              marginTop: 5,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <Map
              address={`${card?.address.city} ${card?.address.street} ${card?.address.houseNumber}`}
              zoom={13}
              center={[51, -0.09]}
            />
          </Box>
        </Box>
      </Container>
    </Grid>
  );
}
