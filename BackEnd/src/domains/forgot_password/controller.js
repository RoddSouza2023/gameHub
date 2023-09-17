const User = require("./../user/model");
const { sendOTP, verifyOTP, deleteOTP } = require("./../otp/controller");
const { hashData } = require("./../../util/hashData");

const resetUserPassword = async ({ email, otp, newPassword }) => {
  try {
    const validOTP = await verifyOTP({ email, otp });

    if (!validOTP) {
      throw Error("Invalid code passed. Please check your email and try again");
    }

    //update user password
    if (newPassword.length < 8) {
      throw Error("Password must have at least 8 characters")
    }
    const hashedNewPassword = await hashData(newPassword);
    await User.updateOne({ email }, { password: hashedNewPassword });
    await deleteOTP(email);

    return;
  } catch (error) {
    throw error;
  }
};

const sendPasswordResetOTPEmail = async (email) => {
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      throw Error("There's no account with that email in our system.");
    }

    if (!existingUser.verified) {
      throw Error("Email has not been verified. Please check your inbox.");
    }
 
    const otpDetails = {
      email,
      subject: "password Reset",
      message: "Enter the code below to reset your password",
      duration: 1,
    };

    const createdOTP = await sendOTP(otpDetails);
    return createdOTP;
  } catch(error) {
    throw error;
  }
};

module.exports = { sendPasswordResetOTPEmail, resetUserPassword };