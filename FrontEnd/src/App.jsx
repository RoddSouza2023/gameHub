import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import PageNotFound from "./components/PageNotFound";
import "./App.css";
import DetailsPage from "./components/DetailsPage";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";

function App() {
  const [gameQuery, setGameQuery] = useState({
    platform: null,
    genre: null,
    sortOrder: null,
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const onSelectGenre = (genre) => setGameQuery({ ...gameQuery, genre });

  useEffect(() => {
    async function autoLogin() {
      const data = await fetch("http://localhost:8080/api/v1/user/autoLogin", {
        method: "GET",
        credentials: "same-origin",
      });

      const response = await data.json();
      console.log(response);
      setLoggedIn(response.success);
    }
    autoLogin();
  }, []);

  return (
    <>
      <Navbar
        setLoggedIn={setLoggedIn}
        loggedIn={loggedIn}
        onSelectGenre={onSelectGenre}
        selectedGenre={gameQuery.genre}
        onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
      />
      <Routes>
        <Route
          path='/'
          element={
            <MainPage
              gameQuery={gameQuery}
              setGameQuery={setGameQuery}
              onSelectGenre={onSelectGenre}
            />
          }
        ></Route>
        <Route path='/:gameId' element={<DetailsPage />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
        <Route
          path='/login'
          element={<Login setLoggedIn={setLoggedIn} />}
        ></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default App;
