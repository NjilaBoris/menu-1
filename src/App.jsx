import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const portfolioLinks = [
  "Google",
  "Facebook",
  "Amazon",
  "Microsoft",
  "Apple",
  "Tesla",
];
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence>
      <div className="flex h-[400px] relative bottom-4 items-end justify-center ">
        <motion.div
          layout
          className="flex flex-col bg-neutral-300 p-4 rounded-b-md overflow-clip"
        >
          {isOpen && (
            <motion.div
              layout
              variants={{
                visible: {},
                hidden: {},
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{
                staggerChildren: 0.03,
                delayChildren: 0.3,
              }}
              className="mb-8  grid w-[600px] grid-cols-2 gap-4 *:rounded-xl *:bg-neutral-300 *:px-4 *:py-2"
            >
              {portfolioLinks.map((linkTitle) => (
                <motion.a
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 20 },
                  }}
                  key={linkTitle}
                  href="#"
                  className="cursor-pointer"
                >
                  {linkTitle}
                </motion.a>
              ))}
            </motion.div>
          )}

          <motion.ol
            layout
            className="mx-auto cursor-pointer group flex gap-4 *:rounded-3xl *:p-2 *:transition-colors "
          >
            <li className="hover:bg-gray-100">
              <a>Home</a>
            </li>
            <li className="hover:bg-gray-100">
              <button
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                Portfolio
              </button>
            </li>
            <li className="cursor-pointer hover:bg-gray-100 transition-all duration-150">
              <a>Contact</a>
            </li>
          </motion.ol>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default App;
