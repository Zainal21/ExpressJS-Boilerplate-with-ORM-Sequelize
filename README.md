# Base Setup Express JS Project

> (Base Expres Project) Expres Base Setup use Model, View, Controller Pattern.

---

## Table of contents

- [Table of contents](#table-of-contents)
- [Prerequiste](#prerequiste)
- [Installation and Cofiguration](#installation)

## Prerequiste

- [Node JS](https://nodejs.org/en/) - Download and Install NodeJS

## Installation

1. Clone repository

```bash
$ git clone https://github.com/Zainal21/ExpressJS-Boilerplate-with-ORM-Sequelize.git
```

2. move to directory project and Install depedencies

```bash

$ cd ExpressJS-Boilerplate-with-ORM-Sequelize

$ yarn install or npm install
```

3. Setup your environment variable in `.env` files or rename `.env.example to .env`.

4. run initialize sequalize then change config.json to config.js and copy value in config.example to config.js and change path config.json to config.js in models index.js file

```bash
$  yarn db:init
```

5. run script for migration , seeder and drop all data

```bash
$  yarn db:reset
```

6. run script for runnig development server using nodemon

```bash
$  yarn dev
```

---

Copyright © 2023 by Muhamad Zainal Arifin
