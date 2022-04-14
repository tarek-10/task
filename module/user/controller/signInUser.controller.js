const { StatusCodes } = require("http-status-codes");
const userModel = require("../../../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const login = async (req, res) => {
  const { password, phone_number } = req.body;

  try {
    const user = await userModel.findOne({
      phone_number,
    });

    if (!user) {
      res.json({
        message: "User Not Found You Should Register Firstly...!",
      });
    } else {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = jwt.sign(
          {
            _id: user._id,
            email: user.email,
            role: user.role,
          },
          process.env.SECRET_KEY
        );

        res.status(StatusCodes.OK).json({
          message: "sucess",
          token,
          data: {
            _id: user._id,
            phone_number: user.phone_number,
            email: user.email,
          },
        });
      } else {
        res.json({
          message: "In-Valid password...!",
        });
      }
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "error", error });
  }
};
module.exports = login;
