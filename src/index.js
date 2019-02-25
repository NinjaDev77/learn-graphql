import {GraphQLServer} from 'graphql-yoga'

// Type Definitions (schema)

const typeDefs = `
    type Query {
        hello : String!
        name : String!
    }
`

// Resolvers
const resolvers = {
    Query: {
        hello() {
            return ' Hello World in Graphql'
        },
        name() {
            return 'Jon Vaughn'
        }
    }
}

// server 

const server = new GraphQLServer({
    typeDefs,
    resolvers
})


// start the server

server.start(()=>{
    console.log('The server is running on port 4000');
})