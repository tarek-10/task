const { StatusCodes } = require("http-status-codes");
const userModel = require("../../../model/user.model");
const bcrypt = require('bcrypt');

const userRegisteration = async (req, res) => {
  const {
    first_name,
    last_name,
    country_code,
    phone_number,
    gender,
    birthdate,
    email,
    password,
    role
  } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (user) {
      res.json({ message: "user already exist...!" });
    } else {
      const urls = [];
      if (req.files) {
        for (let i = 0; i < req.files.length; i++) {
          urls.push(process.env.IMAGE_URL + req.files[i].filename);
        }
      }
      bcrypt.hash(password, 8, async function (err, hash) {
        if (err) throw err;
        const RegisterUser = await userModel.insertMany({
          first_name,
          last_name,
          country_code,
          phone_number,
          gender,
          birthdate,
          avatar: urls,
          email,
          password: hash,
          role
        });
        res
          .status(StatusCodes.CREATED)
          .json({ message: "success", RegisterUser });
      });
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "error", error });
  }
};

module.exports = userRegisteration;
