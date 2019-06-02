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

module.exports.success = (body, statusCode = 200) => buildResponse(body, statusCode);
module.exports.failure = (body, statusCode = 500) => buildResponse(body, statusCode);
