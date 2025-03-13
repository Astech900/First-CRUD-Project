Simple Express.js Blogging App Using CRUD operation

Overview : 
This is a simple blogging application built using Express.js and EJS. Users can create, edit, view, and delete posts. Each post contains a username and content, and the app manages posts dynamically using an in-memory array.

Features
* Create new posts
* Display all posts
* View a single post
* Edit an existing post
* Delete a post
* RESTful routes with method-override for PATCH and DELETE requests
* Simple UI using EJS templates


Tech Stack
* Backend: Node.js, Express.js
* Frontend: EJS, HTML, CSS
* UUID: Generates unique IDs for each post
* Middleware: method-override, express.urlencoded, express.json
* Installation

* 
* Install dependencies:
* sh
* Copy
* Edit
* npm install
* Start the server:
* sh
* Copy
* Edit
* node index.js
* Open your browser and go to http://localhost:8080
* Routes
* Route	Method	Description


* /	GET	Root route
* /display	GET	Display all posts
* /posts	GET	Show the post creation form
* /posts	POST	Create a new post
* /posts/single/:id	GET	View a single post
* /posts/edit/:id	GET	Show edit form
* /posts/edit/:id	PATCH	Update a post
* /posts/delete/:id	GET	Show delete confirmation
* /posts/delete/:id	DELETE	Delete a post
*	GET	Error route for invalid URLs



Happy Codding!
