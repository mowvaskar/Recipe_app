const recipes = [
    { id: 1, name: 'Spaghetti Bolognese', description: 'A classic Italian pasta dish with a rich, meaty sauce.' },
    { id: 2, name: 'Chicken Curry', description: 'A spicy and flavorful dish with tender chicken pieces.' },
    { id: 3, name: 'Beef Stroganoff', description: 'A creamy and delicious dish with tender beef strips.' },
    { id: 4, name: 'Vegetable Stir Fry', description: 'A healthy and quick dish with mixed vegetables.' },
    { id: 5, name: 'Tacos', description: 'A Mexican dish with various fillings wrapped in a tortilla.' },
];

const cart = [];

document.addEventListener('DOMContentLoaded', () => {
    displayRecipes(recipes);
});

function displayRecipes(recipes) {
    const recipeList = document.getElementById('recipeList');
    recipeList.innerHTML = '';
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        
        const closeBtn = document.createElement('button');
        closeBtn.className = 'close-btn';
        closeBtn.innerHTML = '&times;';
        closeBtn.onclick = () => recipeCard.remove();
        
        const recipeName = document.createElement('h3');
        recipeName.textContent = recipe.name;
        
        const recipeDescription = document.createElement('p');
        recipeDescription.textContent = recipe.description;
        
        const addToCartBtn = document.createElement('button');
        addToCartBtn.textContent = 'Add to Cart';
        addToCartBtn.onclick = () => addToCart(recipe);
        
        recipeCard.appendChild(closeBtn);
        recipeCard.appendChild(recipeName);
        recipeCard.appendChild(recipeDescription);
        recipeCard.appendChild(addToCartBtn);
        
        recipeList.appendChild(recipeCard);
    });
}

function searchRecipes() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(query) || recipe.description.toLowerCase().includes(query)
    );
    displayRecipes(filteredRecipes);
}

function addToCart(recipe) {
    cart.push(recipe);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = item.name;
        cartItems.appendChild(cartItem);
    });
}
