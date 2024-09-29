import { useState } from 'react';

import closeIcon from '../../assets/images/CloseMenu.svg';
import menuIcon from '../../assets/images/Menu.svg';

// eslint-disable-next-line max-len
import favoriteWhiteIcon from '../../assets/images/favorite-icon-secondary.svg';
import favoriteDarkIcon from '../../assets/images/favourite-icon.svg';

import cartWhiteIcon from '../../assets/images/cart-icon-secondary.svg';
import cartDarkIcon from '../../assets/images/cart-icon.svg';

import { NavigationButton } from '../../ui/NavigationButton';

import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getLengthItems } from '../../utils/getLengthItems';
import { AsideMenu } from '../AsideMenu';

import whiteIconLogo from '../../assets/images/logo-secondary.svg';
import darkIconLogo from '../../assets/images/logo.svg';

import styles from './MainHeader.module.scss';
import { Navigation } from './Navigation';

export const MainHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { favorites } = useAppSelector(state => state.favorites);
  const { cart } = useAppSelector(state => state.cart);
  const { theme } = useAppSelector(state => state.theme);

  const totalItems = getLengthItems(cart);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.headerInner}>
              <Link to="/">
                <img
                  src={theme === 'dark-theme' ? darkIconLogo : whiteIconLogo}
                  alt="logo"
                />
              </Link>

              <Navigation />
            </div>

            <div className={styles.list}>
              <NavigationButton href="/favorites">
                {!!favorites.length && (
                  <span className={styles.counter}>{favorites.length}</span>
                )}
                <img
                  className={styles.icon}
                  src={
                    theme === 'light-theme'
                      ? favoriteWhiteIcon
                      : favoriteDarkIcon
                  }
                  alt="favorites"
                />
              </NavigationButton>
              <NavigationButton href="/cart">
                {!!cart.length && (
                  <span className={styles.counter}>{totalItems}</span>
                )}
                <img
                  className={styles.icon}
                  src={theme === 'light-theme' ? cartWhiteIcon : cartDarkIcon}
                  alt="cart"
                />
              </NavigationButton>

              <button onClick={handleToggleMenu} className={styles.button}>
                <img src={showMenu ? closeIcon : menuIcon} alt="cart" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AsideMenu active={showMenu} onCloseMenu={handleCloseMenu} />
    </>
  );
};
