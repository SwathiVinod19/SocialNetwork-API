 <a href="">[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)</a>
  <a href="">[![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://nodejs.org/en)</a>
  <a href="">[![MongoDB Badge](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=flat)](https://www.mongodb.com/)</a>
  <a href="">[![Mongoose Badge](https://img.shields.io/badge/Mongoose-800?logo=mongoose&logoColor=fff&style=flat)](https://mongoosejs.com/)</a>
  <a href="">[![Express Badge](https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat)](https://expressjs.com/)</a>
  <a href="">[![Nodemon Badge](https://img.shields.io/badge/Nodemon-76D04B?logo=nodemon&logoColor=fff&style=flat)](https://nodemon.io/)</a>
  <a href="">[![Insomnia Badge](https://img.shields.io/badge/Insomnia-4000BF?logo=insomnia&logoColor=fff&style=flat)](https://insomnia.rest/)</a>
  <a href="https://github.com/SwathiVinod19">[![GitHub Badge](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=fff&style=flat)](https://github.com/SwathiVinod19)</a>


# SocialNetwork-API
 An API for social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This application uses Express.js for routing, a MongoDB database, and the Mongoose ODM along with Javascript.

## Description
SocialNetwork-API is an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. This backend application uses Express.js for routing, a MongoDB database, and the Mongoose ODM. Additionally, [Moment.js](https://momentjs.com/) is used to format dates and [Faker-js](https://www.npmjs.com/package/@faker-js/faker) is used to seed mock users and thoughts in the database.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Links](#Links)
* [License](#license)
* [Contributing](#contributing)
* [Contact](#contact)

## Installation
* Check if you have Node.js installed by typing `node -v` in your terminal. If node is not installed, visit the node.js website and install it. 
* Next, clone this project repository to your local machine. 
* Use the command `npm i` to install all the dependencies. 
* Seed database with random mock data via [Faker-js](https://www.npmjs.com/package/@faker-js/faker) using command `npm run seed`.
  
## Usage
* Start server with command `npm start`.
* Alternatively, start server with Nodemon (and restart server automatically when making changes to code) with command `npm run dev`.
* Access API routes with Insomnia, Postman, or other REST API testing client.

`` GET routes``
<br>

`` GET All Users -> /api/users`` <br>
`` GET All Thoughts  -> /api/thoughts `` <br>
`` GET Single User  -> /api/users/:userId  ``<br>
`` GET Single Thought -> /api/users/:thoughtId ``<br>


``POST (Create) routes ``
<br>

`` POST User -> /api/users ``<br>
`` POST Thought -> /api/thoughts ``<br>
`` POST Reaction -> /api/thoughts/:thoughtId/reactions ``<br>
`` POST friend -> /api/users/:userId/friends/:friendId ``<br>


``PUT (Update) routes``
<br>

`` PUT User -> /api/users/:userId  ``<br>
`` PUT Thought -> /api/thoughts/:thoughtId ``

## Links

Walkthrough video link : https://drive.google.com/file/d/15QQ0wuYNvg27nnoPDhiT6DLtL3RUzK1T/view
<br>
Github link: https://github.com/SwathiVinod19
<br>
Repository link: https://github.com/SwathiVinod19/SocialNetwork-API


## License

[MIT License](https://opensource.org/licenses/MIT) <a href="">[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)</a>

## Contributing

This application was created as part of University of Toronto Bootcamp. I am open to contributions. 

## Contact

* [Email](swathi.vinod@gmail.com)
* [GitHub](https://github.com/SwathiVinod19/)
