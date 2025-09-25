import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Language, useLanguage } from "../context";

type SettingsContextType = {
  isPC: boolean;
};

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { lang } = useLanguage();

  const [isPC, setIsPC] = useState(window.innerWidth >= 1440);
  // const isTablet = useMediaQuery(
  //   "(min-width:1024px) and (max-width:1439.99px)"
  // );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setIsPC(window.innerWidth >= 1440);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const withLoading = async (callback: () => Promise<void>) => {
    try {
      setIsLoading(true);
      await callback();
    } finally {
      setIsLoading(false);
    }
  };

  // Reference: https://www.w3schools.com/tags/ref_language_codes.asp
  useEffect(() => {
    switch (lang) {
      case Language.TC:
        document.documentElement.lang = "zh-HK";
        break;
      case Language.SC:
        document.documentElement.lang = "zh-CN";
        break;
      case Language.EN:
        document.documentElement.lang = "en";
        break;
      default:
        document.documentElement.lang = "en";
    }
  }, [lang]);

  return (
    <SettingsContext.Provider
      value={{
        // isLoading,
        isPC,

        // setIsLoading,
        // withLoading,
      }}
    >
      {/* {isLoading && (
        <Backdrop
          sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
          open={isLoading}
          aria-label={getRightLang(language, {
            en: "Page loading...",
            sc: "页面加载中...",
            tc: "頁面加載中...",
          })}
        >
          <CircularProgress color="inherit" aria-hidden="true" />
        </Backdrop>
      )} */}
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = (): SettingsContextType => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
