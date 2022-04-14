const { StatusCodes } = require("http-status-codes");
const statusModel = require("../../../model/status.model");

const create_status = async (req, res) => {
  const { userId, phone_number, status } = req.body;

  try {
    const mystatus = await statusModel.insertMany({
      userId,
      phone_number,
      status,
    });
    res.status(StatusCodes.CREATED).json({ message: "success", mystatus });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "error", error });
  }
};
module.exports = create_status;
