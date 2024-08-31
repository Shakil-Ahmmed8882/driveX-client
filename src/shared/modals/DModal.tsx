import { Close } from "../../assets/icons/Icons";

const DModal = ({ setOpen, open, children }) => {
  return (
    <section
      className={`
        ${
        open
          ? " visible translate-x-0 opacity-100"
          : " fixed bg-primaryColor  translate-x-80 invisible opacity-0 "
      }
    transition-all duration-500 p-2  fixed inset-0 z-50  w-full bg-[black]`}
    >
      {children}
      <button
        className="absolute bottom-10  right-6 bg-[#b2b2b288] text-[black] p-3 rounded-full font-bold"
        onClick={() => setOpen(false)}
      >
        <Close />
      </button>
    </section>
  );
};

export default DModal;
