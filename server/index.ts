import express from "express";
import bodyParser from "body-parser";
import router from "./router/index";
import cors from "cors";
import db from "./db.config";
require("dotenv").config();

const app = express();
const port = 7001;

app.use(
	cors({
		credentials: true,
		origin: ["http://localhost:3000"],
	})
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

db.connect();

app.use("/", router);

app.listen(port, () => {
	console.log(`server is running on ${port}`);
});
