/** Common config for message.ly */

// read .env files and make environmental variables

require("dotenv").config();


let DB_NAME;

if (process.env.NODE_ENV === "test") {
  DB_NAME = "messagely_test";
} else {
  DB_NAME = "messagely";
}


const SECRET_KEY = process.env.SECRET_KEY || "secret";

const BCRYPT_WORK_FACTOR = 12;


module.exports = {
  DB_NAME,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR,
};