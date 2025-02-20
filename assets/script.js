document.addEventListener("DOMContentLoaded", () => {
  document.body.style.backgroundColor = "#388e3c"; // Verde natalizio per lo sfondo della pagina

  const title = document.createElement("h1");
  title.textContent = "Tombola";
  title.style.color = "#d32f2f"; // Rosso natalizio per il titolo
  title.style.textAlign = "center";
  title.style.fontSize = "40px";
  document.body.appendChild(title);

  const boardContainer = document.createElement("div");
  boardContainer.style.display = "grid";
  boardContainer.style.gridTemplateColumns = "repeat(10, 1fr)";
  boardContainer.style.gap = "5px";
  boardContainer.style.marginBottom = "20px";
  boardContainer.style.backgroundColor = "#d32f2f"; // Rosso natalizio
  boardContainer.style.padding = "10px";
  boardContainer.style.borderRadius = "10px";

  document.body.appendChild(boardContainer);

  // Creazione tabellone con 90 numeri
  const cells = {};
  for (let i = 1; i <= 90; i++) {
    const cell = document.createElement("div");
    cell.textContent = i;
    cell.style.border = "1px solid white";
    cell.style.padding = "15px";
    cell.style.textAlign = "center";
    cell.style.fontSize = "25px";
    cell.style.cursor = "pointer";
    cell.style.backgroundColor = "#f5f5f5";
    cell.style.color = "#d32f2f";
    cell.style.borderRadius = "5px";

    cells[i] = cell;
    boardContainer.appendChild(cell);
  }

  // Bottone per estrarre un numero
  const button = document.createElement("button");
  button.textContent = "Estrai Numero";
  button.style.padding = "10px 20px";
  button.style.fontSize = "16px";
  button.style.cursor = "pointer";
  button.style.backgroundColor = "#d32f2f"; // Rosso per il bottone
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "5px";
  button.style.marginTop = "10px";
  document.body.appendChild(button);

  const extractedNumbers = new Set();

  button.addEventListener("click", () => {
    if (extractedNumbers.size === 90) {
      alert("Tutti i numeri sono stati estratti!");
      return;
    }

    let randomNum;
    do {
      randomNum = Math.floor(Math.random() * 90) + 1;
    } while (extractedNumbers.has(randomNum));

    extractedNumbers.add(randomNum);

    // Evidenziare il numero estratto con colore oro
    cells[randomNum].style.backgroundColor = "#ffd700";
    cells[randomNum].style.color = "#000";
  });
});
