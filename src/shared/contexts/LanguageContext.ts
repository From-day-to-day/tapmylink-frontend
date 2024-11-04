import { createContext } from 'react';
import { LanguageContextType } from '@/shared/models';

export const LanguageContext = createContext<LanguageContextType | null>(null);
