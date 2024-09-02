Sprint_8_front: Barcelona Marathon Angular 17 Project


## Getting Started:

1. Clone the repository: 
    https://github.com/fran-cesc/Sprint_8_improCode_front.git

2. Install node packages: 
    npm install

3. Clone .env.template and rename to .env in the root directory

4. Fill environment var (your mapbox key)

5. Create angular environments ('node ./scripts/set-envs.js') and start server (ng serve):

    npm start

6. Start Sprint_8_back

# Sprint 8 front: Barcelona Marathon

This repository contains the frontend files for the (fake) Barcelona Marathon app which consists in a CRUD of runners, a map, a calendar and a graph.
It is made with Angular v.17.0.0 and Bootstrap v.5.3.
The frontend app interacts with the backend API [Sprint_8_improCode_back](https://github.com/fran-cesc/Sprint_8_improCode_back)


## Features:

* CRUD runners from the event with Node.js and Express.
* Info map with  [Mapbox](https://www.mapbox.com/).
* Data graph with [Chart.js](https://www.chartjs.org/).
* [Calendar](https://fullcalendar.io/) with some events.

## Installation:

1. Clone repository:

    ```bash
    git clone https://github.com/fran-cesc/Sprint_8_improCode_front.git
    
    ```
2. Enter the directory:

    ```bash
    cd Sprint_8_improCode_front
    ```

3. Install node packages:
  
    ```bash
    npm install
    ```

4. Rename .env.template to .env and add your mapbox key.

5. Start [Sprint_8_improCode_back](https://github.com/fran-cesc/Sprint_8_improCode_back).

6. Run the application with:

    ```bash
    npm start
    ```


