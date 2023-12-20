import mongoose from "mongoose";
import { IPayment } from "./interface/paymentInterface";

// create schema
const paymentSchema = new mongoose.Schema<IPayment>(
  {
    propertyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
      required: false,
    },
    guestId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    hostId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    dueAmount: {
      type: Number,
      required: true,
    },
    paymentInfo: [
      {
        amount: {
          type: Number,
          required: true,
        },
        paymentMethod: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    transactionId: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// create model
const Payment = mongoose.model<IPayment>("Payment", paymentSchema);

export default Payment;
