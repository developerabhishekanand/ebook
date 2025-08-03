import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import FreeBook from "../components/Freebook";
import BookSectionWrapper from "../styles/homeStyle";

export default function Home() {
  return (
    <>
    <Banner />
    <BookSectionWrapper>
      <div className="book-section">
        <h1>Free Offerd Courses</h1>
        <h3 className="mb-3">Born into silence and shackles, a young rebel discovers her voice can unmake walls and rewrite laws. A poetic journey through identity, oppression, and the quiet power of unyielding hope.</h3>
        <div className=" freebook-section mt-6"><FreeBook /></div>
      </div>
    </BookSectionWrapper>
    
    </>
  );
}
