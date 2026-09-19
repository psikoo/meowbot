const db = require('./connection.js');

async function deleteRSN(rsn) {
	const queryText = `
		DELETE FROM users 
		WHERE rsn = '${rsn}';
	`;
    try { 
		const res = await db.query(queryText);
		return res.rows;
	} 
	catch (err) { console.error('🟥 Error getting data:', err.stack); }
}

async function deleteNote(id) {
	const queryText = `
		DELETE FROM notes 
		WHERE id = '${id}';
	`;
    try { 
		const res = await db.query(queryText);
		return res.rows;
	} 
	catch (err) { console.error('🟥 Error getting data:', err.stack); }
}

module.exports = {
  deleteRSN,
  deleteNote
};