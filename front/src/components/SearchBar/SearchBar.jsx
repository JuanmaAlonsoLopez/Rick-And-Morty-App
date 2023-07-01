import { useState } from "react";

// CSS MODULES
import css from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [character, setCharacter] = useState(0);

  const handleSearch = (event) => {
    let { value } = event.target;
    setCharacter(value);
  };

  return (
    <div>
      <input style={css.input} type="search" onChange={handleSearch} />
      <button style={css.button} onClick={() => props.onSearch(character)}>
        Add
      </button>
      <button style={css.button} onClick={props.random}>
        Random Character
      </button>
    </div>
  );
}
