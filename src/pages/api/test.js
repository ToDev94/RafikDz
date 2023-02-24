import clientPromise from "lib/mongodb";

const test = async (req, res) => {
  const testObj = [
    {
      grade: "1s",
      title: "درس  الوحدة الثانية للغة العربية",
      subject: "ar",
      branchName: "جذع مشترك علوم و تكنولوجيا",
      branchCode: "sc",
      type: "lessons",
      term: "ter1",
      year: "2017",
      pdfLink:
        "https://drive.google.com/file/d/1TlT2glH1xL1hzW_OAE7Pmg4tbbny2_Nj/preview",
    },
    {
      grade: "1s",
      title: "درس  الوحدة الرابعة للغة العربية",

      subject: "ar",
      branchName: "جذع مشترك علوم و تكنولوجيا",
      branchCode: "sc",
      type: "lessons",
      term: "ter1",
      year: "2021",
      pdfLink:
        "https://drive.google.com/file/d/1tFh8YMVPekoL-jHSHR0OzgMb-tDYD1bZ/preview",
    },
  ];
  const client = await clientPromise;
  const db = client.db("rafikdzdb");

  const insertedItem = await db.collection("1s-ar").insertMany(testObj);
  return res.status(201).json({ insertedItem });
};

export default test;

/* "grade": "1s",
"subject": "ar",
"branchName": "جذع مشترك علوم و تكنولوجيا",
"branchCode": "sc",
"type": "lesson",
"pdfLink": "" */
