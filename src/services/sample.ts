"use strict";
import * as https from 'https'

import { Sample, SampleModel } from "../models/Sample";

export const sampleTask = () => {
  const requestOptions = {
    host: "secure.bwex.co",
    path: "/api/price/get-price",
  };

  https.get(requestOptions, function (result) {
    let body = "";
    result.on("data", data => {
      body += data;
      console.log("[Daemon: Getting Coin Price]", body);
    });
  });

  return true;
};
