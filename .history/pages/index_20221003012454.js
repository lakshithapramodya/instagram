import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";

function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram</title>
        <link
          rel="icon"
          href="https://img.icons8.com/fluency/344/instagram-new.png"
        />
      </Head>

      <Header />

      <Feed />

      <Modal />
    </div>
  );
}

export default Home;
