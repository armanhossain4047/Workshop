

  async function fetchAndDisplayCards() {
    try {
      const response = await fetch('../data.json');
      const data = await response.json();


      const cardContainer = document.getElementById("cardContainer");


      data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card bg-base-100 w-96 shadow-xl";

        card.innerHTML = `
          <figure class="px-10 pt-10">
            <img src="${item.image}" alt="${item.name}" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">${item.designation}</h2>
            <p>${item.name}</p>
          </div>
        `;
        cardContainer.appendChild(card);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  fetchAndDisplayCards();
