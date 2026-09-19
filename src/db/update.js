const db = require('./connection.js');
const { getRSN } = require('./read.js');
const { createUser } = require('./create.js');

async function updateRSN(rsn, newRSN) {
	queryText = `
		UPDATE users
		SET old = true
		WHERE rsn = '${rsn}';
	`;
	try { 
		await db.query(queryText);
		user = await getRSN(rsn);
		await createUser(user[0].user, newRSN);
	} 
	catch (err) { console.error('🟥 Error getting data:', err.stack); }
}

module.exports = {
  updateRSN
};