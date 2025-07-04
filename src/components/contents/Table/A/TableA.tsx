import React, { HTMLAttributes, useEffect, useRef } from 'react';
import styles from './TableA.module.scss';
import Header from './Header/Header';
import Row from './Row/Row';
import Cell from './Cell/Cell';
import Body from './Body/Body';
import Content from './Content/Content';
import ResizableCell from './Resizer/Resizer';
import { CSSPropertiesWithVars } from '@/ui-kit/src/types';

type TableAProps = HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    totalWidth?: number;
};

const TableA = ({ children, totalWidth, ...props }: TableAProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const wrapperEl = wrapperRef.current;
        if (!wrapperEl) return;

        const handleWheel = (e: WheelEvent) => {
            // 세로 스크롤 값을 가로 스크롤로 전환합니다.
            if (e.deltaY !== 0) {
                e.preventDefault();
                wrapperEl.scrollLeft += e.deltaY;
            }
        };

        // passive 옵션을 false로 설정해야 e.preventDefault()가 작동합니다.
        wrapperEl.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            wrapperEl.removeEventListener('wheel', handleWheel);
        };
    }, []);

    const cssVariables: CSSPropertiesWithVars = totalWidth ? { '--width': `${totalWidth}px` } : { '--width': '100%' };

    return (
        <div className={styles.TableAWrapper} {...props} style={{ ...cssVariables, ...props.style }}>
            <table className={styles.TableA}>{children}</table>
        </div>
    );
};

export default TableA;

TableA.Header = Header;
TableA.Row = Row;
TableA.Cell = Cell;
TableA.Body = Body;
TableA.Content = Content;
TableA.ResizableCell = ResizableCell;
