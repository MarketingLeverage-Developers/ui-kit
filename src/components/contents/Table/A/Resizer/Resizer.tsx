import { MouseEvent } from 'react';

type ResizerProps = { index: number; onMouseDown: (colIndex: number, e: MouseEvent<Element>) => void };

const Resizer = ({ index, onMouseDown }: ResizerProps) => {
    return (
        <div
            onMouseDown={(e) => onMouseDown(index, e)}
            style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 5,
                height: '100%',
                cursor: 'col-resize',
                zIndex: 10,
            }}
        />
    );
};

export default Resizer;
