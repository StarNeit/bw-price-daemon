import * as mongoose from "mongoose";

export type SampleModel = mongoose.Document & {
  sampleField: string,
};

const sampleSchema = new mongoose.Schema({
  sampleField: String,
}, { timestamps: true });

export const Sample = mongoose.model("Sample", sampleSchema);
