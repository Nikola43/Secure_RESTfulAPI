const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', '123456'));

exports.getSession = function (context) {
    if (context.neo4jSession) {
        return context.neo4jSession;
    } else {
        context.neo4jSession = driver.session();
        return context.neo4jSession;
    }
};
