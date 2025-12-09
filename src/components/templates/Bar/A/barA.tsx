import Image from '@/ui-kit/src/components/contents/Image/Image';
import styles from './BarA.module.scss';

type BarAProps = {
    Icon?: string;
    number?: string;
    content?: string;
    highlight?: any;
};

const BarA = ({ Icon, content, highlight, number }: BarAProps) => {
    return (
        <div className={styles.Container}>
            <div className={styles.Wrapper}>
                <div className={styles.IconWrap}>
                    {Icon && <Image image={Icon} alt="icon-img" />}
                    {number && number}
                </div>
                {highlight ? highlight : <div className={styles.text}>{content}</div>}
            </div>
        </div>
    );
};
export default BarA;
