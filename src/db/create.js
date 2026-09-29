const db = require("./connection.js");

async function createUser(id, rsn) {
	const queryText = `
		INSERT INTO users (id, "user", rsn) 
		VALUES (DEFAULT, ${id}, ${rsn});
	`;
	try { return await db.query(queryText); } 
	catch (err) { console.error("🟥 Error creating data:", err.stack); }
}

async function createNote(id, note) {
	const queryText = `
		INSERT INTO notes (id, "user", note) 
		VALUES (DEFAULT, ${id}, ${note});
	`;
	try { return await db.query(queryText); } 
	catch (err) { console.error("🟥 Error creating data:", err.stack); }
}

module.exports = {
  createUser,
  createNote
};