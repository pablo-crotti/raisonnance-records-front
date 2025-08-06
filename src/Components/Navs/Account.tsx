import { useTranslation } from "react-i18next";
import type { AuthUser } from "../../models/Auth";
import { useState } from "react";
import { logout } from "../../services/authService";
import { toast } from "react-toastify";

interface AccountProps {
  user: AuthUser;
}

const Account = ({ user }: AccountProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const { t } = useTranslation();

  const lgOut = async () => {
    try {
      await logout();

      window.location.href = "/";
    } catch {
      toast.error(t("errors.server"), {
        position: "bottom-right",
        className: "react-toast",
      });
    }
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col justify-center items-center bg-gradient-to-r from-neon-pink to-neon-pink-highlight hover:from-neon-pink/90 hover:to-neon-pink-highlight/90 cursor-pointer duration-300 rounded-full w-10 h-10 text-foreground font-bold uppercase"
      >
        {user.name.split(" ").length > 1
          ? `${user.name.split(" ")[0].substring(0, 1)}${user.name
              .split(" ")[1]
              .substring(0, 1)}`
          : user.name.substring(0, 2)}
      </button>

      <div
        className={`absolute right-4 top-18 overflow-hidden text-foreground transition-all duration-300 ease-in-out bg-background-highlight border-4 border-neon-pink/30  z-30 py-4 px-8 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: isOpen
            ? `translate(20px, 20px) scale(1)`
            : "translate(40px, -80px) scale(0.5)",
          transitionDelay: isOpen ? `0ms` : "0ms",
        }}
      >
        <div className="border-b pb-4">
          <p className="text-base">{user.name}</p>
          <p className="text-base">{user.email}</p>
        </div>
        <ul className="mt-4">
          <li className="border-b  border-foreground/40 text-foreground/70 hover:text-foreground duration-300 mb-2 py-2">
            <a className="w-full block" href="#">
              Compte
            </a>
          </li>
          <li className="text-foreground/70 hover:text-foreground duration-300  mb-2 py-2 ">
            <button
              onClick={lgOut}
              className="w-full block  text-left cursor-pointer"
            >
              {t("auth.logout")}
            </button>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 min-w-screen h-screen  z-20"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Account;
