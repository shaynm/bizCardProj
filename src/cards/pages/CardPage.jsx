import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";

import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";

export default function CardPage() {
  const { value, handleGetCards, handleDeleteCard } = useCards();
  const { error, isLoading, filterCards } = value;

  useEffect(() => {
    handleGetCards();
  }, []);

  const handleDelete = async (id) => {
    await handleDeleteCard(id);
    handleGetCards();
  };
  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all bussines cards from all categories"
        />
        <CardsFeedback
          isLoading={isLoading}
          error={error}
          cards={filterCards}
          handleDelete={handleDelete}
        />
      </Container>
    </div>
  );
}
