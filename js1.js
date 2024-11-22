// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const plusButtons = document.querySelectorAll(".fa-plus-circle");
    const minusButtons = document.querySelectorAll(".fa-minus-circle");
    const deleteButtons = document.querySelectorAll(".fa-trash-alt");
    const heartIcons = document.querySelectorAll(".fa-heart");
    const totalPriceElement = document.querySelector(".total");
    const deleteAllButton = document.querySelector("#delete-all"); // Reference to the Delete All button

    // Function to update the total price
    function updateTotalPrice() {
        let total = 0;
        const products = document.querySelectorAll(".card-body");

        products.forEach((product) => {
            const unitPrice = parseFloat(product.querySelector(".unit-price").textContent.replace("$", "").trim());
            const quantity = parseInt(product.querySelector(".quantity").textContent.trim(), 10);
            total += unitPrice * quantity;
        });

        totalPriceElement.textContent = `${total.toFixed(2)} $`;
    }

    // Add event listeners to the "+" buttons
    plusButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const quantityElement = this.parentElement.querySelector(".quantity");
            let quantity = parseInt(quantityElement.textContent.trim(), 10);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        });
    });

    // Add event listeners to the "-" buttons
    minusButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const quantityElement = this.parentElement.querySelector(".quantity");
            let quantity = parseInt(quantityElement.textContent.trim(), 10);
            if (quantity > 0) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotalPrice();
            }
        });
    });

    // Add event listeners to the delete buttons
    deleteButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const productCard = this.closest(".card-body");
            productCard.remove();
            updateTotalPrice();
        });
    });

    // Add event listener to the "Delete All" button
    deleteAllButton.addEventListener("click", function () {
        const productCards = document.querySelectorAll(".card-body");
        productCards.forEach((product) => {
            product.remove();
        });
        updateTotalPrice();
    });

    // Add event listeners to the heart icons
    heartIcons.forEach((heart) => {
        heart.addEventListener("click", function () {
            if (this.style.color === "red") {
                this.style.color = "black";
            } else {
                this.style.color = "red";
            }
        });
    });

    // Initial update of the total price
    updateTotalPrice();
});
