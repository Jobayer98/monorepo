import { resolvers } from "./resolvers";
import { typedefs as typeDefs } from "./typedefs";

// merge typedefs and resolvers into one
export const Payment = { typeDefs, resolvers };
