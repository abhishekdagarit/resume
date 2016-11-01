var name = "Abhishek";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);


var bio = {
	"name" : "Abhishek Dagar",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : " 9999-783-204",
		"email" : " abhishekdagarit@gmail.com",
		"github" : " abhishekdagarit",
		"twitter" : " 1mabhi",
		"location" : " New Delhi",
	},
	"welcomeMessage" : "Life is awesome, if you are a web-developer.",
	"skills" : ["Awesomeness", "Package Managers ....................... Bower", "Sublime Extensions ....................... Emmet", "Version Control ....................... Git", 
	"HTML", "CSS", "JavaScript", "Syntatically awesome stylesheet plugin ....................... SASS", 
	"Complete Frameworks ....................... Bootstrap", "JavaScript Frameworks ....................... Angular.Js", 
	"Databases ....................... MongoDB", "Deployment using Github, Heroku and Azure"],
	"bioPic" : "images/cv.jpg"
}

var fomrattedContact = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(fomrattedContact);
fomrattedContact = HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").append(fomrattedContact);
fomrattedContact = HTMLtwitter.replace("%data%",bio.contacts.twitter);
$("#topContacts").append(fomrattedContact);
fomrattedContact = HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(fomrattedContact);
fomrattedContact = HTMLlocation.replace("%data%",bio.contacts.location);
$("#topContacts").append(fomrattedContact);

fomrattedContact = HTMLbioPic.replace("%data%",bio.bioPic);
$("#topContacts").prepend(fomrattedContact);


//console.log(bio.skills[0]);
var formattedSkills = (bio.skills[0]);
$("#header").append(HTMLskillsStart);

var i = 0;
var formattedSkill = "Awesomeness";
while(i<bio.skills.length) {
	formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	i = i+1;
	$("#header").append(formattedSkill);
}

$("#header").append(HTMLworkStart);

var work = {
	"employer" : "Self Employed",
	"workTitle" : "Freelancer",
	"workDates" : "Currently Employed",
	"workLocation" : "New Delhi, India", 
	"workDescription" : "I create awesome websites from the simple and boring pdf's or psd's. I love what I do and I plan on putting my 100% in every project that I do."
}

var formattedWork = HTMLworkEmployer.replace("%data%",work.employer);
$("#workExperience").append(formattedWork);
formattedWork = HTMLworkTitle.replace("%data%",work.workTitle);
$("#workExperience").append(formattedWork);
formattedWork = HTMLworkDates.replace("%data%",work.workDates);
$("#workExperience").append(formattedWork);
formattedWork = HTMLworkLocation.replace("%data%",work.workLocation);
$("#workExperience").append(formattedWork);
formattedWork = HTMLworkDescription.replace("%data%",work.workDescription);
$("#workExperience").append(formattedWork);


$("#header").append(HTMLprojectStart);

//first project

var formattedProject = HTMLprojectTitle.replace("%data%", "CV rendered entirely using JavaScript");
$("#projects").append(formattedProject);
formattedProject = HTMLprojectDates.replace("%data%", "2017");
$("#projects").append(formattedProject);
formattedProject = HTMLprojectDescription.replace("%data%", "My CV is rendered entirely using JavaScript. Instead of using the traditional approach, I have made the CV is using a JavaScript template. The template approach makes it easy to extend and add more robustness. Also, its more fun that way.")
$("#projects").append(formattedProject);
formattedProject = HTMLprojectImage.replace("%data%", "images/projects/resume.jpg");
$("#projects").append(formattedProject);

//second project
var formattedProject = HTMLprojectTitle.replace("%data%", "Portfolio using Bootstrap");
$("#projects").append(formattedProject);
formattedProject = HTMLprojectDates.replace("%data%", "2017");
$("#projects").append(formattedProject);
formattedProject = HTMLprojectDescription.replace("%data%", "My portfolio has all the latest features of Bootstrap and its a sleek cross-broowser and responsive awesome piece of art. Its got images moving around, a google map integration, a full width background video, a contract and forms and a lot more.")
$("#projects").append(formattedProject);
formattedProject = HTMLprojectImage.replace("%data%", "images/projects/portfolio.jpg");
$("#projects").append(formattedProject);


$("#header").append(HTMLschoolStart);

// post-graduation  

var fomrattedSchool = HTMLschoolName.replace("%data%", "University of Surrey");
$("#education").append(fomrattedSchool);
fomrattedSchool = HTMLschoolDegree.replace("%data%", "MSc. in Computer Security Technologies and Applications");
$("#education").append(fomrattedSchool);
fomrattedSchool = HTMLschoolDates.replace("%data%", "2012-2013");
$("#education").append(fomrattedSchool);
fomrattedSchool = HTMLschoolLocation.replace("%data%", "United Kingdom");
$("#education").append(fomrattedSchool);

// graduation

