const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.DATABASE_URL) {
	sequelize = new Sequelize(process.env.DATABASE_URL, {
		dialect: 'mysql',
		dialectOptions: {
			ssl: {
				rejectUnauthorized: false,
			},
		},
	});
} else {
	sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
		host: 'localhost',
		dialect: 'mysql',
		port: 3306,
	});
}

// sequelize
// 	.authenticate()
// 	.then(() => {
// 		console.log('Connection has been established successfully.');
// 	})
// 	.catch((error) => {
// 		console.error('Unable to connect to the database:', error);
// 	});

module.exports = sequelize;
