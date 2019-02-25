import {GraphQLServer} from 'graphql-yoga'

// Type Definitions (schema)

// Scalar Types ID, String, Boolean, Int, Float

const typeDefs = `
    type Query {
        id  : ID!
        name : String!
        age : Int!
        employed: Boolean!
        gpa: Float
    }
`

// Resolvers
const resolvers = {
    Query: {
        id() {
            return '01'
        },
        name() {
            return 'Jon Vaughn'
        },
        age(){
            return 35
        },
        employed(){
            return true
        },
        gpa(){
            return null
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