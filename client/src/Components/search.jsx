import { Component } from "react";

class Search extends Component {
  /* this handles the change in the input box and 
      searchers according to the value in the input box and
      sets the list in the props(state above) by calling onChange() */
  handleChange_andSearch = (e) => {
    const value = e.target.value;
    var to_find = new RegExp(value, "i");
    this.props.list.forEach((element, index) => {
      if (!element.name.match(to_find)) {
        this.props.list[index].view = false;
      } else {
        this.props.list[index].view = true;
      }
    });
    this.props.onChange();
  };

  render() {
    const countSearch = this.props.list.filter(
      (character) => character.view === true
    ).length;
    return (
      <form>
        <label htmlFor="name">Search For: </label>
        <br></br>
        <input
          type="text"
          autoComplete="off"
          name="searchbox"
          id="name"
          onChange={this.handleChange_andSearch}
        />
        <br></br>
        <p>Total search results: {countSearch}</p>
      </form>
    );
  }
}

export default Search;