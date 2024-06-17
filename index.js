document.addEventListener("DOMContentLoaded", function () {
  renderPokemons().then(() => {
    document.getElementById('preloader').classList.remove('flex');
    document.getElementById('preloader').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
  });
  bindTypeBtn();
});

document.getElementById('menuBtn').addEventListener('click', function() {
  const menu = document.getElementById('sideMenu');
  menu.classList.toggle('menu-open');
  menu.classList.toggle('menu-closed');
});

function bindTypeBtn() {
  const buttons = document.querySelectorAll(".badge");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function(event) {
      const pokemonList = document.querySelector("#pokemon-list");

      if (event.target.id == "all-types") {
        pokemonList.innerHTML = "";
        renderPokemons()
      }
      else {
        fetchTypes(event.target.id)
      }
    })
  })
}

async function fetchTypes(type) {
  const data = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
    .then((response) => response.json());

  const pokemonList = document.querySelector("#pokemon-list");
  const pokemons = data.pokemon;
  pokemonList.innerHTML = "";
  pokemons.forEach((pokemon) => fetchPokemon(pokemon.pokemon));
}

async function renderPokemons() {
  await fetchPokemons().then((pokemons) => pokemons.forEach(fetchPokemon))
}

function fetchPokemon(pokemon) {
  fetch(pokemon.url)
    .then((response) => response.json())
    .then(showPokemon);
}

async function fetchPokemons(url = "https://pokeapi.co/api/v2/pokemon?limit=100") {
  const data = await fetch(url)
    .then((response) => response.json());

  const pokemons = data.results
  const nextUrl = data.next
  if (nextUrl) { 
    return [...pokemons, ...await fetchPokemons(nextUrl)] 
  }
  else {
    return pokemons
  }
}

function typesBadges(types) {
  return types
    .map(
      ({ type }) => `<img class="h-7 min-w-7" src="./assets/images/${type.name}_Icon.png">`
    )
    .join("");
}


function showPokemon(pokemon) {
  const div = document.createElement("div");
  const pokemonList = document.querySelector("#pokemon-list");
  const pokemonTypes = typesBadges(pokemon.types);
  const typeClasses = pokemon.types.map(( {type} ) => type.name).join("-")
  
  div.classList.add("card", "group");
  div.innerHTML = `
    <div class="card-bg-${typeClasses} flex flex-col justify-center h-[100%] p-2 rounded-md">
      <div>
        <span class="absolute flex left-5 top-5 py-1 px-2 gap-1">${pokemonTypes}</span>
        <span class="absolute right-6 top-5 text-3xl allan-bold text-zinc-800 transition-transform group-hover:text-zinc-100" style="text-shadow: 0.15rem 0.15rem 0.15rem rgb(195, 195, 195)">#${pokemon.id}</span>
      </div>
      <div class="flex justify-center p-2 transition-transform hover:scale-110">
        <img class="max-h-[13rem]" src="${pokemon.sprites.other["official-artwork"].front_default}"/>
      </div>
    </div>
    <div class="p-2">
        <span class="absolute bottom-[5%] left-[1.1rem] px-2 pt-[0.6rem] pb-[0.8rem] bg-black text-white text-2xl text-center bangers tracking-widest" style="clip-path: ellipse(80% 28% at 50% 50%);">${pokemon.name}</span>
    </div>
  `;

  pokemonList.append(div);
}