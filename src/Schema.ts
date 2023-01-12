import {gql} from 'apollo-server-express'
const typeDefs = gql`
  type Product {
    id: ID
    name: String
    price: Int
    description: String
    inOrderInfoes: [OrderInfo]
    tags: [String]
    category: String
  }
  input ProductInput {
    name: String
    description: String
    price: Int
    tags: [String]
    category: String
    customer: String
    product: String
  } 
  type Customer {
    id: ID
    name: String
    email: String
    mobile: String
    createdAt: String
    updatedAt: String
  }
  input CustomerInput {
    name: String
    user: String
    email: String
    mobile: String
    orders: [String]
  }
  type Order {
    id: ID
    customer: Customer
    total: Int
    orderedItems: [OrderInfo]
    createdAt: String
    updatedAt: String
  }
  input OrderInput {
    customer: String
    total: Int
    orderedItems: [String]
  }
  
  type OrderInfo {
    id: ID
    orderedBy: Customer
    quantity: Int
    createdAt: String
    updatedAt: String
  }
  input OrderInfoInput {
    orderedBy: String
    product: String
    quantity: Int
  }
  type User {
    id: ID
    name: String
    email: String
    customer: Customer
    createdAt: String
    updatedAt: String
  }
  type Query{
    getProducts: [Product]
    getProduct(id: ID): Product
    order(id: ID): Order
    customer(id: ID): Customer
    orderInfo(id: ID): OrderInfo
    user(id: ID): User
    allUsers: [User]
    allOrders: [Order]
    allCustomers: [Customer]
    allOrderInfoes: [OrderInfo]
  }
  type Mutation{
    addProduct(name: String, price: Int): Product
    createProduct(name: String, price: Int, productInput: ProductInput): Product
    updateProduct(id: ID, productInput: ProductInput): Product
    removeProduct(id: ID): Product
    createOrder(total: Int): Order
    updateOrder(id: ID, OrderInput: OrderInput): Order
    removeOrder(id: ID): Order
    createOrderInfo(orderInfoInput: OrderInfoInput): OrderInfo
    updateOrderInfo(id: ID, orderedBy: String, quantity: Int, product: String, order: String): OrderInfo
    removeOrderInfo(id: ID, customerId: ID): OrderInfo
    createCustomer(name: String, email: String, mobile: String): Customer
    updateCustomer(id: ID, customerInput: CustomerInput): Customer
    removeCustomer(id: ID): Customer
    addToCart(orderedBy: String, product: String, quantity: Int): OrderInfo
  }
`;

export default typeDefs; 
