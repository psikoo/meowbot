const db = require('./connection.js');

async function createUser(id, rsn) {
	const queryText = `
		INSERT INTO users (id, "user", rsn) 
		VALUES (DEFAULT, $1, $2);
	`;
	const values = [id, rsn];

	try { await db.query(queryText, values); } 
	catch (err) { console.error('🟥 Error saving message:', err.stack); }
}

async function createNote(id, note) {
	const queryText = `
		INSERT INTO notes (id, "user", note) 
		VALUES (DEFAULT, $1, $2);
	`;
	const values = [id, note];

	try { await db.query(queryText, values); } 
	catch (err) { console.error('🟥 Error saving message:', err.stack); }
}

module.exports = {
  createUser,
  createNote
};