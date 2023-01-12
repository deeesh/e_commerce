import styles from "../styles/Home.module.css";
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { request } from "graphql-request";
// import { GET_ALL_ORDERS, ADD_MUTATION } from "../constants";
// useQuery, UseMutations for dynamic rendering/;l
import Link from "next/link";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import client from "../apollo-client";
// import { GET_PRODUCTS } from '../constants';

const GET_PRODUCTS = gql`
query GetProducts {
  getProducts {
    id
    name
    price
    description
  }
}
`;


function App() {
  const {loading,error,data} = useQuery(GET_PRODUCTS);

  console.log(data)
  // const userInfo = useQuery(ADD_MUTATION, { variables: { id: 1 }});
  // if (getAllUsers.loading || userInfo.loading) return <Spinner color="dark" />;
  // if (getAllUsers.error || userInfo.error) return <React.Fragment>Error :(</React.Fragment>;

  return (
    <div className="container">
      <h1></h1>
    </div>
  )
}


export default App;


// const Home: NextPage = ({
//   result,
// }: InferGetStaticPropsType<typeof getStaticProps>) => {
//   console.log(result)
//   return (
//     <div className={styles.container}>
//       console.log(result)
//       {result.map((item: any) => {
//         return <p key={item.id}>{item.name}</p>;
//       })}
//     <Link href="/addpage">Add a new entry </Link>
//     </div>
//   );
// };

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await request("http://localhost:4000/graphql", getAllOrderQuery);
//   const result = res.getAllOrderQuery;
//   return {
//     props: {
//       result,
//     },
//   };
// };
// export default Home;
