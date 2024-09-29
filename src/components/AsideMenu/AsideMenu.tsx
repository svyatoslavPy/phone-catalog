import { NavLink } from 'react-router-dom';
import { NAV_ROUTES } from '../../constants/constants';
import { getNavigationRoute } from '../../utils';

import cn from 'classnames';

import cartWhiteIcon from '../../assets/images/cart-icon-secondary.svg';
import cartDarkIcon from '../../assets/images/cart-icon.svg';

// eslint-disable-next-line max-len
import favoriteWhiteIcon from '../../assets/images/favorite-icon-secondary.svg';
import favoriteDarkIcon from '../../assets/images/favourite-icon.svg';

import { useAppSelector } from '../../hooks/useAppSelector';
import styles from './AsideMenu.module.scss';

type Props = {
  onCloseMenu: () => void;
  active: boolean;
};

export const AsideMenu: React.FC<Props> = ({ onCloseMenu, active }) => {
  const { theme } = useAppSelector(state => state.theme);

  return (
    <aside
      className={cn(styles.aside, {
        [styles.active]: active,
      })}
    >
      <div className={styles.content}>
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            {NAV_ROUTES.map(route => (
              <li key={route} className={styles.item}>
                <NavLink
                  className={({ isActive }) =>
                    cn(styles.link, {
                      [styles['link--active']]: isActive,
                    })
                  }
                  onClick={onCloseMenu}
                  to={getNavigationRoute(route)}
                >
                  {route}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div onClick={onCloseMenu} className={styles.tabs}>
        <NavLink
          className={({ isActive }) =>
            cn(styles.tab, {
              [styles['tab--active']]: isActive,
            })
          }
          to="/favorites"
        >
          <img
            src={theme === 'dark-theme' ? favoriteDarkIcon : favoriteWhiteIcon}
            alt="favourite"
          />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(styles.tab, {
              [styles['tab--active']]: isActive,
            })
          }
          to="/cart"
        >
          <img
            src={theme === 'dark-theme' ? cartDarkIcon : cartWhiteIcon}
            alt="cart"
          />
        </NavLink>
      </div>
    </aside>
  );
};
