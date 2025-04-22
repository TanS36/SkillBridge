//MainPage.jsx
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Search from "../components/Search/Search";
import MainIntro from "../components/MainIntro/MainIntro";

const MainPage = () => {
  return (
    <>
      <Header />
      <MainIntro />
      <Search />
      <Footer />
    </>
  );
};

export default MainPage;