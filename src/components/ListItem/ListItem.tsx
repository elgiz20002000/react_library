import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Book, Books } from "../../interfaces/books";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

interface propsType {
  data: Book;
}

const ListItem = ({ data }: PropsWithChildren<propsType>) => {
  const { authors, imageLinks, title, categories } = data.volumeInfo;

  const navigate = useNavigate();

  return (
    <Card sx={{ m: 1, width: 270, minHeight: 290, background: "#F3F2F1" }}>
      <CardActionArea
        onClick={() => navigate("/book/" + data.id)}
        style={{ height: "100%", display: "flex", alignItems: "flex-start" }}
      >
        <CardContent>
          <img
            style={{ display: "block", margin: "0 auto" }}
            src={imageLinks?.thumbnail}
            alt="book"
          />
          <Typography
            gutterBottom
            variant="subtitle1"
            color={"GrayText"}
            style={{ textDecoration: "underline" }}
            component="div"
          >
            {categories ? categories[0] : ""}
          </Typography>
          <Typography
            style={{ fontSize: 16 }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {authors}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ListItem;
