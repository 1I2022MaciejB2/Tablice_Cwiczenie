const tab = [];

for (let i = 0; i < 5; i++) {
  let liczby = parseFloat(prompt("Wprowadź liczbę:"));
  tab.push(liczby);
}

for (let i = 0; i < tab.length; i++) {
  document.write(`<p> Element nr ${i + 1} tablicy: ${tab[i]}<p>`);
}
