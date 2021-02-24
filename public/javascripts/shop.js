document.addEventListener("DOMContentLoaded", function(event) { 
    fetch('/products', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).then(function(result) {
        return result.json();
      }).then((response) => console.log(response));
});