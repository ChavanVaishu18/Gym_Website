const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const bodyParser = require("body-parser")
const port = process.env.PORT || 5000
const app = express()

app.use("/", express.static("public"))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


    app.get("/api", (req, res) => {
        res.send("Hello World!")
    })

    app.post("/api", (req, res) => {
        const { name, email, phone, remark } = req.body

        console.log(req.body)
        var sql = `INSERT INTO gymmembers (FirstName,LastName, Email, Phone, Address, Age, Gender, MembershipType, JoinDate,MembershipExpiry,remark) VALUES ('${firstname}','${lastname}', '${email}',' ${phone}','${Address}','${Age}','${Gender}','${MembershipType}','${JoinDate}','${MembershipExpiry}','${remark}')`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Table created");

            res.send("Data is inserted !")
        });
    })

    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`)
    })

