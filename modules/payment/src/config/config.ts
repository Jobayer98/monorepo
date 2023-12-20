// import all variables from .env
const port = process.env.PORT || 3000;
const mongo_uri =
  process.env.MONGO_URI || "mongodb://localhost:27017/booking-engine";

export { port, mongo_uri };
