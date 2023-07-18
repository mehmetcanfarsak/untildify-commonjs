//require os
const os = require('os');

const homeDirectory = os.homedir();

module.exports= function untildify (pathWithTilde) {
    if (typeof pathWithTilde !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof pathWithTilde}`);
	}
	return homeDirectory ? pathWithTilde.replace(/^~(?=$|\/|\\)/, homeDirectory) : pathWithTilde;
}