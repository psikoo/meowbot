const db = require("./connection.js");

async function deleteRSN(rsn) {
	const queryText = `
		DELETE FROM users 
		WHERE rsn = '${rsn}';
	`;
	try { return await db.query(queryText); } 
	catch (err) { console.error("🟥 Error deleting data:", err.stack); }
}

async function deleteNote(id) {
	const queryText = `
		DELETE FROM notes 
		WHERE id = '${id}';
	`;
	try { return await db.query(queryText); } 
	catch (err) { console.error("🟥 Error deleting data:", err.stack); }
}

module.exports = {
  deleteRSN,
  deleteNote
};