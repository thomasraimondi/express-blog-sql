//* Imports
const routerPost = require("./routers/posts");
const requestTime = require("./middlewares/Global/requestTime");
const errorHendling = require("./middlewares/ErrorHandling/errorHendling");
const notFound = require("./middlewares/ErrorHandling/notFoundError");
const dotenv = require("dotenv");

// * App Config
const express = require("express");
const app = express();
const config = dotenv.config();

// * static Asset
app.use(express.static("public"));
app.use(express.json());

app.use(requestTime);

app.use("/posts", routerPost);

app.use(notFound);
app.use(errorHendling);

app.listen(config.parsed.APP_PORT, () => {
  console.log(
    `Serve in ascolto: ${config.parsed.APP_URL}:${config.parsed.APP_PORT}`
  );
});
