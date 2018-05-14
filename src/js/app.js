(function () {

    console.log("tu écris ton code ici :)");

    const pokemonData = fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json");
    const listPokemon = document.querySelector(".list-pokemon");
    const arrayPokemon = [];

    pokemonData
        .then((data) => data.json())
        .then((data) => arrayPokemon.push(...data.pokemon))
        .then(() => {
            arrayPokemon.map((pokemon) => {
                const blockPokemon = document.createElement("li");
                blockPokemon.className = "col-lg-4";
                listPokemon.appendChild(blockPokemon);
                blockPokemon.innerHTML = `
                    <img src="${pokemon.img}" alt="${pokemon.name}">
                    <h4>${pokemon.name}</h4>
                    <p class="desc"><strong>Poids : </strong>${pokemon.weight}</p>
                    <p class="desc"><strong>Taille :</strong> ${pokemon.height}</p>
                `;
            })
        });
})();