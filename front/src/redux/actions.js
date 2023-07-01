<<<<<<< HEAD
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const GET_FAVS = 'GET_FAVS';

export function addFav(personaje) {
  return async function (dispatch) {
    try {
      const data = await fetch('http://localhost:3001/fav', {
        method: 'POST',
        body: JSON.stringify(personaje),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json());
=======
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const GET_FAVS = "GET_FAVS";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

// export function addFav(personaje) {
//   return {
//     type: ADD_FAV,
//     payload: personaje,
//   };
// }

// export function removeFav(id) {
//   return {
//     type: REMOVE_FAV,
//     payload: id,
//   };
// }

export function addFav(personaje, idUser) {
  return async function (dispatch) {
    try {
      // await fetch("http://localhost:3001/fav", {
      //   method: "POST",
      //   body: JSON.stringify(personaje),
      //   headers: {
      //     "Content-type": "application/json; charset=UTF-8",
      //   },
      // })
      //   .then((response) => response.json())
      //   .then((data) =>
      //     dispatch({
      //       type: ADD_FAV,
      //       payload: data,
      //     })
      //   );

      const data = await fetch(`http://localhost:3001/fav?idUser=${idUser}`, {
        method: "POST",
        body: JSON.stringify(personaje),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => response.json());

>>>>>>> 0f3850301f2b96b45d73babcd65f1119cf56a3b0
      if (data) dispatch({ type: ADD_FAV, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

<<<<<<< HEAD
export function removeFav(id) {
  return async function (dispatch) {
    try {
      const data = await fetch(`http://localhost:3001/fav/${id}`, {
        method: 'DELETE',
      }).then((response) => response.json());
=======
export function removeFav(id, idUser) {
  return async function (dispatch) {
    try {
      // await fetch(`http://localhost:3001/fav/${id}`, {
      //   method: "DELETE",
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     if (data.success) dispatch({ type: REMOVE_FAV, payload: id });
      //   });

      const data = await fetch(
        `http://localhost:3001/fav/${id}?idUser=${idUser}`,
        {
          method: "DELETE",
        }
      ).then((response) => response.json());
>>>>>>> 0f3850301f2b96b45d73babcd65f1119cf56a3b0

      if (data.success) dispatch({ type: REMOVE_FAV, payload: id });
    } catch (error) {
      console.log(error);
    }
  };
}

<<<<<<< HEAD
export function getFavs() {
  return async function (dispatch) {
    try {
      const data = await fetch(`http://localhost:3001/fav/`).then((response) =>
        response.json()
      );
=======
export function getFavs(idUser) {
  return async function (dispatch) {
    try {
      const data = await fetch(
        `http://localhost:3001/fav?idUser=${idUser}`
      ).then((response) => response.json());
>>>>>>> 0f3850301f2b96b45d73babcd65f1119cf56a3b0

      if (data) dispatch({ type: GET_FAVS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterCards(status) {
  return {
    type: FILTER,
    payload: status,
  };
}

export function orderCards(id) {
  return {
    type: ORDER,
    payload: id,
  };
}

export function login(email, password) {
  return async function (dispatch) {
    try {
      const obj = await fetch(
        `http://localhost:3001/login?email=${email}&password=${password}`
      ).then((response) => response.json());
      
      if (obj.access) dispatch({ type: "LOGIN", payload: obj.id });
    } catch (error) {
      console.log(error);
    }
  };
}
