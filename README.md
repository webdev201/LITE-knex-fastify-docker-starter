# LITE-knex-fastify-docker-starter
Tiny boilerplate to show off a minimal fastify project with a docker database and knex integration

## Set up

Before starting make sure [docker](https://www.docker.com/) is installed along with node v16+.

### Installation

To begin from the root directory install the depenendencies with:

```bash
npm install
```

Once installed you can create a `.env` file in the root directory with the following configuration:

```bash
PORT=4000
DB_USER=root
DB_PASSWORD=password
DB_PORT=3306
DB_DATABASE=knex
```

Next either ensure you have a mysql database running on the same port as DB_PORT and with a database named DB_DATABASE or take advantage of the `docker-compose.yml` file and run the command:

```bash
 docker-compose up
```
Once the database is up and running you can execute the knex migrations and seeds with the following command:

```bash
npm run database-build
```

After the database has been migrated and data seeded you can run the project with the command:

```bash
npm run dev
```
