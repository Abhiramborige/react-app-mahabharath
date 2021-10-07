# Mahabharath
An Web application, which includes details of all characters in one of the greatest इतिहास. Web app is using React as the Frontend and Express and NodeJS for backend.

Further, contents are loaded from Wikipedia and MediaWiki public APIs.

## Table of Contents

- [Contribute](#contribute)
- [Start Developments](#start-developments)
- [Available Scripts](#available-scripts)
- [Learn More](#learn-more)

## Contribute
Please follow the following guideline when conributing the project.

1. Fork the repository.
1. Clone the repository.
1. Make the changes that you are wish to do, in a feature branch or in the `main` branch.
1. Commit and push the changes to remote repository.
1. Add a Pull Request to Original (Upstream) repository.

Further, follwings are the ways that you can contribute to the project. Or else please read the [issues](https://github.com/Abhiramborige/react-app-mahabharath/issues) section for further contributions.

#### Add characters [here](public/characters.json)
```json
{
  "name": "Name_of_character",
  "img": "character_image_link",
  "relations": [
    {
      "name": "Name_of_character",
      "relation": "Relation with main character"
    },
    {
      "name": "Name_of_character",
      "relation": "Relation with main character"
    }
  ],
  "view": true,
  "gender":"male" || "female"
}
```
#### Add description about the characters [here](public/character_details.json)
```json
{
  "name": "Name_of_character",
  "description": "A Little bit about the character"
}
```
#### Must append the required filter [here](public/filter.json) (A MUST 'IF PRESENT')
```json
{
  "name": "Name_of_character",
  "rename": "Name followed by wikipedia page of character"
}
```
#### Add any other functionalities by creating new file.
#### Add photos in "public\images"

## Start Developments

To run project locally:
* npm init to download the node dependencies.
* create a '.env.local' file and edit as
```
REACT_APP_MAHABHARATH_API: localhost URL of express server
Other API keys used for connecting firestore.
```
* cd server
* npm start (to start server)

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).
