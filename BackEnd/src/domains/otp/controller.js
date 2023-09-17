const OTP = require("./model");
const generateOTP = require("./../../util/generateOTP");
const sendEmail = require("./../../util/sendEmail");
const { hashData, verifyHashedData } = require("./../../util/hashData");
const { AUTH_EMAIL } = process.env;

//verification function
const verifyOTP = async ({ email, otp }) => {
  try {
    if (!(email && otp)) {
      throw Error("Provide values fro email, otp");
    }

    //check if otp request exists for user
    const matchedOTPRecord = await OTP.findOne({
      email,
    });
    
    if (!matchedOTPRecord) {
      throw Error("No otp request found");
    }

    const { expiresAt } = matchedOTPRecord;

    //check if expired
    if (expiresAt < Date.now()) {
      await OTP.deleteOne({
        email,
      });

      throw Error("Code has expired. Request for a new one.");
    }

    //not expired, verify value
    const hashedOTP = matchedOTPRecord.otp;
    const validOTP = await verifyHashedData(otp, hashedOTP);

    return validOTP;
  } catch (error) {
    throw error;
  }
};

const sendOTP = async ({ email, subject, message, duration }) => {
  try {
    if (!(email && subject && message)) {
      throw Error("Provide values for email, subject, message");
    };

    //clear any old record 
    await OTP.deleteOne({ email });

    //generate pin
    const generatedOTP = await generateOTP();

    //send email to user
    const mailOptions = {
      from: AUTH_EMAIL,
      to: email,
      subject,
      html: `
        <p>${message}</p>
        <p style="color:tomato; font-size:25px;letter-spacing:2px;"><b>${generatedOTP}</b></p>
        <p>This code <b>expires in ${duration} hour(s)</b></p>
      `,
    };
    await sendEmail(mailOptions);

    //save otp record in DB
    const hashedOTP = await hashData(generatedOTP);
    const newOTP = await new OTP({
      email,
      otp: hashedOTP,
      createdAt: Date.now(),
      expiresAt: Date.now() + 3600000 * +duration,
    });

    const createdOTPRecord = await newOTP.save();
    return createdOTPRecord;
  } catch (error) {
    throw error;
  }
};

const deleteOTP = async (email) => {
  try {
   await OTP.deleteOne({ email });
  } catch (error) {
    throw error;
  }
};

module.exports = { sendOTP, verifyOTP, deleteOTP };