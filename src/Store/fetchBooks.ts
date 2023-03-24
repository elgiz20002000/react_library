import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Book, Books } from "../interfaces/books";
const apiKeyResponse = ":keyes&key=AIzaSyAQGcyU62NrCcF3GuLna-fLAB2RGZay2mw";

export const libraryApi = createApi({
  reducerPath: "libraryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/books/v1/",
  }),
  endpoints: (build) => ({
    getBooks: build.query<Books,
      { search: string; count: number; sort: string }
    >({
      query: (values) => {
        return `volumes?q=${values.search}${apiKeyResponse}&orderBy=${
          values.sort
        }&maxResults=40&startIndex=${values.count || 1}`;
      },
    }),getBook: build.query<Book, string>({
      query: (id) => {
        return `volumes/${id}?${apiKeyResponse}`;
      },
    }),
  }),
});

export const { useGetBooksQuery, useGetBookQuery } = libraryApi;
