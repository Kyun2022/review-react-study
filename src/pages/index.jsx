// Components Imports
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

const Home = (props) => {
  return (
    <div>
      <Header />
      <Main page="index" title="Index" />
    </div>
  );
};

export default Home;
