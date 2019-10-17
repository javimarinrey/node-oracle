const oracle = require('oracledb');
const dbConfig = require('./config/database');

let connection;

async function run () {
	try {

		const USER = dbConfig.hr.user;
		const PASS = dbConfig.hr.pass;
		const HOST = dbConfig.hr.host;
		const PORT = dbConfig.hr.port;
		const DDBB = dbConfig.hr.ddbb;

		connection = await oracle.getConnection({
			user: USER,
			password: PASS,
			connectString: HOST + ':' + PORT + '/' + DDBB
		})
		console.log('Successfully connected to Oracle!')
	} catch(err) {
		console.log('Error:', err)
	} finally {
		if (connection) {
			try {
				await connection.close();
			} catch(err) {
				console.log('Error when closing the database connection', err)
			}
		}
	}
}

run();