import { ELanguage } from '@/shared/enums';

export interface LanguageContextType {
  language: ELanguage;
  setLanguage: (language: ELanguage) => void;
}
