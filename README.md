# GraphQL Blog Client

This repository is a React Apollo client for a GraphQL blog. It does not contain
the API necessary. It consumes and presents the data from an API identical to
[`graphql-blog-api`](https://github.com/Skovy/graphql-blog-api).

## Technologies

- [React](https://github.com/facebook/react) - A declarative, efficient, and flexible JavaScript library for building user interfaces.
- [webpack](https://github.com/webpack/webpack) - Module bundler.
- [TSLint](https://github.com/Microsoft/TypeScript) - An extensible linter for the TypeScript language.
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is a superset of JavaScript that compiles to clean JavaScript output.
- [React Apollo](https://github.com/apollographql/react-apollo) - React higher-order component for Apollo Client.
- [styled-components](https://github.com/styled-components/styled-components) - Visual primitives for the component age 💅.
- [React Router](https://github.com/ReactTraining/react-router) - Declarative routing for React.
- [Draftjs](https://draftjs.org/) - Rich text editor framework for React.
- [Express](https://expressjs.com/) - Minimalist web framework for Node.

## Features

- Display a list of recent blog posts
- View a single blog post

## Setup

- Clone the repository
  - `git clone git@github.com:Skovy/graphql-blog-client.git`
- Change to the GraphQL Blog Client directory
  - `cd graphql-blog-client`
- Install the dependencies
  - `yarn install`
- Start the webpack dev server
  - `yarn start`
- Navigate to you browser
  - `localhost:3000`
  - **Note**: this depends on an external API (eg: [`graphql-blog-api`](https://github.com/Skovy/graphql-blog-api))

## Development

- `yarn lint`
  - Run TSLint
- `yarn lint:fix`
  - Run TSLint and fix the errors
- `cp .env.example .env`
  - Copy and change local environment configurations such as the Express PORT or GraphQL API endpoint
- `yarn heroku-postbuild`
  - Build the production bundle, the same used if deployed to Heroku
- `heroku local`
  - Run in "production mode", using the simple Express server instead of the `webpack-dev-server`

## Next Steps

- [ ] Upgrade Apollo to v2
