<p align="center">
  <img src="misc\img\transparent-banner.png" width="60%" />
</p>

<br>

Read this in other languages: [Portuguese](https://github.com/leoronne/whats-my-path/blob/master/README.md).

<br>

##

<p align="center">
  <a href="#project-star2">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#techs-rocket">Techs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#general-information-and-functionalities-information_source">General Information</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#installation-wrench">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#start-on">Start</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#test-heavy_check_mark">Test</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license-memo">License</a>
</p>

##

<br>

<p align="center">
  <img src="misc\img\banner.png"/>
</p>

<br>

## Project :star2:

This repo contains a [front-end challenge](https://github.com/iclinic/challenge-front) proposed by iClinic.

The purpose of the application is to show the user which side of the Force he's on and who's his master, based on the response time of two SWAPI (a Star Wars API) requests - the determinant here is which request responds first.

There are two options for alignment/master:
-> Light, the master will be Luke Skywalker;
-> Dark, the master will be Darth Vader.

<br>

Deployed [here](https://whatsmypath.ronne.dev).

<br>

## Techs :rocket:

- [x] [ReactJS](https://reactjs.org);
- [x] [Node.js](https://nodejs.org/);
- [x] [TypeScript](https://www.typescriptlang.org/);
- [x] [Styled Components](https://styled-components.com/).

<br>

## General Information and Functionalities :information_source:

As explained above, the alignment/master is defined by which request is completed first, to achieve this it was used  [Promise.race()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/race). The service that is responsible for these requests has been separated into the `src/services` folder, to individualize its responsibility and facilitate unit testing.

To determine the alignment of the user, it was implemented a rule that compares the response URL of `Promise.race`, since in the endpoint that returns the master's data there is no property indicating its alignment (side of the Force). The alignment is used within the application to define the UI of the screens (colors, in particular) instead of directly using the name of the master.

The alignment/master data are inside the `usePeople` hook, in order to share the data between the components that use them, as well as the function that calls the `define-master` service.

While the application makes the requests, the buttons are disabled and the inner text is replaced by a spinner to improve the user experience, it's also presented a notification that indicates to the user which alignment he's part of or if there is any error in the process.

On the [page](https://github.com/leoronne/whats-my-path/blob/master/src/pages/Master/index.tsx) that shows which is the user's master, there is a rule that redirects him to the home page if he has not started the process through the home page. This was implemented to prevent the user from directly accessing the `/master` route and to make the process always starts from the home page, via the "Start" button (eliminating the need for a `useEffect` every time the user accesses the route, either by reloading the page or accessing it directly).

However, the user can define his alignment/master again by clicking the `choose your path again, Padawan` button, as requested in the challenge description.

An additional page was implemented if the user tries to access a non-existent route, it shows that the page trying to be accessed doesn't exist and contains a link that redirects the user to the home page.

<br>

<p align="center">
  <img src="misc\img\project-1.gif"/>
</p>

<br>

<p align="center">
  <img src="misc\img\project-2.gif"/>
</p>

<br>

## Installation :wrench:

First you need to clone the project using `git clone https://github.com/leoronne/whats-my-path.git`.

Then you can install the application's dependencies using `yarn` on the root directory.

<br>

## Start :on:

To start the application just run `yarn start` on the root dir of the folder.

<strong>Note: you need to create a .env file on the root dir of the project based on the [example](https://github.com/leoronne/whats-my-path/blob/master/.env.example).</strong>

<br>

## Test :heavy_check_mark:

To run the tests on this application, just run `yarn test` on the root directory. Or if you want to generate the coverage report, just run `yarn test:cover`.

<br>

## License :memo:

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](https://github.com/leoronne/whats-my-path/blob/master/LICENSE)**
- Copyright 2021 © <a href="https://github.com/leoronne" target="_blank">Leonardo Ronne</a>.

##
