import React from "react";
import * as MdIcons from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function Toast({ toast, setToast }) {
  useEffect(() => {
    toast.show == true
      ? setTimeout(() => {
          setToast({
            show: false,
            message: "",
          });
        }, 3000)
      : null;
  }, [toast]);
  const toastVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };
  return (
    <div className="fixed bottom-0 left-0 z-20 flex justify-center items-center w-full text-center">
      <AnimatePresence exitBeforeEnter>
        {toast.show && (
          <motion.span
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={toastVariants}
            className="w-fit bg-gray-700 text-[13px] pl-6 mb-6 py-2 rounded-full text-white flex items-center"
          >
            {toast.message}
            <MdIcons.MdClose
              onClick={() =>
                setToast({
                  show: false,
                  message: "",
                })
              }
              className="ml-2 text-lg text-white mx-3 cursor-pointer"
            />
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Toast;
