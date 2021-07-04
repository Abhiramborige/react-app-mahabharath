import { Component } from "react";
import Character from "./Components/character";

/* This is not a component but just a rendered to render list of components */
class CharacterList extends Component {
  render() {
    return (
      <div className="container" id="maincontent">
        {this.props.list.map((character, index) =>
          character.view ? (
            <Character
              img={character.img}
              name={character.name}
              rel={character.relations}
              onClick={() => this.props.onClick({ ...character })}
              key={index}
            ></Character>
          ) : null
        )}
      </div>
    );
  }
}

export default CharacterList;