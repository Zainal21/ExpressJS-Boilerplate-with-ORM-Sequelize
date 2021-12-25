/** @format */

require("dotenv").config();
// set var obj db
const {
	DB_NAME,
	DB_USERNAME,
	DB_PASSWORD,
	DB_HOST,
	DB_PORT,
	DB_DIALECT
} = process.env;

module.exports = {
	development: {
		username: DB_USERNAME,
		password: DB_PASSWORD,
		database: DB_NAME,
		host: DB_HOSTNAME,
		port: DB_PORT,
		dialect: DB_DIALECT,
	},
	test: {
		username: DB_USERNAME,
		password: DB_PASSWORD,
		database: DB_NAME,
		host: DB_HOSTNAME,
		port: DB_PORT,
		dialect: DB_DIALECT,
	},
	production: {
		username: DB_USERNAME,
		password: DB_PASSWORD,
		database: DB_NAME,
		host: DB_HOSTNAME,
		port: DB_PORT,
		dialect: DB_DIALECT,
	},
};