import Product from "./models/product";
import Order from "./models/order"
import Customer from "./models/customer";
import OrderInfo from "./models/orderInfo";
import User from "./models/users";


//const { OrderSchema, Product, Order } = require('./models/orders')

// const resolvers = {
//   Query: {
//     getAllOrder: () => order, 
//     getOrder: (_: any, args: any) => { 
//       console.log(args);
//       return order.find((order) => order.id === args.id);
//     },
//   },
//   Mutation: {
//     addOrderToCart: (_: any, args: any) => {
//       const newOrder = {
//         id: order.length + 1,
//         name: args.name, 
//       };
//       order.push(newOrder);
//       return newOrder;
//     },
//   },
// };

const resolvers = {
  Query: {
    getProducts: async () => {
      const products = await Product.find()
      return products
    },
    getProduct: async (_:any,args:any) => {
      const product = await Product.findById(args.id)
      return product
    },
    order: async (_:any,args:any) => {
      const ordr = await Order.findById(args.id)
      return ordr
    },
    allOrders: async (_:any,args:any) => {
      const allorders = await Order.find()
      return allorders
    },
    orderInfo: async (_:any,args:any) => {
      const orderinfo = await OrderInfo.findById(args.id)
      return orderinfo
    },
    allOrderInfoes: async (_:any,args:any) => {
      const allorderinfoes = await OrderInfo.find()
      return allorderinfoes
    },
    customer: async (_:any,args:any) => {
      const getcustomer = await Customer.findById(args.id)
      return getcustomer
    },
    allCustomers: async (_:any,args:any) => {
      const getallcustomer = await Customer.find()
      return getallcustomer
    },
    user: async (_:any,args:any) => {
      const getuser = await User.findById(args.id)
      return getuser
    },
    allUsers: async (_:any,args:any) => {
      const getallusers = await User.find()
      return getallusers
    },
  },
  Mutation: {
    addProduct: async (_:any, args: any) => {
      const product = new Product({name: args.name, price:args.price})
      await product.save()
      return product
    },
    createProduct: async (_:any, args: any) => {
      const product = new Product({name: args.name, price:args.price, productInput:args.productInput})
      await product.save()
      return product
    },
    updateProduct: async (_:any, args: any) => {
      const product = await Product.findByIdAndUpdate({_id: args.id},{price: args.price})
      await product?.save()
      return product
    },
    removeProduct: async (_:any, args: any) => {
      const product = await Product.findByIdAndRemove({_id: args.id});
      await product?.save()
      return product
    },
    createOrder: async (_:any, args: any) => {
      const order = new Order({total: args.total});
      await order?.save()
      return order
    },
    updateOrder: async (_:any, args: any) => {
      const order = await Order.findByIdAndUpdate({_id: args.id},{total: args.total});
      await order?.save()
      return order
    },
    removeOrder: async (_:any, args: any) => {
      const order = await Order.findByIdAndRemove({_id: args.id});
      await order?.save()
      return order
    },
    createOrderInfo: async (_:any, args: any) => {
      const orderinfo = new OrderInfo({product: args.product, quantity: args.quantity});
      await orderinfo?.save()
      return orderinfo
    },
    updateOrderInfo: async (_:any, args: any) => {
      const orderinfo = await OrderInfo.findByIdAndUpdate({_id: args.id},{product: args.product}, {quantity: args.quantity});
      await orderinfo?.save()
      return orderinfo
    },
    removeOrderInfo: async (_:any, args: any) => {
      const order = await OrderInfo.findByIdAndRemove({_id: args.id});
      await order?.save()
      return order
    },
    createCustomer: async (_:any, args: any) => {
      const customerinfo = new Customer({name: args.name, email: args.email, mobile: args.mobile});
      await customerinfo?.save()
      return customerinfo
    },
    updateCustomer: async (_:any, args: any) => {
      const customerinfo = await Customer.findByIdAndUpdate({_id: args.id},{email: args.email}, {mobile: args.mobile});
      await customerinfo?.save()
      return customerinfo
    },
    removeCustomer: async (_:any, args: any) => {
      const customerinfo = await Customer.findByIdAndRemove({_id: args.id});
      await customerinfo?.save()
      return customerinfo
    },
  }

}

export default resolvers;