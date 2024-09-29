import { useAppSelector } from '../../../hooks/useAppSelector';
import { Button } from '../../../ui/Button';
import styles from './CarouselHeader.module.scss';

type Props = {
  title: string | undefined;
  handlePrevSlide: () => void;
  handleNextSlide: () => void;
};

export const CarouselHeader: React.FC<Props> = ({
  title,
  handlePrevSlide,
  handleNextSlide,
}) => {
  const { theme } = useAppSelector(state => state.theme);

  return (
    <div className={styles.productsHeader}>
      <p className={styles.title}>{title}</p>

      <div className={styles.buttons}>
        <Button
          onClick={handlePrevSlide}
          arrow={{ type: 'left', fill: '#4A4D58' }}
          size="small"
          appearance="dark"
          className="active"
        />
        <Button
          className="active"
          onClick={handleNextSlide}
          arrow={{
            type: 'right',
            fill: theme === 'light-theme' ? '#313237' : '#F1F2F9',
          }}
          size="small"
          appearance="dark"
        />
      </div>
    </div>
  );
};
