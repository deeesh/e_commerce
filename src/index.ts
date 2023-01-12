import { ApolloServer } from "apollo-server";
import typeDefs from './Schema';
import resolvers from "./Resolvers";
import 'dotenv/config'
import mongoose from 'mongoose';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
 
mongoose.connect(`mongodb+srv://deesh1:Secret123@cluster0.6i23j.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
  console.log("mongo connected successfully")
  return server.listen({port:4000})
  
}).then((res)=>{
  console.log(`${res.url}`)
})
    

