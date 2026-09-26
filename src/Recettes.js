// =========================
// AFFICHAGE LISTE RECETTES
// =========================

async function afficherRecettes() {

    const container =
        document.getElementById("liste-recettes");

    if (!container) return;

    try {

        const response =
            await fetch("../recettes.json");

        const recettes =
            await response.json();

        recettes.forEach(recette => {

            container.innerHTML += `

                <a href="Recette.html?id=${recette.id}" class="recipe-card">

                    <h3>${recette.nom}</h3>

                    <p>⏱ ${recette.temps} min</p>

                    <p>🥩 ${recette.proteines} g protéines</p>

                </a>

            `;

        });

    } catch (error) {

        container.innerHTML =
            "<p>Erreur de chargement des recettes.</p>";

        console.error(error);

    }

}

// =========================
// AFFICHAGE FICHE RECETTE
// =========================

async function afficherRecette() {

    const fiche =
        document.getElementById("fiche-recette");

    if (!fiche) return;

    try {

        const params =
            new URLSearchParams(
                window.location.search
            );

        const id =
            params.get("id");

        const response =
            await fetch("../recettes.json");

        const recettes =
            await response.json();

        const recette =
            recettes.find(r => r.id === id);

        if (!recette) {

            fiche.innerHTML =
                "<h2>Recette introuvable</h2>";

            return;

        }

        fiche.innerHTML = `

            <h1>${recette.nom}</h1>

            <div class="recipe-card">

                <p>⏱ ${recette.temps} min</p>

                <p>🥩 ${recette.proteines} g protéines</p>

                <p>🧵 Texture : ${recette.texture}</p>

            </div>

            <h2>Compatible avec</h2>

            <ul>

                ${recette.petitAppetit ? "<li>✅ Petit appétit</li>" : ""}

                ${recette.preOperatoire ? "<li>✅ Pré-opératoire</li>" : ""}

                ${recette.postOperatoire ? "<li>✅ Post-opératoire</li>" : ""}

                ${recette.sansGluten ? "<li>✅ Sans gluten</li>" : ""}

                ${recette.sansLactose ? "<li>✅ Sans lactose</li>" : ""}

                ${recette.vegetarien ? "<li>✅ Végétarien</li>" : ""}

                ${recette.vegetalien ? "<li>✅ Végétalien</li>" : ""}

            </ul>

            <h2>Envies associées</h2>

            <ul>

       
