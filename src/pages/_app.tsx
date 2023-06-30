import Head from "next/head";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { motion, AnimatePresence, Variants } from "framer-motion";

import Layout from "components/layout";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const JsonLdData = () => {
  return {
    __html: `{
      "@context" : "https://schema.org",
      "@type" : "WebSite",
      "name" : "John Mwendwa",
      "url" : "https://johnmwendwa.me/",
      "description" : "I'm an advocate for building responsive, accessible and inclusive digital products and experiences for the web based in Nairobi, Kenya.",
      "keywords" : "Full Stack web developer, John Mwendwa, Mwendwa, Front-End, React, JavaScript, Node.js, Next.js, MongoDB , SEO",
      "author" : {
        "@type": "Person",
        "name": "John Mwendwa",
        "url": "https://johnmwendwa.me/",
        "image": "",
        "sameAs": [
          "https://github.com/JohnMwendwa",
          "https://johnmwendwa.me/"
        ],
        "jobTitle": "Full Stack Web Developer" 
      }
    }`,
  };
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>John Mwendwa | Full Stack Web Developer</title>

        <meta
          name="description"
          content="I'm an advocate for building responsive, accessible and inclusive digital products and experiences for the web based in Nairobi, Kenya."
          key="desc"
        />

        <meta
          name="keywords"
          content="Full Stack web developer, John Mwendwa, Mwendwa, Front-End, React, JavaScript, Node.js, Next.js, MongoDB , SEO"
        />

        <meta name="author" content="John Mwendwa" />
        <meta
          property="og:title"
          content="John Mwendwa | Full Stack Web Developer"
        />

        <meta
          property="og:description"
          content="I'm an advocate for building responsive, accessible and inclusive digital products and experiences for the web based in Nairobi, Kenya."
        />

        <meta name="og:type" content="website" />

        <meta property="og:url" content="https://johnmwendwa.me" />

        <meta property="og:site_name" content="John Mwendwa" />

        <meta property="og:locale" content="en_KE" />
        <meta name="theme-color" content="rgb(17, 24, 39)" />

        <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={JsonLdData()}
          key="personal-jsonld"
        />
      </Head>
      <AnimatePresence mode="wait">
        <motion.div
          className={`${inter.variable} font-sans bg-gray-900`}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={Container}
          key={router.route}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

const Container: Variants = {
  initial: {
    opacity: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
  animate: {
    opacity: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      when: "beforeChildren",
    },
  },
  exit: {
    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
    transition: {
      duration: 0.75,
    },
  },
};

export default MyApp;
