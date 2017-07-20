
var inquirer = require("inquirer");
var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");


function showCards() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: ["Study Basic Cards", "Study Cloze Cards"],
            name: "mainOptions"
        }

    ]).then(function (data) {

        var mainOptions = data.mainOptions;

        if (mainOptions === "Study Basic Cards") {
        	
        	var q1 = new BasicCard("Who was the first president of the United States?", "George Washington");

			inquirer.prompt([
				{
					type: "input",
					message: q1.front,
					name: "q1"
				}
			]).then(function (answer) {
				if (answer.q1 == q1.back) {
					console.log("You answered: " + answer.q1);
					console.log("You're correct!")
				} else {
					console.log("You answered: " + answer.q1);
					console.log("Sorry you're wrong. The correct answer is: " + q1.back);
				}
			});
        } else {
        	
        	var cq1 = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

        	inquirer.prompt([
	        	{
	        		type: "input",
	        		message: cq1.partial,
	        		name: "cq1"
	        	}
        	]).then(function (choice) {
				if (choice.cq1 == cq1.cloze) {
					console.log("You answered: " + choice.cq1);
					console.log("You're correct!" + "\n" + cq1.fullText);
				} else {
					console.log("You answered: " + choice.cq1);
					console.log("Sorry you're wrong. The correct answer is: " + cq1.cloze);
					console.log(cq1.fullText);
				}
			});
        }

    });
};

showCards();