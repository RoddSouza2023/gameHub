import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import PageNotFound from "./components/PageNotFound";
import DetailsPage from "./components/DetailsPage";
import CheckOut from "./components/CheckOut";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import VerifyEmail from "./components/VerifyEmail";
import GuestCart from "./components/GuestCart";
import useCart from "./hooks/useCart";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [gameQuery, setGameQuery] = useState({
    platform: null,
    genre: null,
    sortOrder: null,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") || false
  );
  const token = localStorage.getItem("accessToken");
  const { getResponse } = useCart(token);
  const [cartLength, setCartLength] = useState(0);
  const onSelectGenre = (genre) => setGameQuery({ ...gameQuery, genre });

  useEffect(() => {
    let length = 0;
    if (token) {
      getResponse.cart?.forEach((item) => {
        length += item.quantity;
      });
      setCartLength(length);
    } else {
      JSON.parse(localStorage.getItem("guest_cart")).forEach((item) => {
        length += item.quantity;
      });
      setCartLength(length);
    }
  }, [getResponse, isLoggedIn]);

  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        cartLength={cartLength}
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
        <Route
          path='/games/:slug'
          element={
            <DetailsPage
              isLoggedIn={isLoggedIn}
              setCartLength={setCartLength}
              cartLength={cartLength}
            />
          }
        ></Route>
        <Route path='*' element={<PageNotFound />}></Route>
        <Route
          path='/login'
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        ></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/verify' element={<VerifyEmail />}></Route>
        <Route
          path='/cart'
          element={
            isLoggedIn ? (
              <Cart cartLength={cartLength} setCartLength={setCartLength} />
            ) : (
              <GuestCart
                cartLength={cartLength}
                setCartLength={setCartLength}
              />
            )
          }
        ></Route>
        <Route path='/checkout' element={<CheckOut token={token} />}></Route>
      </Routes>
    </>
  );
}

export default App;
