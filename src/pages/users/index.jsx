import Head from "next/head";
import { Header } from "src/components/Header";
import { UsersComponent } from "src/components/Users";
import { SWRConfig } from "swr";

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  const user = await fetch(API_URL);
  const userData = await user.json();

  return {
    props: {
      fallback: {
        [API_URL]: userData,
      },
    },
  };
};

const Users = (props) => {
  const { fallback } = props;

  return (
    <SWRConfig value={{ fallback }}>
      <Head>
        <title>Users Page</title>
      </Head>
      <Header />
      <UsersComponent />
    </SWRConfig>
  );
};

export default Users;
