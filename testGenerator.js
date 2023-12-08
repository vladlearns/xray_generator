const fs = require("fs").promises;

const createTestCase = (language = "EN") => ({
  testtype: "Manual",
  fields: {
    summary: "Test",
    project: { key: "TE" },
  },
  steps: [
    {
      action: "Test",
      data: "Test",
      result: "Test",
    },
  ],
  xray_test_sets: ["TE-1784"],
});

const generateTestCases = (languages = ["EN"]) => {
  return languages.map(createTestCase);
};

const main = async () => {
  try {
    const languages = ["EN"];
    const testCases = generateTestCases(languages);
    await fs.writeFile("xrayReady.json", JSON.stringify(testCases));
    console.log("File written successfully");
  } catch (err) {
    console.error(err);
  }
};

main();
