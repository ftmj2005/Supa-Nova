require("dotenv").config();
const cors = require("cors");
const app = require("./src/app");
const connectDB = require("./src/db/db");

// const { connect } = require("./src/broker/borker");

connectDB();
// connect();
app.use(
  cors({
    origin: "http://localhost:5173/auth", // replace with your React/Vite URL
    credentials: true, // allows cookies to be sent
  })
);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
