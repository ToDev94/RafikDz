import clientPromise from "lib/mongodb";

const test = async (req, res) => {
  const testObj = {
    grade: "1s",
    subject: "islamics",
    pdfLink:
      "https://drive.google.com/file/d/1LHURySqhWqOVPluAxu2CiQG2M83WK_09/preview",
  };
  const client = await clientPromise;
  const db = client.db("rafikdzdb");
  const insertedItem = await db.collection("s-islamics").insertOne(testObj);
  return res.status(201).json({ insertedItem });
};

export default test;
