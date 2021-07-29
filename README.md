# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# mahabharath

A React Web-app, which includes details of all characters, of one of the greatest इतिहास

## Contribute:

#### Add character [here](public/characters.json)

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
  "view": true
}
```

#### Add description about the character [here](public/character_details.json)

```json
{
  "name": "Name_of_character",
  "description": "A Little bit about the character"
}
```

#### Must append the required filter [here](public/filter.json) (A MUST)

```json
{
  "name": "Name_of_character",
  "rename": "Name followed by wikipedia page of character"
}
```

#### Add any other functionalities by creating new file.
#### Add photos in "public\images"


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
