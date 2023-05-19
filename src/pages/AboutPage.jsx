import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  return (
    <Container>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={8}
          alignSelf="center"
          sx={{
            textAlign: "center",
            marginBottom: "2rem",
            fontSize: "1.2rem",
            lineHeight: 1.5,
            letterSpacing: "0.01em",
            color: "#333",
            maxWidth: "70ch",
            mx: "auto",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Welcome to our Business Card app!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our app provides a simple and convenient way to create, manage, and
            share your professional business cards with anyone, anywhere. Our
            mission is to help you make a great first impression and grow your
            network by providing a platform that enables you to easily create
            and share digital business cards with your colleagues, clients, and
            partners.
          </Typography>
          <Typography variant="body1" gutterBottom>
            With our app, you can create and customize your digital business
            card with your own logo, contact information, and social media
            links. You can choose from a variety of professional designs and
            templates or create your own unique layout that best represents your
            brand.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our app also provides a range of features that enable you to manage
            and organize your contacts, export your data, and track your card's
            performance with real-time analytics.
          </Typography>
          <Typography variant="body1" gutterBottom>
            We believe that every professional should have a simple and
            effective tool to manage their business contacts and grow their
            network. That's why we created this app to help you stand out and
            make meaningful connections that can lead to new opportunities and
            partnerships.
          </Typography>
          <Typography variant="body1" gutterBottom>
            We are dedicated to providing the best user experience and customer
            support to help you get the most out of our app. If you have any
            questions or feedback, please don't hesitate to contact us. Thank
            you for choosing our Business Card app. We look forward to helping
            you succeed in your professional endeavors!
          </Typography>
        </Grid>
        <Grid
          item
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <img src="/assets/images/card.jpg" alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
}
