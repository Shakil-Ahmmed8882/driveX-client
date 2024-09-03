import { ReactNode } from "react";
import { Close } from "../../assets/icons/Icons";
type DModalProps = {
  setOpen: (open: boolean) => void; // Function to set the open state
  open: boolean; // Boolean indicating if the modal is open or not
  children: ReactNode
};

const DModal: React.FC<DModalProps> = ({ setOpen, open, children }) => {
  return (
    <section
      className={`
        ${
        open
          ? " visible translate-x-0 opacity-100"
          : " fixed primaryGradient  translate-x-80 invisible opacity-0 "
      }
    transition-all duration-500 p-2 pt-32  fixed overflow-y-auto inset-0 z-50  w-full bg-[black]`}
    >
      {children}
      <button
        className="absolute top-10  right-6 bg-[#b2b2b288] text-[black] p-3 rounded-full font-bold"
        onClick={() => setOpen(false)}
      >
        <Close />
      </button>
    </section>
  );
};

export default DModal;
