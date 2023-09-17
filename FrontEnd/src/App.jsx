import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import PageNotFound from "./components/PageNotFound";
import "./App.css";
import DetailsPage from "./components/DetailsPage";
import Navbar from "./components/NavBar";

function App() {
  const [gameQuery, setGameQuery] = useState({
    platform: null,
    genre: null,
    sortOrder: null,
  });
  const onSelectGenre = (genre) => setGameQuery({ ...gameQuery, genre });

  return (
    <>
      <Navbar
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
      </Routes>
    </>
  );
}

export default App;
