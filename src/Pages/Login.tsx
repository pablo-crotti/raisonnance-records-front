import { useState } from "react";
import { login } from "../services/authService";
import InputText from "../Components/Forms/InputText";
import Button from "../Components/Buttons/Index";
import { useTranslation } from "react-i18next";
import type { GENERAL_API_ERROR } from "../models/Errors";
import InlineLoader from "../Components/Loaders/InlineLoader";

export default function Login() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [generalError, setGeneralError] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    setEmailError("");
    setPasswordError("");
    setGeneralError("");

    setLoading(true);

    try {
      await login(
        data.email.toString().toLocaleLowerCase(),
        data.password.toString()
      );

      window.location.href = "/admin";
    } catch (error) {
      const errorData = error as GENERAL_API_ERROR;
      if (errorData.errors && Object.entries(errorData.errors).length > 0) {
        Object.entries(errorData.errors).forEach(([field, messages]) => {
          messages.forEach((msg) => {
            if (field == "email") setEmailError(msg);
            if (field == "password") setPasswordError(msg);
          });
        });
      } else if (errorData.message) {
        setGeneralError(errorData.message);
        (form.elements.namedItem("password") as HTMLInputElement).value = "";
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex-col bg-background flex items-center justify-center p-4">
      <div
        className={`max-w-md w-full backdrop-blur-sm bg-card-/50 border rounded-xl overflow-hidden ${
          loading
            ? "border-neon-pink/30"
            : "border-neon-pink shadow-glow-neon-pink"
        }`}
      >
        {loading && <InlineLoader color="neon-pink" />}
        <div className="p-8">
          <h2
            className={`text-2xl font-bold mb-6 text-center ${
              loading ? "text-foreground/50" : "text-foreground"
            }`}
          >
            {t("auth.sign_in")}
          </h2>

          <form className="space-y-6" onSubmit={handleLogin}>
            <InputText
              label={t("labels.mail")}
              type="email"
              name="email"
              placeholder={t("placeholders.mail")}
              error={t(emailError)}
              autocomplete="email"
              disabled={loading}
              required
            />

            <InputText
              label={t("labels.password")}
              type="password"
              name="password"
              placeholder={"••••••••"}
              error={t(passwordError)}
              autocomplete="password"
              disabled={loading}
              required
            />

            <div className="flex items-center justify-end mb-8">
              <a
                href="#"
                className="text-sm text-neon-pink hover:text-neon-pink/80"
              >
                {t("auth.forgot_password")}
              </a>
            </div>
            {generalError && <p className="text-red-500">{t(generalError)}</p>}
            <Button type="submit" disabled={loading}>
              {t("auth.sign_in")}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
