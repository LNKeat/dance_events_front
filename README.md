# Dance Events Front End
A single page web application to help track dance events for future planning. A user can add and remove dance events to their list. They easily see, by color coding, the expense rating for each dance event in order to budget accordingly. Dance events can be searched by location and by expense rating.  

# Dance Events Back End
A database with two tables: events and locations.  There are routes to create and read data for both tables. The events table has full CRUD capabilitities. 

# Motivation
When it comes to hobbies, tracking the details and budget for festivities should be simple. Building a single page application to display event details (such as location, date and whether it's affordable) seemed like a great way to practice building a full stack application.


## In the front end project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run server`

Runs the app in the development mode using a db.json file for a mock back-end
Open [http://localhost:5000](http://localhost:5000) to start the server.  You'll have to update the links in the application from localhost:9292 to localhost:5000 to do this and skip using the database. 

## In the back end project directory, you can run:
### `migrate`
Use ```rake db:migrate``` in the command line to make sure all of the migrations are up to date.
### `seed`
Use ```rake db:seed:replant``` to refresh all the data in the database and replace it with the preset data examples.
### `start the server`
Start up the server on your local host port 9292 by typing ```rake server``` in the command line. 





## Open source illustrations graciously shared by: 
[https://undraw.co](https://undraw.co)


## Application Build Process
You can learn more about my process building this application in my blog: [https://laurakeatdev.medium.com/](https://laurakeatdev.medium.com/)

