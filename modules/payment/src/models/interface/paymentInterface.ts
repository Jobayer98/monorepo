import mongoose, { Document } from "mongoose";

// define IPayment interface for schema
export interface IPayment extends Document {
  propertyId: mongoose.Schema.Types.ObjectId;
  guestId: mongoose.Schema.Types.ObjectId;
  hostId: mongoose.Schema.Types.ObjectId;
  dueAmount: number;
  paymentInfo: Array<{
    amount: number;
    paymentMethod: string;
    date: Date;
  }>;
  transactionId: string;
}

// define IPaymentInput interface for input
export interface IPaymentInput {
  propertyId: string;
  guestId: string;
  hostId: string;
  paymentInfo: {
    amount: number;
    paymentMethod: string;
  };
  transactionId?: string;
}

// define IUpdatePaymentInput interface for update input
export interface IUpdatePaymentInput {
  id: string;
  paymentInfo: {
    amount: number;
    paymentMethod: string;
  };
}
