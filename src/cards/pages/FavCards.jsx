import { useCallback } from "react";
import useCards from "./../hooks/useCards";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import { useEffect } from "react";
import CardsFeedback from "../components/CardsFeedback";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";
import { useNavigate } from "react-router-dom";

export default function FavCards() {
  const { value, isLoading, error, cards, ...rest } = useCards();
  const { filterCards } = value;
  const { handleDeleteCard, handleGetFavCards, handleGetMyCards } = rest;
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.CARDS);
    } else {
      handleGetFavCards();
    }
  }, [user, navigate, handleGetFavCards]);

  const handleDelete = useCallback(
    async (id) => {
      await handleDeleteCard(id);
      await handleGetMyCards();
    },
    [handleDeleteCard, handleGetMyCards]
  );

  const changeLikeStatus = useCallback(async () => {
    await handleGetFavCards();
  }, [handleGetFavCards]);

  return (
    <Container>
      <PageHeader
        title="Favorite Cards Page"
        subtitle="Here you can find all your favorite business cards"
      />

      <CardsFeedback
        isLoading={isLoading}
        error={error}
        cards={filterCards}
        handleDelete={handleDelete}
        onLike={changeLikeStatus}
      />
    </Container>
  );
}
