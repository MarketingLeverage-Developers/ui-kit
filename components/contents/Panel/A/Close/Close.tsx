import Modal from '@/headless/Modal/Modal';
import styles from './Close.module.scss';
// import { HiOutlineXMark } from 'react-icons/hi2';

type CloseProps = {
    children: React.ReactNode;
};

const Close = ({ children }: CloseProps) => {
    return <Modal.Close className={styles.Close}>{children}</Modal.Close>;
};

export default Close;
