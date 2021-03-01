const portfolio = [
  {
    name: 'E-commerce fitness store',
    description:
      'This site, my most recent and ambitous project to date brings together all my knowledge gained all over the last year. I am particularly proud of this project as I have created it from scratch  and shows I have moved beyond the Udemy tutorials and technical support from Treehouse and Udacity which were so important in my earlier progress as a developer. All challenges and issues I have faced I have resolved on my own ( with a little help from google! ). On this project I avoided bootstrap but created all the interfaces and animations using CSS only.  I think this has really solidified front-end design skills.  ',
    images: [
      './images/projects/My-e-commerce-store-product-page.png',
      './images/projects/My-e-commerce-store-shopping-basket.png',
      './images/projects/My-e-commerce-store.png',
    ],
    keyTech: [
      'CSS',
      'HTML5',
      'JavaScript',
      'React',
      'Redux',
      'Mongo',
      'Node',
      'Express',
    ],
    keyFunctionality: [
      {
        Frontend: [
          'Four product filters connected to redux to allow the user to filter products based on various criteria',
          'JWT tokens used to connect to the back-end and authenticate users',
          'A user can refresh the shopping cart screen and their product remains due to user information stored in local storage',
          'Reviews stored on the product in the mongoDB database give the product a rating, this can be expanded by clicking on the review section of the product page and it will show all the reviews',
          'If a user is signed in they can complete an order which will be sent to the database and they can see this on their account screen',
          'They can write a review for a product they have purchased and it will be visible on the product and alter its overall rating. If they have reviewed the product already the database will not allow this and an error message will be displayed',
          'The product page displays the amount of items in stock for that product including their size, and it stops the user from selecting products out of stock or more than available',
          'The window object calculates when the navbar has scrolled out of view and fades in a up arrow which takes them to the top of the page if clicked. This arrow fades out if they scroll up and the navbar is in view',
          'The user can make adjustments to their shopping basket including changing the amount or deleting an item. If they try and increase the amount beyond what is it stock they get an error',
          'NPM package CSS-Transition group has been used to fade in the menus and also reviews',
          'The user can use the search bar to search items in the site.',
        ],
      },
      {
        Backend: [
          'Authenticate the user with JWT tokens',
          'Hashes the user password using Bcrypt',
          'Various routes such as User, Orders and Products which provide user data',
        ],
      },
    ],
    gitHubLink: 'https://github.com/Webdev-DavidM/E-commerce-front-end',
    websiteLink: 'https://webdev-davidm.github.io/E-commerce-front-end/#/',
  },

  {
    name: 'Burger delivery service',
    description:
      'I created this full stack application using React. This was the first time that I have used Redux with a React application so it was a great learning experience for me. Originally I created the application using firebase on the back-end but I refactored it  and created a MongoDB database for the back-end with JWT user authentication. ',
    images: [
      './images/projects/burger-builder-image1.png',
      './images/projects/burger-builder-image2.png',
      './images/projects/burger-builder.png',
    ],
    keyTech: [
      'CSS',
      'HTML5',
      'JavaScript',
      'React',
      'Redux',
      'Mongo',
      'Node',
      'Express',
    ],
    gitHubLink:
      'https://github.com/Webdev-DavidM/Udemy-react-burger-app-with-redux',
    websiteLink:
      'https://webdev-davidm.github.io/Udemy-react-burger-app-with-redux/',
    keyFunctionality: [
      {
        Frontend: [
          'A user must sign into the application to purchase a burger',
          'The user will remain signed in for an 1 hour using JWT tokens and local storage',
          'They can add any number of ingredients to the burger using a graphical UI, the burger changes to show the ingredients added or removed using React prevState',
          'The user must fill out a form when they are ready to order, the form has user validation to make sure all information is provided',
          ' the user can view their orders once they have been sent to the server',
        ],
      },
      {
        Backend: [
          'Authenticate the user with JWT tokens',
          'Hashes the user password using Bcrypt',
          'The server uses User and Orders routes to provide information to the front end',
        ],
      },
    ],
  },
  {
    name: 'React calculator',
    description:
      'This calculator project was one of the final assignments for the freeCodeCamp front-end libraries certificate. I created this project with CSS grid. I originally created this project with vanilla JS and then refactored it in React. as React often batches state updates the use of prevState and e.persist were essential to make this application to work in react.',
    images: [
      './images/projects/project13-react-calculator-image1.png',
      './images/projects/project13-react-calculator-image2.png',
      './images/projects/project13-react-calculator.png',
    ],
    keyTech: ['CSS', 'HTML5', 'JavaScript', 'React'],
    keyFunctionality: [
      {
        Frontend: [
          'State is used to hold values for total, display and an array which is used to hold the operators and sums needed to calculated once = is pressed',
          'I have used a switch statement which decides what action is to take based on which button is pressed',
        ],
      },
      {
        Backend: ['N/A'],
      },
    ],
    gitHubLink: 'https://github.com/Webdev-DavidM/react-calculator',
    websiteLink: 'https://webdev-davidm.github.io/react-calculator/',
  },
  {
    name: 'Object oriented guessing game',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem animi at vitae ullam incidunt? Hic sed quibusdam fugiat ratione. Officia et, quo non aliquam praesentium deserunt temporibus recusandae impedit. Optio.Nemo debitis pariatur qui dicta neque esse eaque distinctio, veritatis saepe doloremque animi, error assumenda, blanditiis repudiandae harum cupiditate cumque voluptatum ratione dolore molestias mollitia. Voluptatibus sapiente similique dolorum laboriosam.',
    images: [
      './images/projects/OOP-won-screen.png',
      './images/projects/OOP-game-over-screen.png',
      './images/projects/project7-OOP-game.png',
    ],
    keyTech: ['CSS', 'HTML5', 'JavaScript'],
    keyFunctionality: [
      {
        Frontend: [
          'Four product filters connected to redux to allow the user to filter products based on various criteria',
          'JWT tokens used to connect to the back-end and authenticate users',
          'A user can refresh the shopping cart screen and their product remains due to user information stored in local storage',
          'Reviews stored on the product in the mongoDB database give the product a rating, this can be expanded by clicking on the review section of the product page and it will show all the reviews',
          'If a user is signed in they can complete an order which will be sent to the database and they can see this on their account screen',
          'They can write a review for a product they have purchased and it will be visible on the product and alter its overall rating. If they have reviewed the product already the database will not allow this and an error message will be displayed',
          'The product page displays the amount of items in stock for that product including their size, and it stops the user from selecting products out of stock or more than available',
          'The window object calculates when the navbar has scrolled out of view and fades in a up arrow which takes them to the top of the page if clicked. This arrow fades out if they scroll up and the navbar is in view',
          'The user can make adjustments to their shopping basket including changing the amount or deleting an item. If they try and increase the amount beyond what is it stock they get an error',
          'NPM package CSS-Transition group has been used to fade in the menus and also reviews',
          'The user can use the search bar to search items in the site.',
        ],
      },
      {
        Backend: [
          'Authenticate the user with JWT tokens',
          'Hashes the user password using Bcrypt',
          'Various routes such as User, Orders and Products which provide user data',
        ],
      },
    ],
    gitHubLink: 'https://github.com/Webdev-DavidM/THFS-OOP-game-show',
    websiteLink: 'https://webdev-davidm.github.io/THFS-OOP-game-show',
  },
  {
    name: 'Video player using the Youtube API',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem animi at vitae ullam incidunt? Hic sed quibusdam fugiat ratione. Officia et, quo non aliquam praesentium deserunt temporibus recusandae impedit. Optio.Nemo debitis pariatur qui dicta neque esse eaque distinctio, veritatis saepe doloremque animi, error assumenda, blanditiis repudiandae harum cupiditate cumque voluptatum ratione dolore molestias mollitia. Voluptatibus sapiente similique dolorum laboriosam.',
    images: [
      './images/projects/project15-youtube.png',
      './images/projects/youtube-app-image2.png',
      './images/projects/youtube-app-image3.png',
    ],
    keyTech: ['CSS', 'HTML5', 'JavaScript', 'React'],
    gitHubLink: 'https://github.com/Webdev-DavidM/React-hooks-youtube-gallery',
    websiteLink: 'https://webdev-davidm.github.io/React-hooks-youtube-gallery/',
    keyFunctionality: [
      {
        Frontend: [
          'Four product filters connected to redux to allow the user to filter products based on various criteria',
          'JWT tokens used to connect to the back-end and authenticate users',
          'A user can refresh the shopping cart screen and their product remains due to user information stored in local storage',
          'Reviews stored on the product in the mongoDB database give the product a rating, this can be expanded by clicking on the review section of the product page and it will show all the reviews',
          'If a user is signed in they can complete an order which will be sent to the database and they can see this on their account screen',
          'They can write a review for a product they have purchased and it will be visible on the product and alter its overall rating. If they have reviewed the product already the database will not allow this and an error message will be displayed',
          'The product page displays the amount of items in stock for that product including their size, and it stops the user from selecting products out of stock or more than available',
          'The window object calculates when the navbar has scrolled out of view and fades in a up arrow which takes them to the top of the page if clicked. This arrow fades out if they scroll up and the navbar is in view',
          'The user can make adjustments to their shopping basket including changing the amount or deleting an item. If they try and increase the amount beyond what is it stock they get an error',
          'NPM package CSS-Transition group has been used to fade in the menus and also reviews',
          'The user can use the search bar to search items in the site.',
        ],
      },
      {
        Backend: [
          'Authenticate the user with JWT tokens',
          'Hashes the user password using Bcrypt',
          'Various routes such as User, Orders and Products which provide user data',
        ],
      },
    ],
  },
  {
    name: 'Web dashboard',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem animi at vitae ullam incidunt? Hic sed quibusdam fugiat ratione. Officia et, quo non aliquam praesentium deserunt temporibus recusandae impedit. Optio.Nemo debitis pariatur qui dicta neque esse eaque distinctio, veritatis saepe doloremque animi, error assumenda, blanditiis repudiandae harum cupiditate cumque voluptatum ratione dolore molestias mollitia. Voluptatibus sapiente similique dolorum laboriosam.',
    images: [
      './images/projects/project4-dashboard-image1.png',
      './images/projects/project4-dashboard-image2.png',
      './images/projects/project4-dashboard.png',
    ],
    keyTech: ['CSS', 'HTML5', 'JavaScript'],
    gitHubLink:
      'https://github.com/Webdev-DavidM/TDFE-project7-web-app-dashboard',
    websiteLink:
      'https://webdev-davidm.github.io/TDFE-project7-web-app-dashboard/',
    keyFunctionality: [
      {
        Frontend: [
          'Four product filters connected to redux to allow the user to filter products based on various criteria',
          'JWT tokens used to connect to the back-end and authenticate users',
          'A user can refresh the shopping cart screen and their product remains due to user information stored in local storage',
          'Reviews stored on the product in the mongoDB database give the product a rating, this can be expanded by clicking on the review section of the product page and it will show all the reviews',
          'If a user is signed in they can complete an order which will be sent to the database and they can see this on their account screen',
          'They can write a review for a product they have purchased and it will be visible on the product and alter its overall rating. If they have reviewed the product already the database will not allow this and an error message will be displayed',
          'The product page displays the amount of items in stock for that product including their size, and it stops the user from selecting products out of stock or more than available',
          'The window object calculates when the navbar has scrolled out of view and fades in a up arrow which takes them to the top of the page if clicked. This arrow fades out if they scroll up and the navbar is in view',
          'The user can make adjustments to their shopping basket including changing the amount or deleting an item. If they try and increase the amount beyond what is it stock they get an error',
          'NPM package CSS-Transition group has been used to fade in the menus and also reviews',
          'The user can use the search bar to search items in the site.',
        ],
      },
      {
        Backend: [
          'Authenticate the user with JWT tokens',
          'Hashes the user password using Bcrypt',
          'Various routes such as User, Orders and Products which provide user data',
        ],
      },
    ],
  },
];
