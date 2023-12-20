// Components Imports
import Head from "next/head";
import { Main } from "../../components/Main/Main";

const about = (props) => {
  return (
    <div>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main page="about" title="About" />
    </div>
  );
};

export default about;
