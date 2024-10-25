const { MongoClient } = require("mongodb");

const url = "mongodb://0.0.0.0:27017";
const dbName = "empdb";

async function main() {
  const client = new MongoClient(url);

  try {
    await client.connect();
    console.log("Connected to MongoDB.");

    const db = client.db(dbName);
    const collection = db.collection("employee");

    const insertResult = await collection.insertOne({
      name: "Hardik Anawala",
      position: "Developer",
      salary: 60000,
    });
    console.log(`Inserted record with ID: ${insertResult.insertedId}`);

    const employees = await collection.find({}).toArray();
    console.log("Employee Records:");
    employees.forEach((employee) => {
      console.log(employee);
    });
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await client.close();
    console.log("Database connection closed.");
  }
}

main();
