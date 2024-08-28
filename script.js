const features = 
[
  { 
    headline: "Comprehensive Time Management", 
    body: "This tool redefines how you manage your time and tasks efficiently." 
  },
  { 
    headline: "Beyond Scheduling", 
    body: "Transform your workflow with an all-in-one solution for task organization." 
  },
  { 
    headline: "Ultimate Task Manager", 
    body: "Say goodbye to scattered schedules and hello to a streamlined system." 
  },
  { 
    headline: "More Than Calendars", 
    body: "This platform offers seamless integration with your daily planning needs." 
  },
  { 
    headline: "Complete Task Manager", 
    body: "It helps you stay on top of your goals, deadlines, and daily priorities." 
  },
  { 
    headline: "Powerful Productivity Tool", 
    body: "Enhance your productivity with advanced task management features." 
  },
  { 
    headline: "Beyond Scheduling Apps", 
    body: "This tool goes the extra mile by integrating project tracking and reminders." 
  },
  { 
    headline: "Time and Tasks", 
    body: "It’s not just about scheduling; it's about simplifying your entire workflow." 
  },
  { 
    headline: "Scheduling to Projects", 
    body: "Take control of your projects and deadlines all in one place." 
  },
  { 
    headline: "Manage Your Day", 
    body: "This tool turns chaos into order with its intuitive task management." 
  },
  { 
    headline: "Future of Scheduling", 
    body: "With this tool, scheduling is only the beginning of what you can achieve." 
  },
  { 
    headline: "Effortless Task Management", 
    body: "Stay on top of everything with integrated task lists and reminders." 
  },
  { 
    headline: "Redefine Scheduling", 
    body: "This tool is designed to keep you organized and efficient throughout your day." 
  },
  { 
    headline: "New Era Organization", 
    body: "This solution brings you task tracking and time management features in one." 
  },
  { 
    headline: "Task and Scheduling", 
    body: "From meetings to deadlines, everything is handled with precision." 
  },
  { 
    headline: "Beyond Meetings", 
    body: "Manage your tasks, projects, and priorities with ease." 
  },
  { 
    headline: "Organize Everything", 
    body: "This tool offers a comprehensive approach to time and project management." 
  },
  { 
    headline: "All-in-One Productivity", 
    body: "It's more than just a calendar; it's a powerful productivity enhancer." 
  },
  { 
    headline: "Full-Service Scheduling", 
    body: "Go beyond traditional scheduling with features that optimize your workflow." 
  },
  { 
    headline: "Do More", 
    body: "From time management to task prioritization, this tool does it all." 
  }
]

// CODE FOR BENEFITS-CONTENT.HTML FEATURE CARDS

function addEntry() {
  const cardElement = document.getElementById("featCard");
  cardElement.innerHTML = ""; 

  for (let i = 0; i < features.length; i++) {
    let cardItem = `
    <div class="benefits__card">    
      <div class="benefits__text-group col width-100 pr-1">
          <p class="benefits__text-number mt-0"></p>
          <h3 class="benefits__text-title no-margin">${features[i].headline}</h3>
          <p class="benefits__text no-margin">
              ${features[i].body}
          </p>
      </div>
      </div>  `;
    cardElement.innerHTML += cardItem;
  }
}

addEntry();
  
// REVIEW AND MODIFY FOR LATER: INITIAL CODE FOR APPOINMENT SLIDER

let slideIndex = 1;
moveSlides(slideIndex);

// Next/previous controls
function incSlides(n) {
  moveSlides(slideIndex += n);
}

function decSlides(n) {
  moveSlides(slideIndex -= n);
}

// Thumbnail image controls
function currentSlide(n) {
  moveSlides(slideIndex = n);
}

function moveSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
}
