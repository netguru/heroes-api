[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/netguru/heroes-api">
    <img src="https://raw.githubusercontent.com/netguru/heroes-api/master/static/batman.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Heroes API</h3>

  <p align="center">
A backend application built with Prisma, Docker and NestJS
    <br />
    <a href="https://github.com/netguru/heroes-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/netguru/heroes-api/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Documentation](#documentation)
  - [Initial setup](#initial-setup)
  - [Running the project](#running-the-project)
    - [For REST API](#for-rest-api)
    - [For GraphQL](#for-graphql)
    - [Important](#important)
- [Authors](#authors)
- [License](#license)

## Built With

This application was built with:

- [Prisma](https://www.prisma.io/)
- [Node.js](https://node.js.org/)
- [Docker](https://www.docker.com/)

<!-- GETTING STARTED -->

## Getting Started

Before you start, make sure you have [Docker](https://docs.docker.com/install/) and [Node](https://nodejs.org/en/) installed on your local machine.

### Documentation

Documentation can be found, after initial setup, for HTTP in [Swagger](http://localhost:3000/swagger/#/), for GraphQL in [GraphQL Playground](http://localhost:3000/graphql).

### Initial setup

1. Clone this repo into your local machine

- with **https** </br>
  `git clone https://github.com/netguru/heroes-api.git`
- or with **ssh** </br>
  `git clone git@github.com:netguru/heroes-api.git`

2. Launch Docker compose to run Prisma's and MySQL's images.
   `docker compose up -d`

3. Open API container's terminal
   `docker compose exec api /bin/sh`

4. Deploy database schema into the MySQL database.
   `npx prisma db push`

5. Seed the database with default data.
   `npx prisma db seed`

### Running the project

After the initial setup there's no additional work needed, project is running in the background as a Docker container.

- The API is available on your local machine on `http://localhost:3000`.
- Swagger documentation is available on `http://localhost:3000/swagger/`.
- GraphQL playground is available on `http://localhost:3000/graphql`.

You can stop it by executing `docker compose stop`, and you can resume it by `docker compose start`


<!-- Authors -->

## Authors

1. <a href="https://github.com/serrg" target="_blank">Sergiusz Strumiński</a>
2. <a href="https://github.com/jog1t" target="_blank">Kacper Wojciechowski</a>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/netguru/heroes-api/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/netguru/heroes-api
[forks-url]: https://github.com/netguru/heroes-api/network/members
[stars-shield]: https://img.shields.io/github/stars/netguru/heroes-api
[stars-url]: https://github.com/netguru/heroes-api/stargazers
[issues-shield]: https://img.shields.io/github/issues/netguru/heroes-api
[issues-url]: https://github.com/netguru/heroes-api/issues
[license-shield]: https://img.shields.io/github/license/netguru/heroes-api
[license-url]: https://github.com/netguru/heroes-api/blob/master/LICENSE.txt
[product-screenshot]: images/screenshot.png
