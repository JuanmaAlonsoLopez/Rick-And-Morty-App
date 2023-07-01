import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions";
import { IoCloseCircleOutline } from "react-icons/io5";

// STYLE COMPONENTS

const DivCard = styled.div`
  display: inline-block;
  background-color: rgb(72, 61, 139, 0.7);
  border-radius: 10px;
  color: white;
  overflow: hidden;
  margin: 15px 0px;
  max-width: 18.8rem;
`;

const Button = styled.button`
  background-color: pink;
  color: purple;
  border: 0px;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 15px;
  margin: 15px 15px 0px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// INLINE STYLES

const styleSpecie = {
  display: "inline-block",
  fontSize: "16px",
  color: "violet",
  marginRight: "15px",
  marginTop: "-10px",
};

const styleGender = {
  display: "inline-block",
  fontSize: "16px",
  color: "deeppink",
  marginTop: "-10px",
};

// const styleName = {
//   position: 'relative',
//   bottom: '-280px',
//   backgroundColor: 'rgb(0,0,0,0.5)',
//   padding: '5px',
//   display: 'inline-block',
// }

export function Card(props) {
  const [isFav, setIsFav] = useState(props.fav);

  useEffect(() => {
    props.myFavorites &&
      props.myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
  });

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id, props.idUser);
    } else {
      setIsFav(true);
      props.addFav({
        name: props.name,
        species: props.species,
        gender: props.gender,
        image: props.image,
        id: props.id,
      }, props.idUser);
    }
  }

  return (
    <DivCard>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {isFav ? (
          <Button onClick={handleFavorite}>❤️</Button>
        ) : (
          <Button onClick={handleFavorite}>🤍</Button>
        )}
        {props.onClose && <Button onClick={props.onClose}><IoCloseCircleOutline /></Button>}
      </div>
      <Link
        to={`/detail/${props.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <h2>{props.name}</h2>
      </Link>
      <h2 style={styleSpecie}>{props.species}</h2>
      <h2 style={styleGender}>{props.gender}</h2>
      {/* <h2 style={styleName}>{props.name}</h2> */}
      <img style={{ display: "block" }} src={props.image} alt="" />
    </DivCard>
  );
}

export function mapStateToProps(state) {
  return {
    idUser: state.idUser,
    myFavorites: state.myFavorites,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: function (personaje, idUser) {
      dispatch(addFav(personaje, idUser));
    },
    removeFav: function (id, idUser) {
      dispatch(removeFav(id, idUser));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
