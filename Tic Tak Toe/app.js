const tiles = document.querySelectorAll(".tile");
const winner = document.getElementById("winner");
let currentPlayer = "X";
let hasWon = false;
let winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
let moves = ["", "", "", "", "", "", "", "", ""];
const displayWinner = (combinations) => {
  hasWon = true;
  winner.innerText = `${currentPlayer} is the Winner`;
  combinations.forEach((comb) => {
    const cell = document.querySelector(`[data-key="${comb}"]`);
    cell.classList.add("win");
  });
};
const checkWinner = () => {
  winningCombination.forEach((combination) => {
    let check = combination.every((idx) => moves[idx] == currentPlayer);
    if (check) {
      displayWinner(combination);
    }
  });
};
const handleClick = (e) => {
  if (e.target.innerText != "") return;
  if (hasWon) return;
  e.target.innerText = currentPlayer;
  moves[parseInt(e.target.dataset.key)] = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer == "X" ? "O" : "X";
};
tiles.forEach((tile) => {
  tile.addEventListener("click", handleClick);
});
