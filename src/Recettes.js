fetch("recettes.json")
  .then(response => response.json())
  .then(data => {

    const container =
      document.getElementById("recettes");

    data.forEach(recette => {

      container.innerHTML += `
        <div class="card">

          <h3>${recette.nom}</h3>

          <p>
            ⏱ ${recette.temps} min
          </p>

          <p>
            🥩 ${recette.proteines} g protéines
          </p>

        </div>
      `;

    });

  });

