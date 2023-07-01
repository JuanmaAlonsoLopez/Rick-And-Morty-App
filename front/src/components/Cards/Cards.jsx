import Card from "../Card/Card";
import SContainer from "../SContainer/SContainer";
import styled from "styled-components";

// IMPORTED STYLE COMPONENT

export default function Cards(props) {
  const { characters } = props;
  let i = 0;
  return (
    <SContainer>
      {characters.length === 0 ? (
        <p style={{ color: "violet", marginTop: "150px", fontSize: "24px" }}>
          ¡Busca un personaje!
        </p>
      ) : (
        characters.map((e) => (
          <Card
            id={e.id}
            name={e.name}
            species={e.species}
            gender={e.gender}
            image={e.image}
            onClose={() => props.onClose(e.id)}
            key={i++}
          />
        ))
      )}
    </SContainer>
  );
}
