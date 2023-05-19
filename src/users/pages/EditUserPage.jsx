import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { Navigate } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";
import ROUTES from "../../routes/routesModel";
import UserForm from "../components/UserForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import useUsers from "../hooks/useUsers";
import signupSchema from "../models/joi-schema/signupSchema";
import { useUser } from "../providers/UserProvider";
import mapUserToModel from "../helpers/normalization/mapUserToModel";

export default function EditUserPage() {
  const { handleUpdateUser } = useUsers();

  const { value, ...rest } = useForm(
    initialSignupForm,
    signupSchema,
    handleUpdateUser
  );

  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const modelUser = mapUserToModel(user);
      rest.setData(modelUser);
    }
  }, [user]);

  if (!user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserForm
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onFormChange={rest.validateForm}
        title="Update User"
        errors={value.errors}
        data={value.data}
        onInputChange={rest.handleChange}
        setData={rest.setData}
      />
    </Container>
  );
}
