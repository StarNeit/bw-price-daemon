"use strict";
import * as https from 'https'

import { Sample, SampleModel } from "../models/Sample";

export const sampleTask = () => {
  console.log("\n----- Getting Coin Price list -----");

  const requestOptions = {
    host: "secure.bwex.co",
    path: "/api/price/get-price",
  };

  https.get(requestOptions, function (result) {
    let body = "";
    result.on("data", data => {
      body += data;
      console.log(body);
    });
  });

  return true;
};
