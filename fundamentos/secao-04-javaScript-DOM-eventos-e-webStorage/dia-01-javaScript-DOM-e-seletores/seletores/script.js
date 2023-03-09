const body = document.querySelector('#container');
const titleHeader = document.querySelector('#header-container');
const emergencyTasks = document.querySelectorAll('.emergency-tasks');
const noEmergencyTaks = document.querySelectorAll('.no-emergency-tasks');
const footer = document.querySelector('#footer-container');
const titlesEmergency = document.querySelectorAll('.emergency-tasks h3');
const titlesNoEmergency = document.querySelectorAll('.no-emergency-tasks h3');
// Funçoes - 
const addStyleTitles = (titles, color) => {
  for (let index = 0; index < titles.length; index += 1) {
    titles[index].style.backgroundColor = color;
  };
}

const modifierColorText = (title, color) => {
  for (let index = 0; index < title.length; index += 1) {
    title[index].style.color = color;
  }
}


body.style.backgroundColor = 'rgba(25, 174, 92, 1)';

titleHeader.style.backgroundColor = 'rgba(68, 75, 71, 1)';
// emergency tasks ---

emergencyTasks[0].style.backgroundColor = 'rgba(68, 75, 71, 1)';

addStyleTitles(titlesEmergency,'rgba(253, 49, 45, 0.76)')

// No emergency tasks ---

noEmergencyTaks[0].style.backgroundColor = 'rgba(68, 75, 71, 1)';

addStyleTitles(titlesNoEmergency, 'rgba(255, 255, 129, 1)')
modifierColorText(titlesNoEmergency , 'rgba(68, 75, 71, 1)')

// footer ---
footer.style.backgroundColor = 'rgba(68, 75, 71, 1)'


