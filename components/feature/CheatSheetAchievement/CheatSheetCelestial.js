import React from "react";
import { motion } from "framer-motion";
import { celestialAnim } from "../../../animations/cheatScheetAnim";

const CheatSheetCelestial = ({ darkMode }) => {
  const {
    initial: initialSun,
    animate: animateSun,
    transition: transitionSun,
  } = celestialAnim(darkMode, "sun");

  const {
    initial: initialMoon,
    animate: animateMoon,
    transition: transitionMoon,
  } = celestialAnim(!darkMode, "moon");
  return (
    <div className="relative mr-2 w-10 h-10 rounded-full sm:mr-4 sm:w-14 sm:h-14">
      <motion.div
        initial={initialSun}
        animate={animateSun}
        transition={transitionSun}
        className="w-10 h-10 bg-[#ffd27d] rounded-full shadow-[inset_0_0_0.3rem_0.3rem_#ffa371] sm:w-12 sm:h-12 absoluteCenter"
      />
      <motion.div
        initial={initialMoon}
        animate={animateMoon}
        transition={transitionMoon}
        className="w-10 h-10 bg-[#fffa86] rounded-full shadow-[0_0_0.3rem_0.2rem_#fff] sm:w-12 sm:h-12 absoluteCenter"
      />
    </div>
  );
};

export default CheatSheetCelestial;
