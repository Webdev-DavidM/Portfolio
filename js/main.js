// This is a function which will poopulate the portfolio page from an external portfolio js file to make the html less verbose//

function populatePortfolio() {
  let portfolioContainer = document.querySelector('.portfolio-container');
  let portfolioCard = document.createElement('div');
  portfolio.map((project) => {
    console.log(project);
    let techText = project.keyTech
      .map((tech) => {
        return `<span>${tech}</span>`;
      })
      .join('');

    let keyFunctionality = project.keyFunctionality
      .map((end) => {
        let key = Object.keys(end);

        let list = end[key]
          .map((item) => `<li class='functionality-list'>${item}</li>`)
          .join('');

        return `<h6 class='end' >${key[0]}</h6>
        <ul class='functionality-ul'>
        ${list}
        </ul>
        `;
      })
      .join('');

    let techIcons = project.keyTech
      .map((tech) => {
        return `<li>
        <img
          src='./images/svg-icons/${tech}.svg'
          alt=''
          width='100%'
          height='100%'
        />
      </li>`;
      })
      .join('');

    portfolioContainer.innerHTML += ` <hr />
    <p id="${project.name.split(' ')[0]}" class="title">${project.name}</p>
    <p class="portfolio-description">
${project.description}
    </p>
    <div class="portfolio-image-container">
      <div class="flex-column-images">
        <img
          id="image1"
          src=${project.images[0]}
          alt=${project.name}
        />
        <img
          id="image2"
          src=${project.images[1]}
          alt=${project.name}
        />
      </div>
      <div class="flex-main-image">
        <img
          id="image3"
          src=${project.images[2]}
          alt=${project.name}
        />
      </div>
    </div>
    <div class="btn-container btn-portfolio">
      <div class="github-btn"><a  href=${
        project.gitHubLink
      }>Code on github</a></div>
      <div class="website-btn"><a  href=${
        project.websiteLink
      }>View website</a></div>
    </div>
    <div class="technologies-desktop">
      <ul>
        <h6 class='tech-title'>Technology:</h6>
      ${techIcons}
      </ul>
      <div class="tech title">
        ${techText}
      </div>
    </div>
    <h5 class='functionality'>Key functionality</h5>
    ${keyFunctionality}
`;
  });

  // As I have used dynamically when the portfolio page loads ti looks for the portfolio
  // id but it has not been generated yet, so therefore I have used this short script below
  // to resolve this.
  let projectName = document.getElementById(location.hash.split('#')[1]);
  if (projectName) {
    projectName.scrollIntoView(true);
  }
}

// This code makes the side menu appear on mobiles

let burger = document.querySelector('.burger-menu');

burger.addEventListener('click', (e) => {
  document
    .getElementsByClassName('side-menu')[0]
    .classList.add('mobile-side-appear');
});

let sidemenuClose = document.querySelector('.cross-btn');
sidemenuClose.addEventListener('click', () => {
  console.log('clicked');
  document
    .getElementsByClassName('side-menu')[0]
    .classList.remove('mobile-side-appear');
});

// Here I will grab data about my projects from another file and iterate over it to create html cards on the home page. This is the html code doesnt become too blotted

let projectsHTML = document.createElement('div');

data.map((project) => {
  projectsHTML.innerHTML += `
  <div class="project-card">
  <div class="image-container">
  <a href="./portfolio.html#${project.name.split(' ')[0]}">    <img src=${
    project.image
  } alt="" /></a>

  </div>
  <span class="project-link">
    <a href="./portfolio.html#${project.name.split(' ')[0]}">${
    project.name
  }</a></span
  >

  <div class="link-to-project"></div>
  <p>
   ${project.description}
  </p>
  <div class="btn-container">
  <div class="github-btn"><a  href=${
    project.gitHubLink
  }>Code on github</a></div>
  <div class="website-btn"><a  href=${
    project.websiteLink
  }>View website</a></div>
</div>
  </div>
  
  `;
});

let card = document.getElementById('card-container');

if (card) {
  card.appendChild(projectsHTML);
}
