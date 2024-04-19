import StoreProvider from './store-provider';
import AppThemeProvider from './theme-provider';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = (props: ProvidersProps): JSX.Element => {
  const { children } = props;

  return (
    <StoreProvider>
      <AppThemeProvider>{children}</AppThemeProvider>
    </StoreProvider>
  );
};

export default Providers;
