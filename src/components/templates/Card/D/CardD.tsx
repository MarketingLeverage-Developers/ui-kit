import Image from '@/ui-kit/src/components/contents/Image/Image';
import styles from './CardD.module.scss';

interface CardDProps {
    data: {
        Img?: string;
        title?: string;
        name?: string;
        content?: string;
    };
    starImg: string;
}

const CardD = ({ data, starImg }: CardDProps) => {
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
                <Image image={starImg} alt="별점" />
            </div>
            <div className={styles.Content}>{data.content}</div>
        </div>
    );
};
export default CardD;
