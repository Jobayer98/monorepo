import {
  IPaymentInput,
  IUpdatePaymentInput,
} from "../models/interface/paymentInterface";
import Payment from "../models/paymentModel";
import { IPayment } from "../models/interface/paymentInterface";

// make payment for booking
const createPayment = async (input: IPaymentInput): Promise<any> => {
  try {
    // TODO validate input

    // total booking amount from booking model
    const totalAmount = 2500;

    // update due amonut
    const updatePayment = {
      ...input,
      dueAmount: totalAmount - input.paymentInfo.amount,
    };

    // create payment
    const payment: IPayment = await Payment.create(updatePayment);

    // check payment is created
    if (!payment) {
      throw new Error("Failed to create payment");
    }

    return payment;
  } catch (error) {
    return error;
  }
};

// update payment
const updatePayment = async (
  id: string,
  input: IUpdatePaymentInput
): Promise<any> => {
  try {
    const payment: IPayment | any = await Payment.findById(id);

    // check payment info is available in db
    if (!payment) {
      throw new Error("Failed to update payment");
    }

    // update due amount
    (payment.dueAmount = payment.dueAmount - input.paymentInfo.amount),
      (payment.paymentInfo = [...payment.paymentInfo, input.paymentInfo]),
      // save to db
      await payment.save();

    return payment;
  } catch (error) {
    return error;
  }
};

export { createPayment, updatePayment };
