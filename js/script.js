document.addEventListener("DOMContentLoaded", () => {
  const search = document.getElementById("search");
  const result = document.getElementById("search-result");

  // Add event listener with debounced search
  search.addEventListener("keyup", debounce(handleSearch, 300));

  function clearResults() {
    result.innerHTML = "";
  }

  function createListItem(text, clickHandler = null) {
    const li = document.createElement("li");
    li.classList = "px-4 py-2 cursor-pointer hover:bg-gray-100";
    li.textContent = text;
    if (clickHandler) {
      li.addEventListener("click", clickHandler);
    }
    return li;
  }

  function handleItemClick(event) {
    search.value = event.target.textContent;
    clearResults();
  }

  function renderResults(items) {
    clearResults(); // Clear previous results

    if (items.length > 0) {
      items.forEach((item) => {
        const li = createListItem(item.title, handleItemClick);
        result.appendChild(li);
      });
    } else {
      result.appendChild(createListItem("No match found"));
    }
  }

  async function fetchResults(query) {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${query}`
      );
      const data = await response.json();
      renderResults(data.products);
    } catch (error) {
      console.error("API error:", error);
      renderResults([]);
    }
  }

  function handleSearch(event) {
    const query = event.target.value.trim();
    if (query) {
      fetchResults(query);
    } else {
      clearResults();
    }
  }

  function debounce(func, delay = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }
});
