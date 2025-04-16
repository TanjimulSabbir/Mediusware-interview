import BlogHero from "./components/BlogHero";
import AllBlogs from "./components/AllBlogs";
import BlogHeader from "./components/BlogHeader";
// import Footer from "./components/Footer";
// import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className=" bg-gradient-to-l from-[#EEF4F9] from-10% via-[#EAF7F5] via-30% to-[#EEF4F9] to-90%">
        <div className="container m-auto">
          <BlogHeader />
          <AllBlogs />
          <BlogHero />
        </div>
      </div>
    </>
  );
}

export default App;
