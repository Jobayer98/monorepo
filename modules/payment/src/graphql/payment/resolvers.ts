import { createPayment, updatePayment } from "../../service/paymentService";
import {
  IPaymentInput,
  IUpdatePaymentInput,
} from "../../models/interface/paymentInterface";

export const resolvers: any = {
  Query: {
    greet: () => "Hello",
  },

  Mutation: {
    createPayment: (_: any, { input }: { input: IPaymentInput }) =>
      createPayment(input),

    updatePayment: async (
      _: any,
      { id, input }: { id: string; input: IUpdatePaymentInput }
    ) => updatePayment(id, input),
  },
};
