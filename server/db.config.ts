import mongoose, { Mongoose } from "mongoose";

const MONGODB = "mongodb://localhost:27017/db";
const DB_URL = MONGODB;
/*
remove deprecation warnings
*/
mongoose.set("useFindAndModify", false);

/*
set up promise
*/
mongoose.Promise = global.Promise;

const connect = (): Mongoose => {
	console.log(`DB_URL: ${DB_URL}`);
	// connect to db
	mongoose.connect(DB_URL, {
		useCreateIndex: true,
		useNewUrlParser: true,
		promiseLibrary: global.Promise,
		useUnifiedTopology: true,
	});

	// connection successful
	mongoose.connection.once("open", () => {
		console.log("db connection successful!");
	});

	// connection failed
	mongoose.connection.on("error", (err: any) => {
		console.log("db connection failed: ", err);
	});

	// return mongoose instance
	return mongoose;
};

export const disconnect = (): void => {
	mongoose.disconnect();
};

export default {
	instance: mongoose,
	connect: connect,
	disconnect: disconnect,
};
