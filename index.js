/**
 *
 * @param  {...string} allowedOrigins multiples arguments for allowed origins
 * @returns {object} response header
 */
module.exports.responseHeader = (...allowedOrigins) => {
  const origins = allowedOrigins.join(', ')
  return {
    'Access-Control-Allow-Origin': origins,
    'Access-Control-Allow-Credentials': true,
    'Content-Type': 'application/json'
  }
}
/**
 * @param {number} statusCode
 * @param {object} body
 * @param {...string} allowedOrigins multiples arguments for allowed origins
 * @return {object} response
 */

module.exports.corsResponse = (statusCode, body, ...allowedOrigins) => {
  return {
    statusCode,
    headers: this.responseHeader(allowedOrigins),
    body: JSON.stringify(body)
  }
}
