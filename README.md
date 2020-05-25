[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/netguru/heroes-api">
    <img src="https://raw.githubusercontent.com/netguru/heroes-api/master/assets/batman.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Heroes API</h3>

  <p align="center">
A backend appliaction built with Prisma, Docker and Node.js
    <br />
    <a href="https://github.com/netguru/heroes-api/wiki"><strong>Explore the docs »</strong></a>
    <br />
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

### Initial setup

1. Clone this repo into your local machine

- with **https** </br>
  `git clone https://github.com/netguru/heroes-api.git`
- or with **ssh** </br>
  `git clone git@github.com:netguru/heroes-api.git`

2. Launch Docker compose to run Prisma's and MySQL's images.
   `docker-compose up -d`

3. Install all the dependencies.
   `npm install`

4. Generate prisma instance based on datamodel.
   `npm run generate`

5. Deploy database schema into the MySQL database.
   `npm run deploy`

6. Seed the database with default data.
   `npm run seed`

### Running the project

#### For REST API

- Run in terminal:
  `npm run start:rest`

#### For GraphQL

- Run in terminal
  `npm run start:graphql`

#### Important

- Deploy new schema (after modifying `datamodel.prisma`)
  `prisma deploy`

- AFTER MODIFYING `prisma.yml`
  `npm run generate`

<!-- Authors -->

## Authors

1. <a href="https://github.com/qmixi" target="_blank">Piotr Kumorek</a>
2. <a href="https://github.com/SebastianStj" target="_blank">Sebastian Stój</a>
3. <a href="https://github.com/slawomirkolodziej" target="_blank">Sławek Kołodziej</a>
4. <a href="https://github.com/Kamieniu" target="_blank">Franciszek Stodulski</a>

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
