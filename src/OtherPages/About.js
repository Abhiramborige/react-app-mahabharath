import "../styles/extras.scss";

const About = () => {
  return (
    <div className="about">
      <h1>Mahabharath</h1>
      <h2>About this project</h2>
      <p>An Web application, which includes details of all characters in one of the greatest इतिहास.</p>
      <h2>Tech Stack used: </h2>
      {/* https://daveceddia.com/react-image-tag/ */}
      <div className="aboutImage">
        <img src="./aboutImages/react.png" alt="Waiting" title="React-JS" />
        <img src="./aboutImages/firebase.png" alt="Waiting" title="Firebase" />
        {/* <img src="./aboutImages/puppeteer.png" alt="Waiting" /> */}
        <img src="./aboutImages/nodejs.svg" alt="Waiting" title="Node.js" />
        <img src="./aboutImages/express.png" alt="Waiting" title="Express framework" />
        <img src="./aboutImages/html.png" alt="Waiting" title="HTML5" />
        <img src="./aboutImages/css.png" alt="Waiting" title="CSS3" />
        <img src="./aboutImages/javascript.png" alt="Waiting" title="JavaScript" />
        <h2>Contribute here</h2>
        <p>Before contributing read the Contribution guideline <a href="https://github.com/NimperX/react-app-mahabharath/blob/main/README.md#contribute" target="_blank" rel="noreferrer">here</a></p>
        <a href="https://github.com/Abhiramborige/react-app-mahabharath">
          <img src="./aboutImages/github.png" alt="Waiting" title="GitHub" />
        </a>
        <h2>Hosted here</h2>
        <img src="./aboutImages/netlify.png" alt="Waiting" title="Netlify" />
        <img src="./aboutImages/heroku.png" alt="Waiting" title="Heroku" />
        <h2>APIs used</h2>
        <img src="./aboutImages/MediaWiki.svg" alt="Waiting" title="MediaWiki" />
        <img src="./aboutImages/Wikipedia.png" alt="Waiting" title="Wikipedia" />

        {/* <h2>Check out this video !😃</h2>
        <a href="https://youtube.com">
          <img src="./aboutImages/youtube.png" alt="Waiting" />
        </a> */}
      </div>
    </div>
  );
};

export default About;
