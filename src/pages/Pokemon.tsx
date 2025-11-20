import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

type Pokemon = {
    name: string,
    sprites: {
        front_default: string
    }
}

const Pokemon = () => {
  const {name} = useParams()
  const [pokemon, setPokemon] = useState<Pokemon>()

  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/" + name)
    .then(res => res.json())
    .then(data => setPokemon(data))
  },[])

  return (
    <div>
        {
            pokemon && <div>
                <h1>A pokémon neve: {pokemon.name}</h1>
                <img src={pokemon.sprites.front_default} />
            </div>
        }
    </div>
  )
}

export default Pokemon