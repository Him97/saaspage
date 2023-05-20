const fibonacciInput = document.getElementById('fibonacci-input');
const fibonacciOutput = document.getElementById('fibonacci-output');
const fibonacciButton = document.getElementById('fibonacci-button');
const calculatorLoader = document.getElementById('calculator-loader');
const resultsLoader = document.getElementById('results-loader');
const errorMaxLimit = document.getElementById('error-maxlimit');
const errorMinLimit = document.getElementById('error-minlimit');
const resultsList = document.getElementById('results-list');
const saveCalculation = document.getElementById('save-calculation');
const sortResultsSelector = document.getElementById('sort-results');
const memo = {};

function fibonacciLocal(number) {
  if (number <= 1) {
    return number;
  }
  if (memo[number]) {
    return memo[number];
  }
  const result = fibonacciLocal(number - 1) + fibonacciLocal(number - 2);
  memo[number] = result;
  return result;
}

async function fibonacciServer(number) {
  const response = await fetch(`http://localhost:5050/fibonacci/${number}`);
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const data = await response.json();
  return data.result;
}

async function getFibonacciResults() {
  const response = await fetch(`http://localhost:5050/getFibonacciResults`);
  const data = await response.json();
  return data.results;
}

async function sortResults() {
  const fibonacciResults = await getFibonacciResults();
  if (sortResultsSelector.value === "date-asc") {
    const sortedResults = fibonacciResults.sort((a, b) => a.createdDate - b.createdDate);
    return sortedResults;
  } else if (sortResultsSelector.value === "date-desc") {
    const sortedResults = fibonacciResults.sort((a, b) => b.createdDate - a.createdDate);
    return sortedResults;
  } else if (sortResultsSelector.value === "number-asc") {
    const sortedResults = fibonacciResults.sort((a, b) => a.number - b.number);
    return sortedResults;
  } else if (sortResultsSelector.value === "number-desc") {
    const sortedResults = fibonacciResults.sort((a, b) => b.number - a.number);
    return sortedResults;
  } else {
    const sortedResults = fibonacciResults.sort((a, b) => b.createdDate - a.createdDate);
    return sortedResults;
  }
}

async function refreshResults() {
  const fibonacciResults = await sortResults();
  resultsList.innerHTML = fibonacciResults.map(object => {
    const number = object.number;
    const result = object.result;
    const createdDate = object.createdDate;
    const date = new Date(createdDate);
    return `<li class="d-inline-flex border-bottom border-black"><span class="py-3">The Fibonacci Of <b>${number}</b> is <b>${result}</b>. Calculated at: ${date}</span></li>`;
  }).join('');
}

sortResultsSelector.addEventListener('change', refreshResults);

window.addEventListener('load', refreshResults);

fibonacciButton.addEventListener('click', async () => {
  const number = fibonacciInput.value;
  errorMaxLimit.style.visibility = "hidden";
  errorMinLimit.style.visibility = "hidden";
  fibonacciInput.classList.remove('is-invalid');
  calculatorLoader.style.display = "block";
  fibonacciOutput.style.visibility = "hidden";
  if (number > 50) {
    calculatorLoader.style.display = "none";
    errorMaxLimit.style.visibility = "visible";
    fibonacciInput.classList.add('is-invalid');
    fibonacciOutput.style.visibility = "hidden";
  } else if (number < 0) {
    calculatorLoader.style.display = "none";
    errorMinLimit.style.visibility = "visible";
    fibonacciInput.classList.add('is-invalid');
    fibonacciOutput.style.visibility = "hidden";
  } else if (saveCalculation.checked == true) {
    resultsLoader.style.display = "block";
    try {
      fibonacciOutput.textContent = await fibonacciServer(number);
      fibonacciOutput.style.color = "#373A3C";
      fibonacciOutput.classList.add('fw-bold', 'text-decoration-underline');
    } catch (error) {
      fibonacciOutput.textContent = await error.message;
      fibonacciOutput.style.color = "#D9534F";
      fibonacciOutput.classList.remove('fw-bold', 'text-decoration-underline');
    }
    fibonacciOutput.style.visibility = "visible";
    refreshResults();
    resultsLoader.style.display = "none";
  } else {
    fibonacciOutput.textContent = fibonacciLocal(number);
    fibonacciOutput.style.color = "#373A3C";
    fibonacciOutput.classList.add('fw-bold', 'text-decoration-underline');
    fibonacciOutput.style.visibility = "visible";
  }
  calculatorLoader.style.display = "none";
})