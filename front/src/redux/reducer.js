<<<<<<< HEAD
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_FAVS } from './actions';
=======
import { ADD_FAV, REMOVE_FAV, GET_FAVS, FILTER, ORDER } from "./actions";
>>>>>>> 0f3850301f2b96b45d73babcd65f1119cf56a3b0

const initialState = {
  idUser: 0,
  allMyFavorites: [],
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVS:
      return {
        ...state,
        allMyFavorites: [...action.payload],
        myFavorites: [...action.payload],
      };
    case ADD_FAV:
      const addFavorites = [...state.allMyFavorites, action.payload];
      return {
        ...state,
        allMyFavorites: [...addFavorites],
        myFavorites: [...addFavorites],
      };
    case REMOVE_FAV:
      const deleteFavorites = state.allMyFavorites.filter(
        (e) => e.id !== action.payload
      );
      return {
        ...state,
        allMyFavorites: [...deleteFavorites],
        myFavorites: [...deleteFavorites],
      };
    case FILTER:
      return {
        ...state,
        myFavorites: state.allMyFavorites.filter(
          (e) => e.gender === action.payload
        ),
      };
    case ORDER:
      // let orderFavorites;
      // if (action.payload === "Ascendente") {
      //   orderFavorites = state.myFavorites.sort((a, b) =>
      //     a.id > b.id ? 1 : -1
      //   );
      // } else {
      //   orderFavorites = state.myFavorites.sort((a, b) =>
      //     a.id < b.id ? 1 : -1
      //   );
      // }
      let orderFunction =
<<<<<<< HEAD
        action.payload === 'Ascendente'
=======
        action.payload === "Ascendente"
>>>>>>> 0f3850301f2b96b45d73babcd65f1119cf56a3b0
          ? (a, b) => {
              return a.id > b.id ? 1 : -1;
            }
          : (a, b) => {
              return a.id < b.id ? 1 : -1;
            };
      let orderFavorites = state.myFavorites.sort(orderFunction);
      return {
        ...state,
        myFavorites: [...orderFavorites],
      };
    case 'RESET':
      return {
        ...state,
        myFavorites: state.allMyFavorites,
      };
    case "LOGIN":
      return {
        ...state,
        idUser: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
