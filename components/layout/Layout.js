import React, { useState } from "react";
import Head from "next/head";
import { pagesMetaData } from "../../utils/config";
import Header from "./Header";
import Modal from "../feature/Modal";
import { motion, AnimatePresence } from "framer-motion";
import { page } from "../../utils/animations";

const Layout = ({ children, pageTitle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const open = () => setIsModalOpen(true);
  const close = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col gap-4 p-4 w-screen min-h-screen bg-gray-200 lg:gap-8 lg:p-8 lg:h-screen">
      <Head>
        <title>{pagesMetaData[pageTitle].title}</title>
        <meta
          name="description"
          content={pagesMetaData[pageTitle].description}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header toogleModal={() => (isModalOpen ? close() : open())} />
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {isModalOpen && <Modal handleClose={close} />}
      </AnimatePresence>
      <main className="mt-28 w-full h-full sm:mt-32 lg:mt-0 paper">
        <motion.div
          initial={page.initial}
          animate={page.animate}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
};

export default Layout;
