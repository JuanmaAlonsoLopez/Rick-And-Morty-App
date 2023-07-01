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
      if (data) dispatch({ type: ADD_FAV, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function removeFav(id) {
  return async function (dispatch) {
    try {
      const data = await fetch(`http://localhost:3001/fav/${id}`, {
        method: 'DELETE',
      }).then((response) => response.json());

      if (data.success) dispatch({ type: REMOVE_FAV, payload: id });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getFavs() {
  return async function (dispatch) {
    try {
      const data = await fetch(`http://localhost:3001/fav/`).then((response) =>
        response.json()
      );

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

      if (obj.access) dispatch({ type: 'LOGIN', payload: obj.id });
    } catch (error) {
      console.log(error);
    }
  };
}
