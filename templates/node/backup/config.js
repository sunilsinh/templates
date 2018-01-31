var _this = this;

module.exports = {

    /**
     * Create connection with mysql
     */
    serverconnection: () => {

        var mysql = require('mysql');

        var db_connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'node'
        });

        db_connection.connect((err) => { // Arrow function
            if (err) {
                throw err;
            } else {
                console.log("Database connected!");
            }

        });
        return db_connection;

    },

    /**
     * Use to insert Data
     * @param table_name, post_data
     */
    InsertData: (table_name = "", post_data = []) => {

        module.exports.serverconnection().query("INSERT INTO " + table_name + " SET ?", post_data, (err, res) => {
            if (err) {
                throw err;
            }
            console.log("Data successfully inserted!");
            //message = (res.insertId.length>0) ? "Successfully Inserted" : "Something went wrong"; 
        });

    },

    /**
     * Fetch Data from table
     */
    
    getDatas: (table_name = "", callback) => {
        //return new Promise((resolve,reject) => {
            module.exports.serverconnection().query("SELECT * FROM " + table_name, (err, rows) => {
                if (err) {
                    return err;
                } else {
                    console.log('in function');
                    callback(rows);
                }
            });
        //});
    }
} // End Exports