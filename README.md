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

Once you have set up your database, run the following command to seed the database with the same users you can find on Documentation, Task 1.

```bash
  npm run seed
```


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
// user 1
email: 'user@nextmail.com'
password: '123456'

// user 2
email: 'asafe@asafedigital.com'
password: '123456'
```

### Task 2: Advanced Component Development

You can access to [/film-stats](https://movielibrary-omega.vercel.app/film-stats) to see animated dynamic charts implemented with Chart.js

The charts have been componentized to simply pass you the year and the data of the top movies of that year, obtained through a custom api.

Although I have used some hooks to refactor code, as most of the operations are done from the server side, they don't make much sense. Because we made special server functions that are used to do fetch operations, [cacheable and automatically optimised by NextJS](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-server-with-fetch).

### Task 3: Large dataset handling

In order to handle large amounts of data (over 800k movies) I have implemented a pagination to be able to display 20 results minimising the impact on the load.

As I said about hooks, by using Next's fetch method, the requests will only be sent the first time, caching them for the next time.
All this is done on the server side, thus using maximum performance and ensuring that the content is SEO friendly.

### Task 4: Performance optimization and server-side rendering

In Next, all components and pages are [rendered on the server](https://nextjs.org/docs/app/building-your-application/rendering/server-components) by default.

Following this premise, I have tried to compose as much as possible so that fetches or operations are always performed on the server side.

For example, I've used search params like "state" to fetch categories or custom searches from the url, avoiding using hooks like useState, which force you to operate on the client side.

This way, you can also use the links to track information, or as bookmarks when sharing the page.

On the other hand, thanks to the Link component we can perform prefetching of routes, when they appear in the user's viewport.

Here are a couple of screenshots of the performance of the home page (one of the sections that loads the most content) analysed through PageSpeed:

#### Home page report on desktop version, PageSpeed.

![Home page report on desktop version, PageSpeed](https://raw.githubusercontent.com/FrancisDeea/movie-library-asafe/master/public/home-desktop-report-ps.webp "Home page report on desktop version, PageSpeed")

#### Home page report on mobile version, PageSpeed.

![Home page report on desktop version, PageSpeed](https://raw.githubusercontent.com/FrancisDeea/movie-library-asafe/master/public/home-mobile-report-ps.webp "Home page report on desktop version, PageSpeed")

I missed some optimisations due to lack of time. I couldn't optimize the images either as they come from the external api server.

Don't pay attention to the accessibility! I missed some silly things like duplicity in some hidden input or things like that!

### Task 5: Advanced features

In this section I didn't know what to implement that was in keeping with the theme of the films I chose. So I implemented a chat through [socket.io](https://socket.io/)

WARNING 1!

- This function is implemented on a different server than NextJS. I decided to create [a different repository](https://github.com/FrancisDeea/realtime-colaboration-socket) to structure the logic of the app.
  I could have implemented a [custom server](https://socket.io/how-to/use-with-nextjs) to serve both the Next app and the socket, but I would have lost many of the features and optimizations that Vercel gives us running Node with its serverless functions.

WARNING 2!

- The chat is in the [/colaborate](https://movielibrary-omega.vercel.app/colaborate) path but it takes about 50 seconds to start up. This is because I deployed the Node application with Socket on the [free render server](https://docs.render.com/free), which "sleeps" when there is no activity. This only happens because of the free tier. If you run the socket server in local mode, you will see that it is instantaneous.

TODO

- Messages editing function.
- Messages deleting function.
- 'whoever' is typing state.
- Notifications.

The application also has a light and dark mode. The preference is stored in localStorage, but it would be more appropriate to have the user preferences in the database, so that we know from the server which styles to load, thus avoiding the flick.

In the current version of Tailwind the Just-in-Time engine is already used by default. You can see more information [here](https://tailwindcss.com/docs/upgrade-guide#migrating-to-the-jit-engine).

### Task 6: Testing and Documentation

This project has been structured by folders according to content type, given its simplicity. Normally, I prefer to structure the projects by modules, thus grouping the application according to the business logic: payments, shopping cart, marketing, chat...

To read about the testing section, see above.

Let this Readme serve as full documentation of the application.

I would like to do a thousand more things, but I had very bad luck and disposition this week, and I'm out of time, I'm sorry and I hope you enjoy the experience!
