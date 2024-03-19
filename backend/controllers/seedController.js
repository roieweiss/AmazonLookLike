import User from "../models/User";
import Product from "../models/Product";
import data from "../data";

const seedData = async (req, res) => {
await User.deleteMany();
await Product.deleteMany();

 const users = await User.insertMany(data.users);
const products = await Product.insertMany(data.products);
res.send(users,products);
};

export default seedData;