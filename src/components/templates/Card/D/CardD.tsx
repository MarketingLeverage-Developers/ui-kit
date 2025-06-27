import styles from './CardD.module.scss';
import star from '@/assets/images/star.webp';

interface CardDProps {
    data: {
        Img?: string;
        title?: string;
        name?: string;
        content?: string;
    };
}

const CardD = ({ data }: CardDProps) => {
    return (
        <div className={styles.CardWrapper}>
            <div className={styles.HeaderWrapper}>
                <img src={data.Img} alt="사진" />
                <div className={styles.HeaderContent}>
                    <div className={styles.Title}>{data.title}</div>
                    <div className={styles.NameDate}>{data.name}</div>
                </div>
            </div>
            <div className={styles.starWrapper}>
                <img src={star.src} alt="별점" />
            </div>
            <div className={styles.Content}>{data.content}</div>
        </div>
    );
};
export default CardD;
