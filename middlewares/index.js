const middy = require('middy');
const {
  httpErrorHandler, doNotWaitForEmptyEventLoop,
} = require('middy/middlewares');

module.exports = fn => middy(fn)
  .use(doNotWaitForEmptyEventLoop({ runOnError: true }))
  .use(httpErrorHandler());
