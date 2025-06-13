import React, { ChangeEventHandler, TdHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Cell.module.scss';
import { HexColor } from '@/ui-kit/src/types';

type CellProps = {
    children?: React.ReactNode | string;
    align?: 'left' | 'center' | 'right';
    asHeader?: boolean;
    isEditable?: boolean; // 편집 가능 여부 prop
    width?: number;
    onTableCellChange?: (value: string) => void;
    value?: string | number;
    bgColor?: HexColor;
} & TdHTMLAttributes<HTMLTableCellElement>;

const Cell = ({
    children,
    align = 'left',
    asHeader,
    isEditable = false,
    width,
    onTableCellChange,
    value,
    bgColor,
    ...props
}: CellProps) => {
    const handleTableCellChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = e.target.value as string;
        onTableCellChange && onTableCellChange(value);
    };

    const alignMap = {
        left: styles.Left,
        right: styles.Right,
        center: styles.Center,
    };

    const cellClasses = classNames(
        styles.Cell,
        alignMap[align],
        asHeader && styles.AsHeader,
        isEditable && styles.Editable, // 편집 가능 시 추가 스타일 적용 (옵션)
        width && styles.Fixed
    );

    const cssVariables: React.CSSProperties = {
        '--cell-width': `${width}px`,
        '--background': bgColor,
    } as React.CSSProperties;

    return (
        <td className={cellClasses} {...props} style={{ ...cssVariables }}>
            {/* <div className={styles.Content} style={{ ...cssVariables }}>
                {children}
            </div> */}
            {children}
        </td>
    );
};

export default Cell;
