function buildResponse(body, statusCode) {
  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(body, null, 2),
  };
}

module.exports.errors = (error) => {
  const statusCode = error.statusCode || 500;
  const message = new Error(
    error.response
      ? error.response.data.message || error.response.data
      : error.message || error,
  );
  return buildResponse(message, statusCode);
};
module.exports.failure = (data, statusCode = 400) => buildResponse(data, statusCode);
module.exports.success = (data, statusCode = 200) => buildResponse(data, statusCode);
