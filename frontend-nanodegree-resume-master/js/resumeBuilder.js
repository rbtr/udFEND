var bio = {
    "name": "Evan",
    "role": "Developer",
    "biopic": "",
    "welcomeMessage": "Have a look at my experience!",
    "skills": [
        "Web Development",
        "Design"
        ],
    "contacts": {
        "mobile": "555-555-5555",
        "github": "athingunique",
        "stackoverflow": "athingunique",
        "location": "Philadelphia, PA",
        "email": "ebaker8@u.rochester.edu"
    }
};

var work = {
    "jobs": [
        {
            "employer": "New Hudson Façades",
            "title": "Mechanical Engineer",
            "location": "Linwood, PA",
            "dates": "Jun 2015 - Current"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "JavaScript Resume",
            "dates": "Ongoing",
            "description": "Creating an online resume with HTML, CSS and JavaScript.",
            "images": [
                ""
            ]
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "University of Rochester",
            "dates": "2011-2015",
            "location": "Rochester, NY",
            "url": "http://rochester.edu",
            "majors": [
                "Mechanical Engineering"
            ]
        }
    ],
    "onlineCourses": [
        {
            "title": "Front End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "Jul 2016 - Ongoing",
            "url": "http://udacity.com"
        }
    ]
};

$("#header").append(HTMLheaderName.replace("%data%", bio.name));

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (i in bio.skills) {
        $("#header").append(HTMLskills.replace("%data%", bio.skills[i]));
        console.log(i);
    }
};

for (i in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    $("#workExperience").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer));
    $("#workExperience").append(HTMLworkTitle.replace("%data%", work.jobs[i].title));
    $(".work-entry:last").append(work.jobs[i].employer + " " + work.jobs[i].title);
};
