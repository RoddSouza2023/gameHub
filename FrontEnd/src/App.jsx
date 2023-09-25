import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import PageNotFound from "./components/PageNotFound";
import DetailsPage from "./components/DetailsPage";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import VerifyEmail from "./components/VerifyEmail";
import GuestCart from "./components/GuestCart";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [gameQuery, setGameQuery] = useState({
    platform: null,
    genre: null,
    sortOrder: null,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const onSelectGenre = (genre) => setGameQuery({ ...gameQuery, genre });
  //   async function autoLogin() {
  //     const data = await fetch("http://localhost:8080/api/v1/user/autoLogin", {
  //       method: "GET",
  //       credentials: "same-origin",
  //     });

  //     const response = await data.json();
  //     console.log(response);
  //     setLoggedIn(response.success);
  //   }
  //   autoLogin();
  // }, []);

  return (
    <>
      <Navbar
        setIsLoggedIn={setIsLoggedIn}
        onSelectGenre={onSelectGenre}
        selectedGenre={gameQuery.genre}
        onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        setCurrentPage={setCurrentPage}
      />
      <Routes>
        <Route
          path='/'
          element={
            <MainPage
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              gameQuery={gameQuery}
              setGameQuery={setGameQuery}
              onSelectGenre={onSelectGenre}
            />
          }
        ></Route>
        <Route path='/games/:slug' element={<DetailsPage />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
        <Route
          path='/login'
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        ></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/verify' element={<VerifyEmail />}></Route>
        <Route
          path='/cart'
          element={isLoggedIn ? <Cart /> : <GuestCart />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
