import mongoose from "mongoose";

async function connectMongo() {
  try {
    await mongoose.connect(
      "mongodb+srv://arunshukla:Shukla893@neog.5v8po5k.mongodb.net/<dbname>?retryWrites=true&w=majority&appName=neoG"
    );
    console.log("SUCCESSFULLY CONNECTED TO MONGODB");
  } catch (err) {
    console.error("Error in CONNECTING TO MONGODB:", err.message);
  }
}

connectMongo();

const widgetSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  soldout: {
    type: String,
  },
  stores: {
    type: Array,
  },
});

const Widgets = mongoose.model("widgets", widgetSchema);
export { Widgets };
