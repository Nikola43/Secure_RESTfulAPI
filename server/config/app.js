const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
import Neode from 'neode';


module.exports = function () {
    let server = express(),
        create,
        start;

    create = (config, db) => {
        let routes = require('../routes');
        // set all the server things
        server.set('env', config.env);
        server.set('port', config.port);
        server.set('hostname', config.hostname);

        // add middleware to parse the json
        server.use(bodyParser.json());
        server.use(expressValidator());
        server.use(
            bodyParser.urlencoded({
                extended: false
            })
        );

        const instance = new Neode(db.host,
            db.user, db.password);




        // Set up routes
        routes.init(server);
    };

    start = () => {
        let hostname = server.get('hostname'),
            port = server.get('port');
        server.listen(port, function () {
            console.log(
                'Express server listening on - http://' + hostname + ':' + port
            );
        });
    };
    return {
        create: create,
        start: start
    };
};
