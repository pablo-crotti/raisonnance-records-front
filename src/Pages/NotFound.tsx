import { useTranslation } from "react-i18next";
import Button from "../Components/Buttons/Index";
import { Ghost } from "lucide-react";

const NotFound = () => {
  const { t } = useTranslation();

  const pathname = window.location.pathname;
  return (
    <div className="min-h-full pt-16 flex items-center justify-center text-foreground-light dark:text-foreground-dark">
      <div className="text-center flex flex-col items-center ">
        <Ghost className="w-20 h-20 mb-12 dark:text-primary" />
        <h1 className="text-4xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl mb-12">{t("404.page_not_found")}...</p>
        <Button href={pathname.includes("admin") ? "/admin" : "/"} isLink>
          {t("404.back_home")}
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
