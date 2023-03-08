const fs = require("fs");

const languages = ["EN", "JP", "ES", "DE", "IT"];

const testCases = [];

languages.forEach((lang) => {
	testCases.push({
		testtype: "Manual",
		fields: {
			summary: `Lora Ipsumovna - ${lang} - Lora Ipsumovna`,
			project: { key: "JR" },
		},
		steps: [
			{
				action: "Go to the random Lora Ipsumovna page",
				data: "",
				result: "User is on the random Lora Ipsumovna page",
			},
			{
				action: "Click on Lora Ipsumovna button in the Lora Ipsumovna block",
				data: "",
				result: "User is redirected to the Lora Ipsumovna page",
			},
			{
				action: "Fill the Lora Ipsumovna form",
				data: "",
				result: "All required fields are filled",
			},
			{
				action: "Submit a form",
				data: "",
				result: "Lora Ipsumovna is displayed",
			},
			{
				action: "Click on 'Go to Lora Ipsumovna' button",
				data: "",
				result: "User is on the Lora Ipsumovna page",
			},
		],
		xray_test_sets: ["JR-4850"],
	});
});

fs.writeFile("xrayReady.json", JSON.stringify(testCases), (err) => {
	console.log(err);
});


// write a readme file