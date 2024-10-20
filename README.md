# Snack Haven
Snack Haven is an online snack store where users can browse, filter, search, and add snacks to their basket for purchase. The app features categories such as healthy, spicy, sugary, and salty snacks, allowing users to easily filter their preferences. Users can also search for snacks and add them to a virtual basket for checkout.

## Table of Contents
-Features
<br>
-Technologies
<br>
-Setup
<br>
-Usage
<br>
-API Endpoints
<br>
-File Structure
<br>
-Future Improvements
<br>
-Contributing
<br>

### 1. Features
**Snack Filtering**: Filter snacks based on categories: healthy, spicy, sugary, and salty.
<br>

**Snack Search**: Search snacks by name, description, or category.
<br>

**Basket Functionality**: Add snacks to a basket, view basket items, and calculate total cost.
<br>

**Dynamic UI**: Fetch snacks dynamically from a local API and display them on the page.
<br>

**Responsive Design**: A user-friendly interface that adapts to various screen sizes.


### 2. Technologies
-HTML5 - Structure of the app.
<br>
-CSS3 - Styling the interface, animations, and layout.
<br>
-JavaScript (ES6) - Core logic for the app, including fetching data, dynamic DOM manipulation, and basket management.
<br>
-Font Awesome - Used for icons (e.g., the basket icon).
<br>
-JSON Server - A local API to simulate backend behavior.
<br>
-Local Storage - Store and retrieve basket data across sessions.
<br>

### 3. Setup
*Prerequisites*
<br>
-Node.js installed on your machine.
<br>
-JSON Server for running the local API.

**Steps**
<br>
1. Clone the repository: 
Copy code
git clone https://github.com/your-username/snack-haven.git
<br>
2. Navigate to the project directory:
Copy code
cd snack-haven
<br>
3. Install dependencies (for running json-server):
Copy code
npm install json-server
<br>
4. Start the JSON Server:
Copy code
json-server --watch db.json
<br>
5. Open index.html in your browser.
<br>

#### Running the App
After starting the json-server, open the index.html file in your browser to interact with the app.

### 4. Usage
*Filtering Snacks*
The homepage displays all available snacks by default.
Use the filter buttons (All, Healthy, Spicy, Sugary, Salty) to filter snacks based on your preferences.
<br>

*Searching for Snacks*
Click the search icon to activate the search bar.
Type the name, description, or category of the snack you're looking for, and hit "Enter" or click the search icon to display results.
<br>

*Adding Snacks to Basket*
Each snack card has an Add to Basket button.
Click the button to add the snack to your basket.
You can view the basket by clicking on the basket icon in the navigation bar.
<br>

*Viewing the Basket*
Click the basket icon to open the basket modal.
The basket shows all added snacks, their quantities, and the total cost.
The basket data is stored in the browser's local storage, so it will persist even if the page is refreshed.
<br>

### 5. API Endpoints
The project uses db.json as a local database for snack data.

- GET /sshnackss - Retrieves all snacks.
- POST /sshnackss - Adds a new snack (useful for future features like admin panel).
-PATCH /sshnackss/
- Updates snack data.
DELETE /sshnackss/
- Deletes a snack item.
Example structure for a snack object in db.json:

```json
{
  "id": 1,
  "name": "Veggie Stix",
  "category": "healthy",
  "description": "Crispy veggie snacks",
  "price": 4.00,
  "image": "path-to-image.jpg"
}
```

### 6. File Structure
```
/snack-haven
│
├── /css
│   └── styles.css       # Styles for the app
│
├── /images              # Image assets
│
├── /js
│   └── main.js          # Core functionality (fetching snacks, basket handling)
│
├── db.json              # Local JSON database (snacks data)
├── index.html           # Main HTML file
└── README.md            # Project documentation
```
### 7. Future Improvements
**Checkout Functionality**: Add a feature for users to checkout, integrate with a payment gateway.
<br>

**User Accounts**: Allow users to sign up, log in, and save their order history.
<br>

**Admin Panel**: Implement an admin dashboard to manage snack inventory.
<br>

**Quantity Adjustments**: Let users increase or decrease snack quantities in their basket.
<br>

**Snack Reviews**: Allow users to leave ratings and reviews for each snack.

### 8. Contributing
Contributions are welcome! Here's how you can help:

-Fork the project.
Create your feature branch (git checkout -b feature/awesome-feature).
<br>
-Commit your changes (git commit -m 'Add some awesome feature').
<br>
-Push to the branch (git push origin feature/awesome-feature).
<br>
-Open a pull request.
<br>

## License
This project is licensed under the MIT License. 

## Author
[Debrah Navajjah Muinde](debbynav645@gmail.com) 