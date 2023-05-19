import { Box, CardActions, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { func, string } from "prop-types";
import { useUser } from "../../../users/providers/UserProvider";
import CardDeleteDialog from "./CardDeleteDialog";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import useCards from "../../hooks/useCards";

export default function CardActionBar({
  handleDelete,

  id,
  user_id,
  cardLikes,
}) {
  const { user } = useUser();

  const [isDialogOpen, setDialog] = useState(false);
  const [isLiked, setLiked] = useState(() => cardLikes?.includes(user?.id));
  const { handleLikeCard } = useCards();
  const navigate = useNavigate();
  const handleDeleteCard = () => {
    handleDelete(id);
    setDialog(false);
  };

  const onLike = async () => {
    setLiked((prev) => !prev);
    await handleLikeCard(id, isLiked);
  };

  useEffect(
    () =>
      cardLikes?.findIndex((userId) => userId === user?.id) !== -1
        ? setLiked(true)
        : setLiked(false),
    []
  );

  return (
    <>
      <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
        <Box>
          {user?.isAdmin || user?.id == user_id ? (
            <>
              <IconButton
                aria-label="Delete Card"
                onClick={() => setDialog(true)}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                aria-label="Edit Card"
                onClick={() => navigate(`${ROUTES.EDIT_CARD}/${id}`)}
              >
                <ModeEditIcon />
              </IconButton>
            </>
          ) : null}
        </Box>

        <Box>
          <IconButton aria-label="Call">
            <CallIcon />
          </IconButton>
          {user && (
            <IconButton aria-label="Add to favorite" onClick={() => onLike(id)}>
              <FavoriteIcon color={isLiked ? "error" : "inherit"} />
            </IconButton>
          )}
        </Box>
      </CardActions>
      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={() => setDialog(false)}
        onDelete={handleDeleteCard}
      />
    </>
  );
}

CardActionBar.propTypes = {
  handleDelete: func.isRequired,

  id: string.isRequired,
};
