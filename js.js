// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const plusButtons = document.querySelectorAll(".plus");
    const minusButtons = document.querySelectorAll(".minus");
    const deleteButtons = document.querySelectorAll(".delete-btn");
    const heartIcons = document.querySelectorAll(".heart");
    const totalCostElement = document.getElementById("total-cost");
  
    // Update total cost function
    function updateTotalCost() {
      let totalCost = 0;
      const boxes = document.querySelectorAll(".box");
      boxes.forEach((box) => {
        const price = parseFloat(box.querySelector(".price").textContent.slice(1));
        const quantity = parseInt(box.querySelector(".quantity").value, 10);
        totalCost += price * quantity;
      });
      totalCostElement.innerHTML = `<h2>Total Cost: $${totalCost.toFixed(2)}</h2>`;
    }
  
    // Add event listeners to plus buttons
    for (let i = 0; i < plusButtons.length; i++) {
      plusButtons[i].addEventListener("click", function () {
        const quantityInput = this.parentElement.querySelector(".quantity");
        let currentQuantity = parseInt(quantityInput.value, 10 );
        quantityInput.value = currentQuantity + 1;
        updateTotalCost();
      });
    }
  
    // Add event listeners to minus buttons
    for (let i = 0; i < minusButtons.length; i++) {
      minusButtons[i].addEventListener("click", function () {
        const quantityInput = this.parentElement.querySelector(".quantity");
        let currentQuantity = parseInt(quantityInput.value, 10);
        if (currentQuantity > 0) {
          quantityInput.value = currentQuantity - 1;
        }
        updateTotalCost();
      });
    }
  
    // Add event listeners to delete buttons
    for (let i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener("click", function () {
        this.parentElement.remove();
        updateTotalCost();
      });
    }
  
    // Add event listeners to heart icons
    for (let i = 0; i < heartIcons.length; i++) {
      heartIcons[i].addEventListener("click", function () {
        if (this.style.color === "black") {
          this.style.color = "red";
        } else {
          this.style.color = "black";
        }
      });
    }
  
    // Initial total cost update
    updateTotalCost();
  });
  


// Add event listeners to heart icons
for (let i = 0; i < heartIcons.length; i++) {
  heartIcons[i].addEventListener("click", function () {
    if (this.classList.contains("full")) {
      this.classList.remove("full");
    } else {
      this.classList.add("full");
    }
  });
}


