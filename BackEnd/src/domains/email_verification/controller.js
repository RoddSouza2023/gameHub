const User = require("./../user/model");
const { sendOTP, verifyOTP, deleteOTP } = require("./../otp/controller");

 const verifyUserEmail = async ({ email, top }) => {
  try {
    const validOTP = await verifyOTP({ email, otp });

    if(!validOTP) {
      throw Error("Invalid code! Please check your inbox and try again");
    }
    //update user record to verify email
    await User.updateOne({ email }, { verified: true });
    await deleteOTP(email);
    return;
  } catch (error) {
    throw error;
  }
 };

const sendVerificationOTPEmail = async (email) => {
  try {
    //check if account exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw Error("There is no account for the entered email.")
    }

    const otpDetails = {
      email,
      subject: "Email Verification",
      message: "Verify your email with the code below",
      duration: 1,
    }

    const createdOTP = await sendOTP(otpDetails);
    return createdOTP;
  } catch (error) {
    throw error;
  }
};

module.exports = { sendVerificationOTPEmail, verifyUserEmail };