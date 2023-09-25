import Backdrop from "./BackDrop";
import { motion } from "framer-motion";

const dropIn = {
  hidden: {
    y: "-100vh",
    optacity: 0
  },
  visible: {
    y: 0,
    optacity:1
  },
  exit: {
    y: "100vh",
    optacity: 0
  },
};

const RUSureModal = ({ handleDelete ,handleClose, storyId }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal-hw flex justify-center flex-col gap-2 items-center rounded-md bg-violet-700 text-white"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1 className="text-center text-xl">
          Are you sure about this?
          <br/>
          You are about to delete your
          <span className="uppercase font-bold text-red-500 "> legendary Story</span>
        </h1>
        <p>Story ID: {storyId}</p>
        <div className="flex gap-2">
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.5, rotate: 360 }} onClick={() => handleDelete() } className="p-2 rounded-xl text-xl w-36 bg-pink-600">
                Yah! Sure
            </motion.button>
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.5, rotate: 360 }} onClick={() => handleClose() } className="p-2 rounded-xl text-xl w-36 bg-sky-600">
                Close
            </motion.button>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default RUSureModal;
