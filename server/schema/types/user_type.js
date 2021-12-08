const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = require("graphql");

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: {
    email: { type: GraphQLString },
  },
});

module.exports = UserType;