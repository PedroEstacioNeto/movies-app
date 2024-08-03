import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar";
import MovieList from "@/components/movieList";

export default function Home() {
  return (
    <div>
      <MovieList />
    </div>
  );
}
