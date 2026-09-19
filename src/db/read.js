const db = require('./connection.js');

async function getID(user) {
        const queryText = `
		SELECT "user", rsn, old FROM users
		WHERE "user" = '${user}';
	`;
    try { 
		const res = await db.query(queryText);
		return res.rows;
	} 
	catch (err) { console.error('🟥 Error getting data:', err.stack); }
}

async function getRSN(rsn) {
    const queryText = `
		SELECT "user", rsn, old FROM users
		WHERE rsn = '${rsn}';
	`;
    try { 
		const res = await db.query(queryText);
		return res.rows;
	} 
	catch (err) { console.error('🟥 Error getting data:', err.stack); }
}

async function getNotes(user) {
    const queryText = `
		SELECT * FROM notes
		WHERE "user" = '${user}';
	`;
    try { 
		const res = await db.query(queryText);
		return res.rows;
	} 
	catch (err) { console.error('🟥 Error getting data:', err.stack); }
}

module.exports = {
    getID,
    getRSN,
	getNotes
};