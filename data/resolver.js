import { Widgets } from "./dbConnector";
// class Product {
//   constructor(id, { name, description, product, soldout, price, stores }) {
//     (this.id = id),
//       (this.name = name),
//       (this.description = description),
//       (this.product = product),
//       (this.soldout = soldout),
//       (this.price = price),
//       (this.stores = stores);
//   }
// }
// const productDatabase = {};
const resolver = {
  getProduct: async ({ id }) => {
    try {
      const foundProduct = await Widgets.findById(id);
      return foundProduct;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  },
  createProduct: async ({ input }) => {
    const newWidget = new Widgets({
      name: input.name,
      description: input.description,
      price: input.price,
      soldout: input.soldout,
      inventory: input.inventory,
      stores: input.stores,
      product: input.product,
    });
    newWidget.id = newWidget._id;
    try {
      await newWidget.save();
      return newWidget;
    } catch (err) {
      throw new Error(err);
    }
  },
  updateProduct: async ({ input }) => {
    try {
      const updateWidget = Widgets.findOneAndUpdate({ _id: input.id }, input, {
        new: true,
      });
      return updateWidget;
    } catch (err) {
      throw new Error(err);
    }
  },
  deleteProduct: async ({ input }) => {
    try {
      const deletedItem = await Widgets.findByIdAndDelete({ _id: input.id });
      return deletedItem;
    } catch (err) {
      throw new Error(err);
    }
  },
  getAlLProducts: async () => {
    try {
      const AllProducts = await Widgets.find({});
      return AllProducts;
    } catch (err) {
      throw new Error(err);
    }
  },
  //   getProduct: ({ id }) => {
  //     if (!productDatabase[id]) {
  //       throw new Error("Product not found"); // Optional: handle the case when the product does not exist
  //     }
  //     return new Product(id, productDatabase[id]);
  //   },
  //   createProduct: ({ input }) => {
  //     let id = require("crypto").randomBytes(10).toString("hex");
  //     productDatabase[id] = input;
  //     return new Product(id, input);
  //   },
};
//   const root = {
//     product: () => {
//       return {
//         id: 2342323,
//         name: "Arun Shukla",
//         product: "Frooti",
//         description: "Arun is demanding a frooti",
//         soldout: false,
//         price: 10.5,
//         stores: [
//           { stores: "Reliance Mart" },
//           { stores: "D Mart" },
//           { stores: "Star Bazaar" },
//         ],
//       };
//     },

//   };

export default resolver;
