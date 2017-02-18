// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: "l7cup2om0gngra77.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "z9hg1vr8x139nemr",
        password: "txadwry5csio5mfw",
        database: "burgers_db"
    });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
