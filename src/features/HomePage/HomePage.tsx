import { AppBenefits } from './AppBenefits';
import { CreateLinkBlock } from './CreateLinkBlock';
import styles from './homePage.module.css';
import { PreviewCards } from './PreviewCards';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <div>
        <PreviewCards />
      </div>
      <div>
        <AppBenefits />
      </div>
      <div>
        <CreateLinkBlock />
      </div>
    </div>
  );
};
