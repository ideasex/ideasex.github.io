
var yc_industries = [
	["Energy", "https://www.ycombinator.com/rfs/#energy"],
	["Artificial Intelligence", "https://www.ycombinator.com/rfs/#ai"],
	["Robotics", "https://www.ycombinator.com/rfs/#bots"],
	["Biotech", "https://www.ycombinator.com/rfs/#biotech"],
	["Healthcare", "https://www.ycombinator.com/rfs/#healthcare"],
	["Pharmaceuticals", "https://www.ycombinator.com/rfs/#pharmaceuticals"],
	["Food and Water", "https://www.ycombinator.com/rfs/#food"],
	["Education", "https://www.ycombinator.com/rfs/#education"],
	["Infrastructure", "https://www.ycombinator.com/rfs/#infrastructure"],
	["Government", "https://www.ycombinator.com/rfs/#government"],
	["Human Augmentation", "https://www.ycombinator.com/rfs/#augment"],
	["Virtual Reality and Augmented Reality", "https://www.ycombinator.com/rfs/#vrar"],
	["Science", "https://www.ycombinator.com/rfs/#science"],
	["Transportation and Housing", "https://www.ycombinator.com/rfs/#transport"],
	["One Million Jobs", "https://www.ycombinator.com/rfs/#million"],
	["Programming Tools", "https://www.ycombinator.com/rfs/#program"],
	["Hollywood 2.0", "https://www.ycombinator.com/rfs/#hollywood"],
	["Diversity", "https://www.ycombinator.com/rfs/#diversity"],
	["Developing Countries", "https://www.ycombinator.com/rfs/#developing"],
	["Enterprise Software", "https://www.ycombinator.com/rfs/#enterprise"],
	["Financial Services", "https://www.ycombinator.com/rfs/#financial"],
	["Telecommunications", "https://www.ycombinator.com/rfs/#telecom"],	
	];


var a16z_industries = [
	["Virtual Reality", "http://a16z.com/2015/01/22/virtual-reality/"],
	["Sensorification of the Enterprise", "http://a16z.com/2015/01/22/sensorification-of-the-enterprise/"],
	["Machine Learning + Big Data", "http://a16z.com/2015/01/22/machine-learning-big-data/"],
	["The Full-Stack Startup", "http://a16z.com/2015/01/22/the-full-stack-startup/"],
	["Containers", "http://a16z.com/2015/01/22/containers/"],
	["Digital Health", "http://a16z.com/2015/01/22/digital-health/"],
	["Online Marketplaces", "http://a16z.com/2015/01/22/online-marketplaces/"],
	["Security", "http://a16z.com/2015/01/22/security/"],
	["Cloud-Client Computing", "http://a16z.com/2015/01/22/cloud-client-computing/"],
	["Crowdfunding", "http://a16z.com/2015/01/22/crowdfunding/"],
	["Internet of Things", "http://a16z.com/2015/01/22/internet-of-things/"],
	["Online Video", "http://a16z.com/2015/01/22/online-video/"],
	["Insurance", "http://a16z.com/2015/01/22/insurance/"],
	["Failure", "http://a16z.com/2015/01/22/failure/"],
	["Bitcoin and Blockchain", "http://a16z.com/2015/01/22/bitcoin-and-blockchain/"],
	["DevOps", "http://a16z.com/2015/01/22/devops/"]
	];

var all_industries = yc_industries.concat(a16z_industries);

function changePrompt(industries) {
// Pick random industry and name firstIndustry
	var firstPrompt = industries[Math.floor(Math.random()*industries.length)];
// Pick random industry and name secondIndustry
	var secondPrompt = industries[Math.floor(Math.random()*industries.length)];
// Push prompt using string interpolation and DOM stuff
	var prompt = ["How can we use ", "<a target='_blank' href=", firstPrompt[1], ">", firstPrompt[0], "</a> ", "to solve a problem in ", "<a target='_blank' href=", secondPrompt[1], ">", secondPrompt[0], "</a>", "?"].join("");
// Replace text node
	return document.getElementById("prompt").innerHTML = prompt;
}

function resetPrompt() {
	var resetPrompt = "Click me to make ideas have the sexes";
	return document.getElementById("prompt").innerHTML = "Click the button to generate a new prompt";
}




// test to fix





// RETURN a random prompt from the new array



// function changePrompt() {
	
// 	if (prompts != []) {
// 		var promptText = document.createTextNode(randomPrompt);
// 		var oldPrompt = document.body.getElementById("prompt");
// 		return oldPrompt.parentNode.replaceChild(promptText, oldPrompt);
// 	}
// }

