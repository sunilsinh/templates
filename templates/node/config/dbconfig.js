// Use restrict to prevent es5 errors
"use strict"
// const in ES6 value could not be change
const mysql = require("mysql");

// Export DB with ES6 class constructor.

module.exports = class DB {
    constructor() {
        this.dbConnection = mysql.createConnection({
            hostname: 'localhost',
            user: 'root',
            password: '',
            database: 'node'
        });
    }
    /**
     * It use to check connection is stabilished or not!
     */
    connection() {
        this.dbConnection.connect(function (err,res) {
            if (err) {
                console.error("Something went wrong," + err.stack);
                return;
            } else {
                console.log("Database connected!" + res);
            }
        });

    }
    /**
     * It use to insert data into table.
     * @param {string} table_name 
     * @param {array} post_data 
     */
    InsertData(table_name = "", post_data = []) {

        this.dbConnection.query("INSERT INTO " + table_name + " SET ?", post_data, (err, res) => {
            if (err) {
                console.log("test 2");
                console.error("Something went wrong: " + err.stack);

            } else {
                console.log("Data successfully inserted!" + JSON.stringify(res));
            }
        });
    }
    /**
     * It use to get data from table.
     * @param {string} table_name 
     * @param {()} callback 
     */
    getDatas(table_name = "", callback) {

        var query = this.dbConnection.query(`SELECT * FROM ${table_name}`, (err, rows) => {
            if (err) {
                console.log(query);
                console.log("Something went wrong!" + err);
                return err;
            } else {
                callback(rows);
                return;
            }
        });
    }
    /**
     * It use to get value from table on WhereClause basis.
     * @param {string} table_name 
     * @param {array} whereClause 
     * @param {()} callback 
     */
    AndWhereClause(table_name = "", whereClause = [], callback) {
        var js = this.dbConnection.query(`SELECT * FROM ${table_name}`,whereClause,(err, rows) => {
            if(err) {
                console.log("Something went wrong!" + err.stack);
                return;
            }
            console.log(js);
            callback(rows);
            return;
        })
    }
}
