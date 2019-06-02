const middleware = require('../middlewares');

const { success, failure } = require('../utils/response');

const _ = async (event, context) => {
  try {
    return success({
      message: 'pong!',
      event,
      context,
      env: process.env,
    });
  } catch ({ message }) {
    return failure({
      message,
    });
  }
};

module.exports.handler = middleware(_);
