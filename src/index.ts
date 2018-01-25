"use strict";

/**
 * Module dependencies.
 */
import * as dotenv from "dotenv";
import * as mongoose from "mongoose";
import * as schedule from "node-schedule";

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: ".env" });

/**
 * Services
 */
import * as sampleService from "./services/sample";

/**
 * Connect to MongoDB.
 */
mongoose.connect(process.env.MONGODB_URL || process.env.MONGOLAB_URI, { useMongoClient: true });
mongoose.connection.on("error", () => {
  console.log("MongoDB connection error. Please make sure MongoDB is running.");
  process.exit();
});

const sampleDaemon = schedule.scheduleJob("*/" + process.env.SCHEDULE_INTERVAL + " * * * * *", sampleService.sampleTask);

console.log("---------- Started Sample Daemon ----------");
