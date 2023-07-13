const jwt = require('jsonwebtoken')

/**
 * Implement this function to accept a payload and a secret key and return a JWT without an expiry time
 *
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback
 */
function createToken(payload, secretorprivatekey) {
	const token = jwt.sign(payload, secretorprivatekey)

	return token
}

/**
 * Implement this function to accept a payload, secret key and an expiry time, and return a JWT with an expiry
 *
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#token-expiration-exp-claim
 */
function createTokenWithExpiry(payload, secretorprivatekey, expiry) {
	const token = jwt.sign(payload, secretorprivatekey, { expiresIn: expiry })

	return token
}

/**
 * Implement this function to accept a JWT and a secret key. Return the decoded token (the payload) if verification is successful, and false if it fails
 *
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */
function verifyToken(token, secret) {
	try {
		return (decoded = jwt.verify(token, secret))
	} catch (e) {
		return false
	}
}

module.exports = {
	createToken,
	createTokenWithExpiry,
	verifyToken,
}
