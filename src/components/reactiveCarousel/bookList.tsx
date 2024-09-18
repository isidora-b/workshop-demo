import img1 from "../../assets/book-img-1.svg";
import img2 from "../../assets/book-img-2.svg";
import img3 from "../../assets/book-img-3.svg";
import img4 from "../../assets/book-img-4.svg";
import img5 from "../../assets/book-img-5.svg";

export interface Book {
  id: string;
  author: string;
  image_url: string;
  rating: string | null;
  title: string;
  availability: string;
}

const bookList: Book[] = [
  {
    id: "1",
    author: "Nicholas Epley",
    image_url: img1,
    rating: "5",
    title: "Mindwise: Why we misunderstand what others...",
    availability: "Available",
  },
  {
    id: "2",
    author: "Daniel H. Pink",
    image_url: img2,
    rating: null,
    title: "When: The scientific secrets of perfect timing",
    availability: "Available",
  },
  {
    id: "3",
    author: "Nir Eyal",
    image_url: img3,
    rating: "5",
    title: "Hooked: How to build habit-forming products",
    availability: "Available",
  },
  {
    id: "4",
    author: "Daniel Kahneman",
    image_url: img4,
    rating: "4",
    title: "Thinking, fast and slow",
    availability: "Available",
  },
  {
    id: "5",
    author: "Yasmeen Turayhi",
    image_url: img5,
    rating: "3",
    title: "Product marketing debunked: The essential...",
    availability: "Available",
  },
  {
    id: "6",
    author: "Nicholas Epley",
    image_url: img1,
    rating: null,
    title: "Mindwise: Why we misunderstand what others...",
    availability: "Available",
  },
  {
    id: "7",
    author: "Daniel H. Pink",
    image_url: img2,
    rating: "4",
    title: "When: The scientific secrets of perfect timing",
    availability: "Available",
  },
];

export default bookList;
