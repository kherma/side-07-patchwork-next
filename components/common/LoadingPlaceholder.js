import { motion } from "framer-motion";
import { BsFillGearFill } from "react-icons/bs";
import { IoPlanet } from "react-icons/io5";
import { WiBarometer } from "react-icons/wi";
import {
  viewPlaceholderAnim,
  dataPlaceholderAnim,
  atmospherePlaceholderAnim,
} from "../../animations/planetPageAnim/planetPlaceholderAnim";

const LoadingPlaceholder = ({ variant, loading }) => {
  const {
    initial: viewInitial,
    animate: viewAnimate,
    transition: viewTransition,
  } = viewPlaceholderAnim(loading);
  const { animate: dataAnimate, transition: dataTransition } =
    dataPlaceholderAnim(loading);
  const { animate: atmosphereAnimate, transition: atmosphereTransition } =
    atmospherePlaceholderAnim(loading);
  return (
    <div className="flex justify-center items-center w-full h-[21rem] text-white bg-black rounded-2xl sm:h-[22rem] xl:h-full">
      {variant === "view" && (
        <motion.div
          initial={viewInitial}
          animate={viewAnimate}
          transition={viewTransition}
          className="text-9xl"
        >
          <IoPlanet />
        </motion.div>
      )}
      {variant === "data" && (
        <motion.div
          animate={dataAnimate}
          transition={dataTransition}
          className="text-9xl"
        >
          <BsFillGearFill />
        </motion.div>
      )}
      {variant === "atmosphere" && (
        <motion.div
          animate={atmosphereAnimate}
          transition={atmosphereTransition}
          className="text-[12rem]"
        >
          <WiBarometer />
        </motion.div>
      )}
    </div>
  );
};

export default LoadingPlaceholder;
