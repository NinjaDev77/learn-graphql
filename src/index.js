import {GraphQLServer} from 'graphql-yoga'

// Type Definitions (schema)

// Custom Types

const typeDefs = `
    type Query {
        me: User!,
        greeting(name: String): String!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }
`

// Resolvers
const resolvers = {
    Query: {
        me () {
            return {
                id : 'sadadasdasdasdassd',
                name: 'Ashish',
                email: 'ashish.sahani@tier5.in',
                age: 28
            }
        },
        greeting(parent, args, ctx, info){
            if (args.name){
                return `Hello ${args.name}`
            } else {
                return 'Hello'
            }
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