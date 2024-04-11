
# Movie Library - A technical test for A-Safe Digital

Movie library dashboard that allow you to find your favorite movie by category or by searching for its name.

Powered by NextJS, TailwindCSS, Node, Socket, SQLite/PostgreSQL and more!

Developed by [Francisco Javier Bernal Cabra](https://www.linkedin.com/in/francis-bernal-full-stack-developer/)


## Tech Stack

**Client:** Next (React), TailwindCSS, Socket, Chart.js

**Server:** Next (Node), Socket, @vercel/postgres, Next-Auth (Auth.js) 


## Run Locally on dev mode

Clone the project

```bash
  git clone https://github.com/FrancisDeea/movie-library-asafe.git
```

Go to the project directory

```bash
  cd movie-library-asafe
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file

`API_MOVIE_TOKEN` 

Create an [account on TMDB](https://developer.themoviedb.org/reference/intro/authentication) (The movie database) and get your api token. (Not your api key). This is because we are passing in to the authorization header (Bearer).

`AUTH_SECRET`

This key is used to encrypt cookies, ensuring the security of user sessions. You can get one by running the following command in your terminal: 
```bash
openssl rand -base64 32
```


`POSTGRES_URL`
`POSTGRES_PRISMA_URL`
`POSTGRES_URL_NO_SSL`
`POSTGRES_URL_NON_POOLING`
`POSTGRES_USER`
`POSTGRES_HOST`
`POSTGRES_PASSWORD`
`POSTGRES_DATABASE`

All these variables are necessary to establish a connection with a database integrated in vercel, which will be in charge of managing the authentication of our users. This is because I have chosen the user/password method for didactic reasons.

You can learn how to set up your database on vercel and how to get these keys on the [official documentation](https://nextjs.org/learn/dashboard-app/setting-up-your-database)

`NEXT_PUBLIC_SOCKET_URL`

This variable is the public url address of the socket server in charge of receiving and sending collaborative chat messages. Don't worry about this variable in local mode, because it will take the localhost port by default. Just use it if you deploy the socket server.

## Deployment

The easiest way to deploy this project is through the vercel panel. 

Once you have your github repository cloned, with the environment variables set, and running perfectly in local mode, log into your vercel account and import your repository [by following the steps](https://vercel.com/docs/deployments/git#deploying-a-git-repository).


## Running Tests

Test are developed using Cypress. An e2e test has been implemented to test the application from the user's perspective. The component tests are not yet compatible with the latest version of next (Next 14).

You can see more information about [cypress](https://docs.cypress.io/guides/overview/why-cypress) and [how to integrate it with Next here](https://nextjs.org/docs/app/building-your-application/testing/cypress).

To start the tests, first run the local development mode and then use the :open command to start the cypress GUI or the :run command to run the test via the command line.

```bash
  npm run dev

  // interface solution
  npm run cypress:open

  // command solution
  npm run cypress:run
```


## Documentation

### Task 1: Advanced NextJS architecture
It seems that the [@module-federation/nextjs-mf plugin](https://www.npmjs.com/package/@module-federation/nextjs-mf) is [not compatible](https://github.com/module-federation/universe/issues/1183) with next 14 and app router. I realised this quite late in the project and ran out of time to investigate further. 

Maybe it can be adapted by touching the webpack config natively but it seems counterproductive as the future of Next is the complete migration to [turbopack](https://nextjs.org/docs/architecture/turbopack) as the official bundler.

#### AuthJS (Next-Auth)

A login system has been implemented that does not allow you to access any path in the application unless the user logs in and gets their token correctly, which will be stored in encrypted form as an expirable cookie.

Credentials will be securely stored in a PostgreSQL database integrated with Vercel.
  
You can access the application using the following credentials:
```bash
email: 'user@nextmail.com'
password: '123456'
```

### Task 2: Advanced Component Development
You can access to [/film-stats](https://movielibrary-omega.vercel.app/film-stats) to see animated dynamic charts implemented with Chart.js 

The charts have been componentized to simply pass you the year and the data of the top movies of that year, obtained through a custom api.

Although I have used some hooks to refactor code, as most of the operations are done from the server side, they don't make much sense. Because we made special server functions that are used to do fetch operations, [cacheable and automatically optimised by NextJS](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-server-with-fetch).

  

[Documentation](https://linktodocumentation)

