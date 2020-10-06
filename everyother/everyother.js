function changLetter(str) {
  return str
    .split("")
    .map((letter, index) => {
      return index % 2 === 1 ? (letter = "Z") : letter.toLowerCase();
    })
    .join("");
}
console.log(changLetter("waffles"));
