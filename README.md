This is a simple app using D3.js and angular to show/plot weather data across different
parts of the globe. It's been developed using D3.js and AngularJS. The data shown is fake i.e
simulated. Only time and latitude/longitude of different locations is real

Setup instructions:-


Install nodejs/npm package manager from http://nodejs.org
Pull the github code from this repo and run the below commands for build and npm tools setup



npm install
grunt default - this will run the default grunt tasks
grunt dev - this will create dev versions of the js and css files in dist/dev folder
grunt prod - this will create minified and uglified js and css files in dist/prod folder for
production deployment.



For running tests:-
Install and setup jasmine and karma using the below commands



npm install -g karma-cli
npm install karma jasmine karma-jasmine --save-dev
karma init - to create karma.conf.js (refer the karma.conf.js in the repo for resolving standard
library dependencies like angular jquery etc.)
Run test cases using the command:- karma start







To launch the app type the below link in browser if running locally


http://localhost:8080//weather-simulation/



Below is the demo hosted publically 

http://golibrary.co/weather-simulation/
