import ListItem from "../ListItem/ListItem";
import { useGetBooksQuery } from "../../Store/fetchBooks";
import { Button, CircularProgress } from "@mui/material";
import {
  getCount,
  getFilter,
  getSearch,
  getSort,
  increaseCount,
} from "../../Store/totalState";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { Book, Books } from "../../interfaces/books";

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const search = useSelector(getSearch);
  const count = useSelector(getCount);
  const filter = useSelector(getFilter);
  const sort = useSelector(getSort);
  const dispatch = useDispatch();
  const { data, isFetching } = useGetBooksQuery({
    search,
    count,
    sort,
  });

  const filtredData = useMemo(() => {
    if (filter == "All") {
      return books;
    } else {
      return books.filter((e: Book) => {
        return e.volumeInfo?.categories?.includes(filter);
      });
    }
  }, [books, filter]);

  

  useEffect(() => {
    if (count === 1) {
      setBooks([]);
    }
  }, [sort, count]);

  

  useEffect(() => {
    if (count === 1) {
      if (data) {
        setBooks([...data?.items]);
      }
    } else {
      const items = data ? [...data!.items] : []
      setBooks([...books, ...items]);
    }
  }, [data]);

  const components = useMemo(() => {
    return filtredData?.map((el: Book, index: number) => (
      <ListItem  key={index} data={el} />
    ));
  }, [filtredData]);

  return (
    <>
      {!isFetching ? (
        <div style={{ textAlign: "center", margin: 10 }}>
          Found {data?.totalItems} results
        </div>
      ) : (
        ""
      )}
      <div
        style={{
          margin: 10,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {isFetching && count === 1 ? <CircularProgress /> : components}
      </div>
      <Button
        disabled={isFetching}
        onClick={() => dispatch(increaseCount())}
        style={{ margin: "10px auto", display: "block" }}
        variant="contained"
        color="primary"
      >
        Load more
      </Button>
    </>
  );
};

export default BookList;
