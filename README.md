# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# mahabharath

A React Web-app, which includes details of all characters, of one of the greatest इतिहास

## Contribute:

#### Add character

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

#### Add description about the character

```json
{
  "name": "Name_of_character",
  "description": "A Little bit about the character"
}
```

#### Add any other functionalities by creating new file.
#### Add photos in "public\images"

### Commit Description:

1. Basic idea implemented:
   - Character render from json.
   - Search funtionality for rendered characters.
   - Responsive layout.
   - Few characters added.
   - Hover effect on character components.
2. Modified UI:
   - Click on character makes new Component to render and old to unmount.
   - Cancel component to just make it reverse.
3. Theme Added:
   - Switch theme option made available
4. Many changes made (Huge commit!):
   - Google material icons used for better UI.
   - Added "About" and "Connect" pages.
   - A Slider at the bottom of clicked Character to get the relatives of the character.
   - Added click effects on slider elements to show the details about them.
   - Navigation component added.
   - File hierarchy made effective.
   - Webpage made more responsive and attractive.
5. Backend commit(Yet to come):
   - Added scrapping module to scrape details of character from "Wikipedia".
   - Integrated with Firebase to have connections with visitors.

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
