import React from "react";
import { useTranslation } from "react-i18next";

function Home() {
  const { t, i18n } = useTranslation();
  return <div className="py-4">{t("helloWorld")}</div>;
}

export default Home;
