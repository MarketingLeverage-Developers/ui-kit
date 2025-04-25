import Modal from '@/headless/Modal/Modal';
import styles from './Close.module.scss';
// import { HiOutlineXMark } from 'react-icons/hi2';

const Close = () => {
    return <Modal.Close className={styles.Close}>X</Modal.Close>;
};

export default Close;
