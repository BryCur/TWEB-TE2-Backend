const MongoClient = require('mongodb').MongoClient;

export class dbManager {

    dbURL = 'mongodb://localhost:27017/demo';
    client;
    constructor() {
        MongoClient.connect(this.dbURL).then((client) => { this.client = client });
    }



}
