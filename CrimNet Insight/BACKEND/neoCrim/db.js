const neo4j = require('neo4j-driver');

// connect sa bazom
const driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', 'acavrbaCrim'));
const session = driver.session();

module.exports = { driver, session };
