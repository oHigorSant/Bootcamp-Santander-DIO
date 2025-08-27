const cardWrapper = document.querySelector(".card-wrapper");

const loadPokemons = async (count = 1000) => {
  for (let i = 1; i <= count; i++) {
    const pokemon = await fetchPokemon(i);
    createPokemonCard(pokemon);
  }
};

const fetchPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const createPokemonCard = (pokemon) => {
  const card = document.createElement("section");
  const mainType = pokemon.types[0].type.name;

  card.classList.add("card", mainType);

  const formattedId = String(pokemon.id).padStart(3, "0");
  const capitalizedName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  card.innerHTML = `
        <div class="texts">
          <h3>#${formattedId}</h3>
          <h2>${capitalizedName}</h2>
          
          <ul>
            ${pokemon.types
              .map(
                (type) => `<li class="${type.type.name}">${type.type.name}</li>`
              )
              .join("")}
            
          </ul>
        </div>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
          pokemon.id
        }.png" alt="${pokemon.name}" />
      `;

  cardWrapper.appendChild(card);
};

loadPokemons();
