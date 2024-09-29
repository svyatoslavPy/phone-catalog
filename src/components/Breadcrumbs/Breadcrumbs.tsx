import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';

import { IconRight } from '../../ui/IconRight';

import iconWhiteHome from '../../assets/images/home-secondary.svg';
import iconDarkHome from '../../assets/images/home.svg';

import { capatalize } from '../../utils';

import { useAppSelector } from '../../hooks/useAppSelector';
import styles from './Breadcrumbs.module.scss';

type Props = {
  category: string | undefined;
  productName?: string;
};

export const Breadcrumbs: React.FC<Props> = ({ category, productName }) => {
  const { pathname } = useLocation();
  const { theme } = useAppSelector(state => state.theme);
  // const theme = 'light-theme';
  // console.log(theme);

  return (
    <div className={styles.breadcrumbs}>
      <Link className={styles.link} to="/">
        <img
          className={styles.icon}
          src={theme === 'light-theme' ? iconWhiteHome : iconDarkHome}
          alt="icon"
        />
      </Link>

      <IconRight fill="#4A4D58 " />

      {category !== pathname.slice(1) ? (
        <Link
          to={`/${category}`}
          className={cn(styles.path, styles.link, {
            [styles['path--active']]: category !== pathname.slice(1),
          })}
        >
          {category && capatalize(category)}
        </Link>
      ) : (
        <p className={cn(styles.path)}>{capatalize(category)}</p>
      )}

      {productName && <IconRight fill="#4A4D58 " />}

      <p className={styles.path}>{productName && capatalize(productName)}</p>
    </div>
  );
};
