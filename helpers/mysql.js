var db = require('mysql');
var dbConfig = require('../package').config.db;

var createConnection = function () {
	return db.createConnection({
		host: dbConfig.host,
		port: dbConfig.port,
		user: dbConfig.user,
		password: dbConfig.password,
		database: dbConfig.database
	});
};

var mysql = {

	executeQuery: function (query, callback) {

		var connection = createConnection();
		connection.query(query, function (err, rows) {
			if (err)
				console.log(err);

			if (callback)
				callback(rows);
		});

		connection.end(function (err) {
			if (err)
				console.log('There was an error closing db connection.');
		});
	},

	executeInsert: function (connection, table, jdata, callback) {

		var sql = 'insert into {table} set ?'.replace('{table}', table);

		connection.query(sql, jdata, function (err, result) {
			if (err)
				console.log(err);

			if (callback)
				callback(result);
		});
	},

	createConnection: createConnection,

	closeConnection: function (connection) {
		connection.end(function (err) {
			if (err)
				console.log('There was an error closing db connection.');
		});
	}
};
module.exports = mysql;