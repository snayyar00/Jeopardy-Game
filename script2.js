
function getUrlVars()
{

let params  =new URLSearchParams(location.search);

 let query = {
   category: params.get('category'),
   value: params.get('value')
 }

 return query
}

var categories = {

	 a:"Advanced CSS",
	 b:"JS & jQuery",
	 c:"PHP and Forms",
	 d:"SQL",
	 e:"WordPress"

}

// CLUES
var clueA = {
	100: "This display property can be used to convert a container into a CSS Grid.",
	200: "This selector can be used to select an anchor tag that has a particular substring within its href attribute.",
	300: "This CSS rule allows you to create animations that loop continuously.",
	400: "This parameter of the transition property can be used to make sure two different transitions, applied to different properties, do not play at the same time.",
	500: "This function, used in the value for the grid-template-columns property, can simplify your code if you intend to have multiple identical columns in your layout."
};

var ansA = {
	100: "what is display:grid?",
	200: "What is the the a[href*=''] selector.",
	300: "What is the @keyframes? rule?",
	400: "What is delay? Example: transition: height .5s, color 1s .5s (second number is delay)",
	500: "What is repeat()?"
};

var clueB = {
	100: "This jQuery method can be used to toggle a class on the selected element.",
	200: "Within the keydown event handler, used to listen for the up and down arrow keys, this function can be used to prevent the page from scrolling.",
	300: "This jQuery function can be used to remove the aria-expanded attribute when toggling a menu.",
	400: "This jQuery function can be used to place an element inside a container element, after any other content that may already be inside.",
	500: "This keyword can be used to create a variable that is mutable but cannot be reassigned or redeclared."
};

var ansB = {
	100: "What is toggleClass()?",
	200: "What is event.preventDefault()?",
	300: "What is removeAttr()?",
	400: "What is append()?",
	500: "What is const?"
};

var clueC = {
	100: "This attribute of a form is used to specify a server side script to handle the form submission.",
	200: "This keyword must be used to access global variables within a function.",
	300: "This kind of form validation is always necessary, since it cannot be bipassed or disabled by the user.",
	400: "This PHP function can be used to import another PHP file, but only if that file has not already been imported; it will not cause an error if the target file doesn't exist.",
	500: "This PHP function is used to return data (either HTML or JSON) from a server-side script when using AJAX."
};

var ansC = {
	100: "What is action?",
	200: "What is global?",
	300: "What is server-side validation?",
	400: "include_once?",
	500: "What is echo?"
};

var clueD = {
	100: "This SQL command can be used to insert a new row into a table.",
	200: "This column in a table contains a unique identifier for each row.",
	300: "This XAMPP database management system has been designed as a drop in replacement for MySQL.",
	400: "This database technique can be used to sanitize user input to prevent SQL injection.",
	500: "This software design principle, implemented by databases, allows us to create applications that can be used for different purposes, by different organizations, without having to rewrite the software."
};

var ansD = {
	100: "What is INSERT INTO?",
	200: "What is the primary key?",
	300: "What is MariaDB?",
	400: "What is prepared statements?",
	500: "What is 'one should separate that which varies from that which stays the same'?"
};

var clueE = {
	100: "This is the name given to the control stucture in a WordPress template file that fetches the posts from the database.",
	200: "This WordPress function can be used within header.php to make it easier to target certain CSS styles to certain parts of the site.",
	300: "This file in a theme is essential for adding advanced functionality, as well as linking styles and scripts.",
	400: "This WordPress template file is used to generate a list of posts with a particular tag when tag.php does not exist.",
	500: "These are the only two files that are necessary for a WP theme to work."
};

var ansE = {
	100: "What is The Loop?",
	200: "what is body_class()?",
	300: "What is functions.php?",
	400: "What is archive.php?",
	500: "What are style.css and index.php."
};

var clues = {a:clueA, b:clueB, c:clueC, d:clueD, e:clueE};

var answers = {a:ansA, b:ansB, c:ansC, d:ansD, e:ansE};


$(function(){


	// GET URL STUFF
	var query = getUrlVars();

	// IF IS BOARD
	if ((window.location.href).includes("board.html"))
	{
		var i = 0;
		$(".cat-label").each(function(){

			$(this).text(categories[String.fromCharCode(97 + i)]);
			i++;

		});
	}
	else
	{
		// SET CLUE TEXT
		$(".clue p").text(clues[query['category']][query['value']]);
		// SET CATEGORY HEADING
		$(".clue h1").text(categories[query['category']]);
		// SET ANSWER LINK
		var link = "answer.html?category="+query['category']+"&value="+query['value'];

		$('.clue main a').attr('href', link);

		//SET ANSWER
		$(".answer p").text(answers[query['category']][query['value']]);
	}




;
});
