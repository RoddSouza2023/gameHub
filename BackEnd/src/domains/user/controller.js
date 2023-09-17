const User = require("./model");
const { hashData, verifyHashedData } = require("./../../util/hashData");
const createToken = require("./../../util/createToken");

const authenticateUser = async (data) => {
  try {
    const { email, password } = data;

    const fetchedUser = await User.findOne({
      email
    });

    if (!fetchedUser) {
      throw Error("Email provided is invalid!")
    }

    if (!fetchedUser.verified) {
      throw Error("Email hasn't been verified. Please check your inbox");
    }

    const hashedPassword = fetchedUser.password;
    const passwordMatch = await verifyHashedData(password, hashedPassword);

    if (!passwordMatch) {
      throw Error("Invalid password!");
    }

    const tokenData = { userId: fetchedUser._id, email}
    const token = await createToken(tokenData);

    fetchedUser.token = token;
    return fetchedUser;

  } catch (error) {
    throw error;
  }
};

const createNewUser = async (data) => {
  try {
    const { name, email, password } = data;

    //Checking if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw Error("User with that email already exists");
    }

    //hash password
    const hashedPassword = await hashData(password);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    const createdUser = await newUser.save();

    return createdUser;

  } catch (error) {
    throw error;
  }
};

module.exports = { createNewUser, authenticateUser };