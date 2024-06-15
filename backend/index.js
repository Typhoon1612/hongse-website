import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"SYW432021#",
    database:"honsge_database"
})

app.use(express.json());

app.use(cors());

app.post("/CheckLoginInfo", (req, res) => {
    const phoneNumber = req.body.phoneNumber;
    const password = req.body.password;

    const query = "SELECT COUNT(*) AS Count, customer_id FROM login_info WHERE phone_number = ? AND customer_password = ?";

    db.query(query, [phoneNumber, password], (err, data) => {
        if (err) throw err;
        console.log(data);
        res.json({message: data[0].Count > 0 ? "Data Exist" : "Data doesn't Exist", customer_id: data[0].customer_id}); 
    }); 
})

app.post("/FetchCustomerInfo", (req, res)=>{
    const customer_id = req.body.customerID;
    const query = 
        "SELECT * FROM customers WHERE customer_id = ?";
    db.query(query, [customer_id], (err, data)=>{
        if(err) return res.json(err);
        res.json(data);  
    })
}) 

app.put("/UpdateCustomerInfo", (req, res)=>{
    const customer_id = req.body.customer_id;
    const customer_name = req.body.customer_name;
    const age = req.body.age;
    const email = req.body.email;
    const phone_number = req.body.phone_number;
    const gender = req.body.gender;
    const university =req.body.university;
    const updateCustomersQuery = `
        UPDATE customers 
        SET customer_name = ?, 
            age = ?, 
            email = ?, 
            phone_number = ?, 
            gender = ?, 
            university = ?
        WHERE customer_id = ?
    `;

    const updateLoginInfoQuery = `
        UPDATE login_info 
        SET phone_number = ?
        WHERE customer_id = ?
    `;

    db.query(updateCustomersQuery, [customer_name, age, email, phone_number, gender, university, customer_id], (err, data) => {
        if (err) return res.json(err);

        db.query(updateLoginInfoQuery, [phone_number, customer_id], (err, data) => {
            if (err) return res.json(err);
            return res.json("Customer updated successfully");
        });
    });
})

app.post("/CreateCustomerInfo", (req, res) => {
    //let customerID = 0;
    const { customer_name, customer_password, age, email, phone_number, gender, university } = req.body;

    db.query

    // Insert into customers table
    db.query(
        "INSERT INTO customers (customer_name, age, email, phone_number, gender, university, created_time) VALUES (?, ?, ?, ?, ?, ?, NOW());",
        [customer_name, age, email, phone_number, gender, university],
        (err, data) => {
            if (err) {
                res.status(500).json({ message: "Error inserting customer" });
                throw err;
            }
            
            let customerID = data.insertId;

            // Insert into login_info table after getting the customerID
            db.query(
                "INSERT INTO login_info (phone_number, customer_password, customer_id, created_time) VALUES (?, ?, ?, NOW());",
                [phone_number, customer_password, customerID],
                (err, data) => {
                    if (err) {
                        res.status(500).json({ message: "Error inserting login info" });
                        throw err;
                    }
                    res.json({ message: "Account created successfully" });
                }
            );
        }
    );
});

app.get("/FetchPoints", (req, res)=>{
    const query = "SELECT * FROM points WHERE customer_id = ?"
    const customer_id = req.query.customerID;
    console.log(req.body.customerID);
    db.query(query, [customer_id], (err, data)=>{
        if(err) return res.json(err)
        console.log(data);
        return res.json(data)  
    })
})

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})