import { MongoClient } from "mongodb"; //getting function from library tool box call mongodb.
import mysql from 'mysql2/promise'
import { mongoURI, mySQLConnect } from "./secrets.js";// getting our secret connection string

const db1 = await mysql.createConnection(mySQLConnect)

const [movieList] = await db1.execute("Select * from movies") //getting list information

db1.end() // end SQL connection

const connection = new MongoClient(mongoURI)//connect to mongo 

await connection.connect()

const db2 = connection.db('Cluster0') //connect to database

// movieList.forEach(async (movie) => {//loop through the database using .foreach
   await db2.collection("movies")
        .insertMany(movieList)
// })

connection.close();