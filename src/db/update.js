const db = require('./connection.js');

async function updateRSN(rsn, newRSN) {
	const queryText = `
		UPDATE users
		SET rsn = '${newRSN}'
		WHERE rsn = '${rsn}';
	`;
	try { 
		const res = await db.query(queryText);
		return res.rows;
	} 
	catch (err) { console.error('🟥 Error getting data:', err.stack); }
}

module.exports = {
  updateRSN
};