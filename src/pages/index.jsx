import Head from "next/head";
import { Header } from "src/components/Header";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <div className="flex justify-center flex-col items-center">
        <h1 className="mt-6 font-bold text-3xl">Next.jsで学ぶReact講座</h1>
        <p className="mt-4 text-xl">
          JSONPlaceholderのAPIを色々叩いてみるよ！
        </p>
      </div>
    </div>
  );
};

export default Index;
