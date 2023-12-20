export const typedefs = `#graphql
    type Query {
        greet: String!
    }

    type Mutation {
        createPayment(input: CreatePaymentInput!): PaymentPayload!
        updatePayment(id: ID!, input: UpdatePaymentInput!): PaymentPayload!
    }

# response payload
    type PaymentPayload {
        id: ID!,
        propertyId: ID!,
        guestId: ID!,
        hostId: ID!,
        dueAmount: Float!,
        paymentInfo: [PaymentInfo!]!,
        transactionId: String,  
    }

    scalar Date
    
    type PaymentInfo {
        amount: Float!,
        paymentMethod: String!,
        date: Date!
    }

# get input from client
    input CreatePaymentInput {
        propertyId: ID!,
        guestId: ID!,
        hostId: ID!,
        paymentInfo: PaymentInfoInput!,
    }

    input UpdatePaymentInput {
        paymentInfo: PaymentInfoInput!,
    }

    input PaymentInfoInput {
        amount: Float!,
        paymentMethod: String!,
    }

`;
