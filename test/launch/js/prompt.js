
var industries = [
	["Energy", "#energy"],
	["Artificial Intelligence", "#ai"],
	["Robotics", "#bots"],
	["Biotech", "#biotech"],
	["Healthcare", "#healthcare"],
	["Pharmaceuticals", "#pharmaceuticals"],
	["Food and Water", "#food"],
	["Education", "#education"],
	["Infrastructure", "#infrastructure"],
	["Government", "#government"],
	["Human Augmentation", "#augment"],
	["Virtual Reality and Augmented Reality", "#ai"],
	["Science", "#science"],
	["Transportation and Housing", "#transport"],
	["One Million Jobs", "#million"],
	["Programming Tools", "#program"],
	["Hollywood 2.0", "#hollywood"],
	["Diversity", "#diversity"],
	["Developing Countries", "#developing"],
	["Enterprise Software", "#enterprise"],
	["Financial Services", "#financial"],
	["Telecommunications", "#telecom"],	
	];



function changePrompt() {
// Pick random industry and name firstIndustry
	var firstPrompt = industries[Math.floor(Math.random()*industries.length)];
// Pick random industry and name secondIndustry
	var secondPrompt = industries[Math.floor(Math.random()*industries.length)];
// Push prompt using string interpolation and DOM stuff
	var prompt = ["How can we use ", "<a target='_blank' href='https://www.ycombinator.com/rfs/", firstPrompt[1], "'>", firstPrompt[0], "</a> ", "to solve a problem in ", "<a target='_blank' href='https://www.ycombinator.com/rfs/", secondPrompt[1], "'>", secondPrompt[0], "</a>", "?"].join("");
// Replace text node
	return document.getElementById("prompt").innerHTML = prompt;
}

function resetPrompt() {
	var resetPrompt = "Click me to make ideas have the sexes";
	return document.getElementById("prompt").innerHTML = "Click the button to generate a new prompt";
}










// RETURN a random prompt from the new array



// function changePrompt() {
	
// 	if (prompts != []) {
// 		var promptText = document.createTextNode(randomPrompt);
// 		var oldPrompt = document.body.getElementById("prompt");
// 		return oldPrompt.parentNode.replaceChild(promptText, oldPrompt);
// 	}
// }

