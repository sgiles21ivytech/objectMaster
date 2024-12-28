/*
Shanon Giles
12/25/24
Object Master
*/


const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// Array 1:
// An array of pokémon objects where the id is evenly divisible by 3
const pokemonDivideBy = pokemon.filter(selectPokemonIds => selectPokemonIds.id % 3 === 0)
//console.table(pokemonIdBy3)



// Array 2:
// An array of pokemon objects that are "fire" type
const pokemonFireType = pokemon.filter(({types}) => types[0] === "fire")  
//console.table(pokemonFireType)


// Array 3:
// An array of pokemon objects that have more than one type
const pokemonMultiType = pokemon.filter(({types}) => types.length > 1)
//console.table(pokemonMultiType)


// Array 4:
// An array with just the names of the pokemon
const pokemonNames = pokemon.map(getNames => getNames.name)
//console.table(PokemonNames)

// Array 5:
// An array with just the names of pokémon with an id greater than 99
const pokemonNamesbyId = pokemon.filter(getNamesbyId => getNamesbyId.id > 99).map(pokemonName => pokemonName.name)
//console.log(PokemonNamesbyId)

// Array 6:
// An array with just the names of the pokémon whose only type is poison
const pokemonTypePoison = pokemon.filter(({types}) => types.length === 1 && types[0] === "poison").map(pokemonName => pokemonName.name)
//console.log(PokemonTypePoison)

// Array 7:
// An array containing just the first type of all the pokémon whose second type is "flying"
const pokemensecondType = pokemon.filter(({types}) => types.length === 2 && types[1] === "flying").map(({types}) => types[0])
//console.table(pokemensecondType)


// Array 8:
// A count of the number of pokémon that are "normal" type
let countNormalPokemon = 0
pokemon.forEach(({types}) => types.forEach(getNormalPokemon => getNormalPokemon === "normal" ? countNormalPokemon++ : null) )
//console.log(`There are ${countNormalPokemon} normal type Pokemon`)

// Array 9:
// An array with all pokemon except the pokemon with the id of 148
const allPokemonexpect1 = pokemon.filter(getPokemonbyId => getPokemonbyId.id != 148)
//console.table(allPokemonexpect1)

// Array 10:
// An array with all pokemon and for pokemon id: 35 replacing "normal" with "fairy"
const modifyPokemon = pokemon.map(modifyId35 => modifyId35.id === 35 ? {...modifyId35, types: modifyId35.types.map(changeType => changeType === 'normal' ? 'fairy': type)} : modifyId35)
//console.table(modifyPokemon)
