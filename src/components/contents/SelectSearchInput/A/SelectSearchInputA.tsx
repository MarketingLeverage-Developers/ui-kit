import React, { InputHTMLAttributes } from 'react';
import styles from './SelectSearchInputA.module.scss';
import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/src/types';
import Image from '../../Image/Image';
import Select from './Select/Select';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import Item from './Select/Item/Item';
import Trigger from './Select/Trigger/Trigger';
import Content from './Select/Content/Content';

type SelectSearchInputAProps = InputHTMLAttributes<HTMLInputElement> & {
    buttonColor?: HexColor;
    onButtonClick?: () => void;
    children: React.ReactNode;
};
const SelectSearchInputA = ({ color, onButtonClick, children, ...props }: SelectSearchInputAProps) => {
    const select = children;

    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
    };

    return (
        <div className={styles.SelectSearchInputA} style={{ ...props.style, ...cssVariables }}>
            <div className={styles.Select}>{select}</div>
            <input {...props} />
            <button onClick={onButtonClick}>
                <HiOutlineMagnifyingGlass className={styles.Icon} />
            </button>
        </div>
    );
};

export default SelectSearchInputA;

SelectSearchInputA.Select = Select;
SelectSearchInputA.Content = Content;
SelectSearchInputA.Trigger = Trigger;
SelectSearchInputA.Item = Item;
