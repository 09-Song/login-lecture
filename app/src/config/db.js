const mysql = require("mysql");

const db = mysql.createConnection({
    host: "project-mavel.ccexpgxbp1xb.ap-northeast-2.rds.amazonaws.com",
    user: "ssong8154",
    password: "ss2003302",
    database: "project_mavel",
});

db.connect();

module.exports = db;