import { CircularProgress, TextareaAutosize, Typography } from "@mui/material";
import { padding } from "@mui/system";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../../Store/fetchBooks";

const BookInfo = () => {
  const { id } = useParams();

  const { data, isFetching } = useGetBookQuery(id!);
  const book = data && data.volumeInfo;

  return (
    <>
      {isFetching ? (
        <CircularProgress style={{ display: "block", margin: "10px auto" }} />
      ) : (
        <div className="book_parts" style={{ display: "flex", width: "100%", height: "100%" }}>
          <div
            className="part_1"
            style={{
              background: "#F3F2F1",
              flex: 0.4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2%",
            }}
          >
            <img
              width={250}
              height={350}
              src={book?.imageLinks.thumbnail}
              alt="book"
            />
          </div>
          <div style={{ flex: 0.6, padding: "2%" }} className="part_2">
            <Typography variant="body2" color="text.secondary">
              {book?.categories ? book?.categories : ""}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {book?.title}
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              color={"GrayText"}
              style={{ textDecoration: "underline" }}
              component="div"
            >
              {book?.authors}
            </Typography>

            {book?.description ? (
              <>
                <Typography gutterBottom variant="h5" component="div">
                  About
                </Typography>{" "}
                {HTMLReactParser(book?.description ? book.description : "")}
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BookInfo;
