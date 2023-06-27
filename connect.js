import mysql from "mysql";
import 'dotenv/config'

// export const db = mysql.createConnection({
//   host: "localhost",
//   user: "root", 
//   password: "12341234",
//   database: "ulmie-v1"
// })

const urlDB = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSQLPORT}/${process.env.MYSQLDATABASE}`;

export const db = mysql.createConnection(urlDB);