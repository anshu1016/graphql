import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./data/schema";
import resolver from "./data/resolver";
const app = express();
const PORT = 8080;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
const root = resolver;
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema, //only schema we can write because key and value is same
    rootValue: root,
    graphiql: true,
  })
);
app.listen(PORT, () => {
  console.log(`app is listening at ${PORT}/graphql`);
});
