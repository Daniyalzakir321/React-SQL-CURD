const mysql = require('mysql')

const db = mysql.createPool({
    connectionLimit : 10,
    host: "remotemysql.com",
    user: "TFrRfNawOl",
    password: "2muQpHx61",
    database: "TFrRfNawOl",
    timezone        :'UTC'
  });

  db.on('connection', conn => {
    conn.query("SET time_zone='+00:00';", error => {
        if(error){
            throw error
        }
    })
  })

  
// db.connect(function (err) {                          // The server is either down
//     if (err) {                                       // or restarting (takes a while sometimes).
//         console.log('Databse error in connection:', err);
//         setTimeout(handleDisconnect, 2000);          // We introduce a delay before attempting to reconnect,
//     }
//     console.log('Databse connected as id ' + db.threadId);                                   // to avoid a hot loop, and to allow our node script to
// });                                                  // process asynchronous requests in the meantime.
// // If you're also serving http, display a 503 error.
// db.on('error', function (err) {
//     console.log('db error', err);
//     if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
//         handleDisconnect();                        // lost due to either server restart, or a
//     } else {                                      // connnection idle timeout (the wait_timeout
//         throw err;                                 // server variable configures this)
//     }
// });


// const db = mysql.createConnection({
// host: "localhost",
// user: "root",
// password: "",
// database:"blog_posts" 
// })


// Username: TFrRfNawOl
// Database name: TFrRfNawOl
// Password: 2muQpHx61
// Server: remotemysql.com
// Port: 3306
// https://webphpmyadmin.com/
// https://remotemysql.com/databases.php
// CREATE TABLE posts ( id int NOT NULL AUTO_INCREMENT PRIMARY KEY, title varchar(255), post_text varchar(255), user_name varchar(255), likes int )
// ALTER TABLE posts add column CREATE_TIMESTAMP TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
module.exports = db;