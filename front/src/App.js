import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Error from './components/Error/Error.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './redux/actions';

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const username = '@';
  const password = '1';

  const dispatch = useDispatch();
  const user = useSelector((state) => state.idUser);

  function logIn(userData) {
    dispatch(login(userData.username, userData.password));
    if (user) {
      setAccess(true);
      navigate('/home');
    }
  }

  function logout() {
    setAccess(false);
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  function onSearch(character) {
    // fetch(`https://rickandmortyapi.com/api/character/${character}`)
    fetch(`http://localhost:3001/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          characters.find((element) => element.id === data.id) === undefined
            ? setCharacters((characters) => [...characters, data])
            : alert('Personaje repetido, prueba otro ID.');
        } else {
          alert('No hay personajes con ese ID.');
        }
      });
  }

  function random() {
    let randomId = Math.floor(Math.random() * 826);
    onSearch(randomId);
  }

  function onClose(id) {
    setCharacters(characters.filter((element) => element.id !== id));
  }

  const location = useLocation();

  return (
    <div className="App" style={{ padding: '25px' }}>
      {location.pathname !== '/' && (
        <Nav onSearch={onSearch} random={random} logout={logout} />
      )}

      <Routes>
        <Route exact path="/" element={<Form logIn={logIn} />}></Route>
        <Route
          exact
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/favorites" element={<Favorites />}></Route>
        <Route exact path="/detail/:detailId" element={<Detail />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
