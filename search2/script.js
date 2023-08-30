const searchInput = document.getElementById("search-input");
const resultsList = document.getElementById("results-list");
const searchIcon = document.querySelector(".search-icon");
const closeIcon = document.querySelector(".close-icon");

const data = [
  "Apple",
  "Banana",
  "Orange",
  "Strawberry",
  "Mango",
  "Pineapple",
  "Grapes",
];

searchIcon.addEventListener("click", () => {
  searchInput.style.display = "block";
  searchIcon.style.display = "none";
  closeIcon.style.display = "block";
  searchInput.focus();
});

closeIcon.addEventListener("click", () => {
  searchInput.value = "";
  searchInput.style.display = "none";
  searchIcon.style.display = "block";
  closeIcon.style.display = "none";
  resultsList.innerHTML = "";
});

searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const filteredResults = data.filter(item =>
    item.toLowerCase().includes(searchTerm)
  );

  displayResults(filteredResults);
});

function displayResults(results) {
  resultsList.innerHTML = "";

  if (results.length === 0) {
    resultsList.innerHTML = "<p>No results found.</p>";
    return;
  }

  results.forEach(result => {
    const li = document.createElement("li");
    li.classList.add("result-item");
    li.textContent = result;
    resultsList.appendChild(li);
  });
}
