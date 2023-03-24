import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { FormEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setDefaultCount,
  setFilter,
  setSearch,
  setSort,
} from "../../Store/totalState";
import "./Header.scss";
const Header = () => {
  const dispatch = useDispatch();
  const [search, setSearchs] = useState("");
  const [sort, setSorts] = useState("relevance");
  const [filter, setFilters] = useState("All");
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setDefaultCount());
    dispatch(setSearch(search));
    dispatch(setSort(sort));
    dispatch(setFilter(filter));
    navigate("/");
  };
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "45vh",
        padding:10,
        background:
          "url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3028&q=80) center center / cover no-repeat",
      }}
    >
      <form
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            onSubmit(e);
          }
        }}
        onSubmit={onSubmit}
        style={{
          background: "#607d8b",
          padding: 40,
          borderRadius: 4,
          width:'50%',
          height: "min-content",
          maxHeight:'90%'
        }}
      >
        <h1 style={{ color: "white", textAlign: "center" }}>
          Search for books
        </h1>

        <div className="search">
          <label htmlFor="search">Search</label>
          <TextField
            size="small"
            style={{ background: "white", borderRadius: 4, width: "100%" }}
            id="search"
            variant="outlined"
            onChange={(e) => setSearchs(e.target.value)}
          />
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", margin: 10 }}
          className="selects"
        >
          <div className="select">
            <FormControl
              style={{ display: "flex", alignItems: "center" }}
              fullWidth
            >
              <label htmlFor="categories">Categories</label>
              <Select
                onChange={(e) => setFilters(e.target.value)}
                size="small"
                style={{ background: "white", width: "100%" }}
                labelId="demo-simple-select-label"
                id="categories"
                value={filter}
              >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"Art"}>Art</MenuItem>
                <MenuItem value={"Biography"}>Biography</MenuItem>
                <MenuItem value={"Computers"}>Computers</MenuItem>
                <MenuItem value={"History"}>History</MenuItem>
                <MenuItem value={"Medical"}>Medical</MenuItem>
                <MenuItem value={"Poetry"}>Poetry</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="select">
            <FormControl
              style={{ display: "flex", alignItems: "center" }}
              fullWidth
            >
              <label htmlFor="sort">Sorting by</label>
              <Select
                onChange={(e) => setSorts(e.target.value)}
                size="small"
                style={{ background: "white", width: "100%" }}
                labelId="demo-simple-select-label"
                id="sort"
                value={sort}
              >
                <MenuItem value={"relevance"}>Relevance</MenuItem>
                <MenuItem value={"newest"}>Newest</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <Button
          style={{ display: "block", margin: "0 auto" }}
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </form>
    </header>
  );
};

export default Header;
