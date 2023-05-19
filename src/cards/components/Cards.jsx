import { Button, Grid } from "@mui/material";
import { arrayOf } from "prop-types";
import React from "react";
import cardType from "../models/types/cardType";
import CardBussinesComponent from "./card/CardBussinesComponent";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";

export default function Cards({ cards, handleDelete }) {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <>
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <CardBussinesComponent
              card={card}
              key={card._id}
              handleDelete={handleDelete}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="right">
        {user?.isBusiness ? (
          <Button
            onClick={() => navigate(ROUTES.CREATE_CARD)}
            variant="contained"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              borderRadius: "20px",
            }}
          >
            צור כרטיס חדש
          </Button>
        ) : null}
      </Grid>
    </>
  );
}

Cards.propTypes = {
  cards: arrayOf(cardType),
};
