import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Product{
        id: ID,
        name: String,
        product: String,
        description :String,
        soldout: Soldout,
        price: Float,
        stores:[Store]!
    }
    enum Soldout{
        SOLD_OUT
        On_SALE
    }
    type Store {
        stores:String
    }
    input StoreInput {
        stores : String
    }
    input ProductInput {
        id: ID,
        name: String,
        product: String,
        description :String,
        soldout: Soldout,
        price: Float,
        stores:[StoreInput]!
    }
    input DeleteData{
        id:ID!
    }
    type Mutation{
        createProduct(input: ProductInput) : Product
        updateProduct(input: ProductInput) : Product
        deleteProduct(input: DeleteData) : Product
        

    }
    type Query{
        getProduct(id:ID) : Product
        getAlLProducts : [Product]
    }
`);

export default schema;
