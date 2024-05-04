import user from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import nodemailer from "nodemailer";
import jsonwebtoken from "jsonwebtoken";


const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !password || !email) {
      return res.status(204).json({ message: "incomplete content" });
    } else {

      const new_user = await user.findOne({ username, email });
      console.log(new_user);
      if (!new_user) {
        const hashed_password = await bcryptjs.hash(password, 8);
        await user.create({
          username: username,
          email: email,
          password: hashed_password,
          role: 'Patient',
        });
        return res.status(200).json({ message: "user created" });
      } else {
        return res.status(409).json({ message: "user already exist" });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};


// signin path => "/Hospital/signin"
const signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username | !password) {
      return res.status(202).json({ message: "incomplete content" });
    } else {
      const auth_user = await user.findOne({ username });
      console.log(auth_user);
      console.log("hey....")
      if (!auth_user) {
        return res
          .status(401)
          .json({ message: `user with ${username} no found` });
      } else {
        const verify = await bcryptjs.compare(password, auth_user.password);
        if (!verify) {
          return res
            .status(401)
            .json({ message: "username or password incorrect" });
        } else {
          const token = jsonwebtoken.sign({ auth_user }, "uH7XGk98uT5bmHCAhyuNTke7XmAJwfSuPFr", { expiresIn: "5h" });
          res.cookie("authorization", `Bearer ${token}`);
          return res.status(200).json({ token: `Bearer ${token}`, user: auth_user, message: "login successfully" });
        }

      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



//Get User by Id
const getUserById = async (req, res) => {
  try {
    const user = await user.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


//update Patient


const updatePatient = async (req, res) => {
  const { firstName, lastName, age, gender, CNIC, bloodType, phone, location } = req.body;
  if (!firstName || !lastName || !age || !gender || !CNIC || !bloodType || !location) {
    res.status(400).json({ message: "error", errors: "incomplete content", });
  } else {
    try {
      const updatedPatient = await user.updateOne(
        { _id: req.params.id },
        {
          $set: {
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            age: age,
            CNIC: CNIC,
            bloodType: bloodType,
            phone: phone,
            location: location
          },
        }
      );

      // const updateduser = await User.updateOne(
      //   { _id: req.body.userId },
      //   {
      //     $set: {
      //       firstName: req.body.firstName,
      //       lastName: req.body.lastName,
      //       email: req.body.email,
      //       username: req.body.username,
      //       password: req.body.password,
      //     },
      //   }
      // );

      res.status(200).json({ message: "success" });
    } catch (error) {
      res.status(400).json({ message: "error", errors: [error.message] });
      console.log(error.message);
    }
  }
};


const getPatientByUserId = async (req, res) => {
  try {
    const patient = await user.findOne({ userId: req.params.id }).populate(
      "userId"
    );
    res.json(patient);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export default { signup, signin, updatePatient, getPatientByUserId };