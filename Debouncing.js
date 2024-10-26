function debounce(func, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout); // Clear the previous timer
      timeout = setTimeout(() => func.apply(this, args), delay); // Start a new timer
    };
  }
  
  // Usage example
  const handleSearch = debounce(() => {
    console.log("Searching...");
  }, 500); // Executes only if there's a 500ms gap between keystrokes
  