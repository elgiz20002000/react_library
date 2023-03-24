export interface Books {
    totalItems:number
    items:Book[]
    
}


export interface Book {
  id:string
  volumeInfo: {
    authors: string[];
    imageLinks: { smallThumbnail: string; thumbnail: string };
    title: string;
    categories?: string[];
    description:string
  }

}
