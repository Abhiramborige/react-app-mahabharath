/* function to randomize the list in the json, 
    to show the list in a different order, whenever loaded.
    1. https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/
    2. https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array */
const randomize_list = (list) => {
  let i = 0;
  list.reverse().forEach((character) => {
    let random = Math.floor(Math.random() * (i + 1));
    let temp = list[i];
    list[i] = list[random];
    list[random] = temp;
    i++;
  });
  return list
};

module.exports = {
  randomize_list,
};
