import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookInfo from "./components/BookInfo/BookInfo";
import BookList from "./components/BookList/BookList";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={BookList} />
          <Route path="/book/:id" Component={BookInfo} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
