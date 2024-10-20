//search event
let search = document.querySelector('.search-bar');

document.querySelector('#search-icon').onclick = (event) => {
  event.preventDefault();
  search.classList.toggle('active');
}

//Scroll-event
let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
})



let snacks = []; 

let snackContainer = document.querySelector('.sshnackss-container');

// Fetch snack data
fetch('http://localhost:3000/sshnackss')
    .then(response => response.json())
    .then(data => {
        snacks = data; 
        
        // Function to display snacks based on the selected category
        function displaySnacks(category) {
            snackContainer.innerHTML = '';

            // Filter snacks based on category
            const filteredSnacks = snacks.filter(snack => {
               
                if (category === 'all') return true;
                return snack.category === category;
            });

          
            filteredSnacks.forEach(snack => {
                const snackImage = snack.image ? snack.image : 'placeholder-image-url.jpg';
                
                snackContainer.innerHTML += `
                    <div class="snack-item">
                      <img src="${snackImage}" alt="${snack.name}">
                      <h3>${snack.name}</h3>
                      <p>${snack.description}</p>
                      <span>$${snack.price.toFixed(2)}</span>
                      <button class="add-to-basket-btn" data-id="${snack.id}">Add to Basket</button>
                    </div>`;
            });

            // Attach event listeners to each "Add to Basket" button
            const addToBasketButtons = document.querySelectorAll('.add-to-basket-btn');
            addToBasketButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const snackId = e.target.getAttribute('data-id');
                    addToBasket(snackId); 
                });
            });
        }
        

        
        displaySnacks('all');

        // Add event listeners to filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                displaySnacks(filter); 
            });
        });
        function filterSnacks(searchTerm) {
            snackContainer.innerHTML = '';

            const filteredSnacks = snacks.filter(snack =>
                snack.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            filteredSnacks.forEach(snack => {
                const snackImage = snack.image ? snack.image : 'placeholder-image-url.jpg';
                
                snackContainer.innerHTML += `
                    <div class="snack-item">
                      <img src="${snackImage}" alt="${snack.name}">
                      <h3>${snack.name}</h3>
                      <p>${snack.description}</p>
                      <span>$${snack.price.toFixed(2)}</span>
                      <button class="add-to-basket-btn" data-id="${snack.id}">Add to Basket</button>
                    </div>`;
            });
        }

        // Add event listener for the search bar
        const searchInput = document.querySelector('.search-bar input[type="search"]');

        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.trim();
            filterSnacks(searchTerm);
        });
    })
    .catch(error => console.error('Error fetching the snacks:', error));

// Adding Snack items into the basket
const basketIcon = document.getElementById('basket-icon');
const basketModal = document.getElementById('basket-modal');
const closeBasketModal = document.querySelector('.close-basket-modal');

// Show the basket modal when the icon is clicked
basketIcon.addEventListener('click', () => {
    basketModal.style.display = 'block';
    displayBasket(); 
});

// Close the modal when the close button is clicked
closeBasketModal.addEventListener('click', () => {
    basketModal.style.display = 'none';
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === basketModal) {
        basketModal.style.display = 'none';
    }
});

let basket = [];

function addToBasket(snackId) {
  console.log("Snack ID:", snackId)
    const snack = snacks.find(item => item.id === parseInt(snackId));
    
    
    if (!snack) {
        console.error('Snack not found');
        return;
    }

    console.log("Snack found:", snack)

    // Check if the snack is already in the basket
    const existingSnack = basket.find(item => item.id === snack.id);
    if (existingSnack) {
        existingSnack.quantity += 1;
    } else {
        basket.push({ ...snack, quantity: 1 });
    }

    localStorage.setItem('basket', JSON.stringify(basket));
    console.log(localStorage.getItem('basket'));
    
    displayBasket();
}

function displayBasket() {
  console.log("Current Basket:", basket)
    const basketContainer = document.querySelector('.basket-items');
    const basketTotal = document.querySelector('.basket-total');
    
    basketContainer.innerHTML = ''; 
    basket.forEach(item => {
        basketContainer.innerHTML += `
            <li>${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}</li>
        `;
    });

    
    const total = basket.reduce((sum, item) => sum + item.price * item.quantity, 0);
    basketTotal.innerHTML = `Total: $${total.toFixed(2)}`;
}

// Load the basket from localStorage when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const storedBasket = localStorage.getItem('basket');
    if (storedBasket) {
        basket = JSON.parse(storedBasket);
        return displayBasket(); 
    }
});
