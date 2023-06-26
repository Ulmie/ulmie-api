import mysql from "mysql";

// export const db = mysql.createConnection({
//   host: "localhost",
//   user: "root", 
//   password: "12341234",
//   database: "ulmie-v1"
// })

const urlDB = `mysql://root:1iYa2VCRy3m9qwyB3ASK@containers-us-west-120.railway.app:7734/railway`;

export const db = mysql.createConnection(urlDB);