import styles from './arrowAnimationA.module.scss';
import { IoIosArrowDown } from 'react-icons/io';

const ArrowAnimationA = () => {
    return (
        <div className={styles.wrapper}>
            {Array(3)
                .fill(null)
                .map((_, idx) => (
                    <div key={idx} className={styles.arrow}>
                        <IoIosArrowDown />
                    </div>
                ))}
        </div>
    );
};
export default ArrowAnimationA;