fomrattedSchool = HTMLschoolName.replace("%data%", "Punjab Technical University");
$("#education").append(fomrattedSchool);
fomrattedSchool = HTMLschoolDegree.replace("%data%", "Bachelor of Computer Technologies");
$("#education").append(fomrattedSchool);
fomrattedSchool = HTMLschoolDates.replace("%data%", "2003-2009");
$("#education").append(fomrattedSchool);
fomrattedSchool = HTMLschoolLocation.replace("%data%", "Punjab, India");
$("#education").append(fomrattedSchool);

//Online classes

var formattedclasses = HTMLonlineTitle.replace("%data%", "Intro to jQuery - Udacity");
$("#classes").append(formattedclasses);
formattedclasses = HTMLonlineDates.replace("%data%", "October 2017");
$("#classes").append(formattedclasses);
formattedclasses = HTMLonlineSchool.replace("%data%", "Udacity");
$("#classes").append(formattedclasses);

formattedclasses = HTMLonlineTitle.replace("%data%", "JavaScript Basics - Udacity");
$("#classes").append(formattedclasses);
formattedclasses = HTMLonlineDates.replace("%data%", "October 2017");
$("#classes").append(formattedclasses);
formattedclasses = HTMLonlineSchool.replace("%data%", "Udacity");
$("#classes").append(formattedclasses);

formattedclasses = HTMLonlineTitle.replace("%data%", "How to use Git and Github - Udacity");
$("#classes").append(formattedclasses);
formattedclasses = HTMLonlineDates.replace("%data%", "September 2017");
$("#classes").append(formattedclasses);
formattedclasses = HTMLonlineSchool.replace("%data%", "Udacity");
$("#classes").append(formattedclasses);

formattedclasses = HTMLonlineTitle.replace("%data%", "Learn Backbone.Js - Udacity");
$("#classes").append(formattedclasses);
formattedclasses = HTMLonlineDates.replace("%data%", "October 2017");
$("#classes").append(formattedclasses);
formattedclasses = HTMLonlineSchool.replace("%data%", "Udacity");
$("#classes").append(formattedclasses);

formattedclasses = HTMLonlineTitle.replace("%data%", "Intro to HTML and CSS - Udacity");
$("#classes").append(formattedclasses);
formattedclasses = HTMLonlineDates.replace("%data%", "September 2017");
$("#classes").append(formattedclasses);
formattedclasses = HTMLonlineSchool.replace("%data%", "Udacity");
$("#classes").append(formattedclasses);

formattedclasses = HTMLonlineTitle.replace("%data%", "Web Development");
$("#classes").append(formattedclasses);
formattedclasses = HTMLonlineDates.replace("%data%", "October 2017");
$("#classes").append(formattedclasses);
formattedclasses = HTMLonlineSchool.replace("%data%", "Udacity");
$("#classes").append(formattedclasses);

formattedclasses = HTMLonlineTitle.replace("%data%", "Responsive Images");
$("#classes").append(formattedclasses);
formattedclasses = HTMLonlineDates.replace("%data%", "October 2017");
$("#classes").append(formattedclasses);
formattedclasses = HTMLonlineSchool.replace("%data%", "Udacity");
$("#classes").append(formattedclasses);

formattedclasses = HTMLonlineTitle.replace("%data%", "JavaScript Design Patterns");
$("#classes").append(formattedclasses);
formattedclasses = HTMLonlineDates.replace("%data%", "October 2017");
$("#classes").append(formattedclasses);
formattedclasses = HTMLonlineSchool.replace("%data%", "Udacity");
$("#classes").append(formattedclasses);

formattedclasses = HTMLonlineTitle.replace("%data%", "Intro to AJAX");
$("#classes").append(formattedclasses);
formattedclasses = HTMLonlineDates.replace("%data%", "October 2017");
$("#classes").append(formattedclasses);
formattedclasses = HTMLonlineSchool.replace("%data%", "Udacity");
$("#classes").append(formattedclasses);

formattedclasses = HTMLonlineTitle.replace("%data%", "HTML5 Canvas");
$("#classes").append(formattedclasses);
formattedclasses = HTMLonlineDates.replace("%data%", "October 2017");
$("#classes").append(formattedclasses);
formattedclasses = HTMLonlineSchool.replace("%data%", "Udacity");
$("#classes").append(formattedclasses);

formattedclasses = HTMLonlineTitle.replace("%data%", "Linux Command Line Basics");
$("#classes").append(formattedclasses);
formattedclasses = HTMLonlineDates.replace("%data%", "October 2017");
$("#classes").append(formattedclasses);
formattedclasses = HTMLonlineSchool.replace("%data%", "Udacity");
$("#classes").append(formattedclasses);

formattedclasses = HTMLonlineTitle.replace("%data%", "Frontend Frameworks");
$("#classes").append(formattedclasses);
formattedclasses = HTMLonlineDates.replace("%data%", "October 2017");
$("#classes").append(formattedclasses);
formattedclasses = HTMLonlineSchool.replace("%data%", "Udacity");
$("#classes").append(formattedclasses);


$("#header").append(googleMap);























