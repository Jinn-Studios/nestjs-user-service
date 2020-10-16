# Project
This project uses the [NestJS Framework](https://docs.nestjs.com/) to create a scalable user microservice. It works in conjunction with [GraphQL](https://graphql.org/learn/) as its query language and MS SQL for database management.

This project shows examples of the core components of NestJS, GraphQL, and Auth Guards using JWT.

## Running
> Prerequisite: Installation of  [Node.js](https://nodejs.org/en/)

Install Packages
`
npm install
`

Running application
`
npm start
`

After successfully building + running, navigate to open http://localhost:3000/graphql

## Other Files
This projects uses [TypeORM](https://github.com/typeorm/typeorm) as its ORM. As such, you'll need to add connection information so it knows how to connect to your database.

### ormconfig.json
Create/Add this file to the root directory with  any host, username, password, database, and port options needed for the project to connect to your database. It is common practice to add this to the gitignore and to not store sensitive information in the repo. The following is an example of a mssql verion of an ormconfig:

```  
{
    "type": "mssql",
    "host": "123.111.22.333",
    "port": 8383,
    "username": "sa",
    "password": "password",
    "database": "UserService",
    "synchronize": true,
    "logging": false,
    "migrationsRun": true,
    "entities": [
        "dist/user/*.entity{.ts,.js}"
    ],
    "migrations": [
        "src/migration/**/*.ts"
    ],
    "subscribers": [
        "src/subscriber/**/*.ts"
    ]
}
``` 
### wipe-dependencies.js
 This is used in the `update:packages` script to easily keep this projects dependencies up-to-date. 
> Suggestion: Most version in the package.json are set to asterisks '*' and should be set to a specific version of your choosing. Then wipe-dependencies.js can be removed. 

# Useful Information
[NestJS Authentication](https://docs.nestjs.com/techniques/authentication)
[GraphQL vs. REST](https://www.apollographql.com/blog/graphql-vs-rest-5d425123e34b/)
[JWT Intro](https://jwt.io/introduction/)
