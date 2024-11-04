import { FC, memo } from 'preact/compat';
import useSWR, { KeyedMutator } from 'swr';
import messages from './messages';
import { Error, Loader } from '@/shared/components';
import { ACCOUNT_API_KEY, DAY_IN_MS } from '@/shared/consts';
import { useLanguage } from '@/shared/hooks';
import { ErrorResponse, User } from '@/shared/models';

interface Props {
  AuthorizedComponent: FC<{ authorizedData: User; authorizedMutate: KeyedMutator<User> }>;
  UnauthorizedComponent?: FC;
}

export const AuthWrapper = memo(({ AuthorizedComponent, UnauthorizedComponent }: Props) => {
  const { data, error, isLoading, mutate } = useSWR<User, ErrorResponse>(ACCOUNT_API_KEY, {
    // 1 день не делать запросы повторно. revalidateIfStale был бы лучше, но он триггерит лишние перерендеры
    dedupingInterval: DAY_IN_MS,
  });

  const { language } = useLanguage();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return UnauthorizedComponent ? (
      <UnauthorizedComponent />
    ) : (
      <Error message={messages[language].unauthorizedErrorMessage} />
    );
  }

  if (data) {
    return <AuthorizedComponent authorizedData={data} authorizedMutate={mutate} />;
  }

  return null;
});
