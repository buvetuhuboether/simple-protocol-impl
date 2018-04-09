'use strict';

const Server = require( './lib/server.js' );

const server = new Server();

server.listen( 3003, () => console.log( 'ready' ) )
    .on( 'listen', () => console.log( 'listen' ) )
    .on( 'connection', conn => {
        console.log( 'new connection' );
        conn.on( 'packet', packet => console.log( packet ) );
    });