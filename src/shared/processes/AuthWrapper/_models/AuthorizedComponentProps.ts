import { KeyedMutator } from 'swr';
import { Tariff, User } from '@/shared/models';

export interface AuthorizedComponentProps {
  userData: User;
  userMutate: KeyedMutator<User>;
  tariffData?: Tariff;
}
