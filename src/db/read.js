const db = require("./connection.js");

async function getID(user) {
	const queryText = `
		SELECT "user", rsn, old FROM users
		WHERE "user" = '${user}';
	`;
	try { return await db.query(queryText); }
	catch (err) { console.error("🟥 Error getting data:", err.stack); }
}

async function getRSN(rsn) {
	const queryText = `
		SELECT "user", rsn, old FROM users
		WHERE LOWER(rsn) = LOWER('${rsn}');
	`;
	try { return await db.query(queryText); } 
	catch (err) { console.error("🟥 Error getting data:", err.stack); }
}

async function getNotes(user) {
	const queryText = `
		SELECT * FROM notes
		WHERE "user" = '${user}';
	`;
    try { return await db.query(queryText); } 
	catch (err) { console.error("🟥 Error getting data:", err.stack); }
}

module.exports = {
	getID,
	getRSN,
	getNotes
};