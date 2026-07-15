import { useEffect, useState } from "react";
import CharacterList from "../componentes/CharacterList";
import SearchBar from "../componentes/SearchBar";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
       })
    .catch((error) => {
      console.error("Error al obtener los personajes:", error);
      });
  }, []);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );
  if (filteredCharacters.length === 0) {
  return (
    <div>
      <h2>Personajes</h2>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <p className="error">No se encontraron personajes.</p>
    </div>
  );
}

  return (
    <div>
      <h2>Personajes</h2>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <CharacterList characters={filteredCharacters} />
    </div>
    
  );
}



export default Home;