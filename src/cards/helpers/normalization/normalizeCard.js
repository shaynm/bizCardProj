const normalizeCard = (card) => {
  return {
    title: card.title,
    subtitle: card.subtitle,
    description: card.description,
    phone: card.phone,
    email: card.email,
    web: card.webUrl,
    bizNumber: +card.bizNumber,
    likes: [],

    image: {
      url: card.imageUrl,
      alt: card.imageAlt,

    },
    address: {
      state: card.state,
      country: card.country,
      city: card.city,
      street: card.street,
      houseNumber: +card.houseNumber,
      zip: +card.zip,

    },
    user_id: card.user_id
  };
};

export default normalizeCard;
