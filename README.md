This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a simple movie web app which allows you to browser movies and search by certain criteria. The main functionalities include:

- The main page where you can see a grid of movies (images are not provided)
- The movie detail page where you can see the details of a movie
- Clicking on a movie in main page should show the movie detail page
- A main button at the top should take the user to the main page
- User should be able to filter movie per year and per genre in the main page

## Before Running

Create `.env` file under root folder, it should include following configuration:

```
NODE_ENV=development
REACT_APP_MOVIE_API=https://g5jezgqoe1.execute-api.us-east-1.amazonaws.com/stg
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Tech Stack

- React.js
- Redux
- Bootstrap
- Styled-components
- Enzyme + Jest
- redux-mock-store

### Addition

The project has been set with Github Actions. It will be triggered on each commit.
