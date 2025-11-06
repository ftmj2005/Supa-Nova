const paymentModel = require("../model/payment.model");
const createPayment = async () => {
  const taken = req.cookies?.token || req.headers?.authorization?.split(" ")[1];
  try {
    const orderId = req.params.orderId;
    const orderResponse = await axios.get(
      "http://localhost:3002/api/orders/" + orderId,
      {
        headers: {
          Authorization: `Bearer ${taken}`,
        },
      }
    );
    console.log(orderResponse.data);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {createPayment};
