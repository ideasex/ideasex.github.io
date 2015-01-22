var teaserMessages = [
	["Use virtual reality to create remote operating rooms"],
	["Patience is a virtue"],
	["Never cut a tree down in the wintertime"],
	["Once you go in you always come out alive"],
	["Dying is MainStream #MONEY"],
	["Most trees are blue"],
	["Lately people call me scoop life"],
	["I build pyramids constantly"],
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

function preLaunch() {
	return document.getElementById("prompt").innerHTML = teaserMessages[Math.floor(Math.random()*teaserMessages.length)];
}












// RETURN a random prompt from the new array



// function changePrompt() {
	
// 	if (prompts != []) {
// 		var promptText = document.createTextNode(randomPrompt);
// 		var oldPrompt = document.body.getElementById("prompt");
// 		return oldPrompt.parentNode.replaceChild(promptText, oldPrompt);
// 	}
// }

