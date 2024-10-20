const snackContainer = document.querySelector('.sshnackss-container');

return fetch('http://localhost:3000/sshnackss') 
  .then(response => response.json())
  .then(data => {
    const snacks = data;

   
    snackContainer.innerHTML = '';

   
    snacks.forEach(snack => {
      const snackImage = snack.image ? snack.image : 'placeholder-image-url.jpg';
      
      snackContainer.innerHTML += `
        <div class="snack-item">
          <img src="${snackImage}" alt="${snack.name}">
          <h3>${snack.name}</h3>
          <p>${snack.description}</p>
          <span>$${snack.price.toFixed(2)}</span>
        </div>`;
    });
  })
  .catch(error => console.error('Error fetching the snacks:', error));
