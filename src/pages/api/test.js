import clientPromise from "lib/mongodb";

const test = async (req, res) => {
  const testObj = [
    { branchObj: "sc", branchName: "جذع مشترك علوم و تكنولوجيا" },
    { branchObj: "l", branchName: "جذع مشترك آداب وفلسفة" },
    {
      grade: "1s",
      subject: "ar",
      branch: { branchName: "جذع مشترك علوم و تكنولوجيا", branchCode: "sc" },
      type: "lesson",
      pdfLink: "",
    },
    {
      grade: "1s",
      subject: "ar",
      branch: { branchName: "جذع مشترك آداب وفلسفة", branchCode: "l" },
      type: "lesson",
      pdfLink: "",
    },
  ];
  const client = await clientPromise;
  const db = client.db("rafikdzdb");

  const insertedItem = await db.collection("1s-ar").insertMany(testObj);
  return res.status(201).json({ insertedItem });
};

export default test;
