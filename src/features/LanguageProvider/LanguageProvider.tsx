import { PropsWithChildren } from 'preact/compat';
import { useEffect, useMemo, useState } from 'preact/hooks';
import { useLocation } from 'wouter-preact';
import { Loader } from '@/shared/components';
import { LanguageContext } from '@/shared/contexts';
import { ELanguage } from '@/shared/enums';
import { LanguageContextType } from '@/shared/models';

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<ELanguage | null>(null);
  const [location] = useLocation();
  const contextValue = useMemo(() => ({ language, setLanguage }), [language]);

  useEffect(() => {
    const languageInPath = location.split('/')[1] as ELanguage;
    const currentLanguage = languageInPath in ELanguage ? languageInPath : ELanguage.en;

    document.documentElement.lang = currentLanguage;
    setLanguage(currentLanguage);
  }, [location]);

  if (!contextValue.language) return <Loader />;

  return <LanguageContext.Provider value={contextValue as LanguageContextType}>{children}</LanguageContext.Provider>;
};
