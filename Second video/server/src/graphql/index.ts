import { ApolloServer } from '@apollo/server';

async function createApolloGraphqlServer() {
    const gqlServer = new ApolloServer({
            typeDefs: `
                type Query {
                    
                }
                type Mutation {
                    
                }
            `,
            resolvers: {
                Query: {},
                Mutation: {},
            },
        });
    
        // Start the gql server
        await gqlServer.start();

        return gqlServer;
    
}

export default createApolloGraphqlServer;