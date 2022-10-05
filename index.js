const express = require("express");
const app = express();
//Começando a conexao de dados mysql
const mysql = require("mysql");
const cors = require("cors"); 

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "crudgame",
});

// verificando se esta ok e execultando cd mysql
app.get("/", (req, res) => {

    let SQL = 
        "INSERT INTO gametable ( name, cost, category ) VALUES ('FIFA 23', '190', 'Futebol')";

    db.query(SQL, (err, result) => {
        console.log(err);
    });
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
   const { name } = req.body;
   const { cost } = req.body;
   const { category } = req.body;

   console.log(name);
})

app.listen(3001, () => {
    console.log("Rodando servidor!!!")
});