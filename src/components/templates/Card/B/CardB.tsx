import { BoxSize, CSSPropertiesWithVars, FontSize, FontWeight, HexColor } from '@/ui-kit/src/types';
import styles from './CardB.module.scss';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Text from '@/ui-kit/src/components/contents/Text/Text';

export interface CardBProps extends React.ComponentProps<typeof Box> {
    content?: string;
    number?: number;
    radius?: number;
    icon: string;
    contentSize?: FontSize;
    contentWeight?: FontWeight;
    width?: BoxSize;
    height?: BoxSize;
    boxShadow?: string;
    IconWidth?: BoxSize;
    IconHeight?: BoxSize;
    borderWeight?: number;
    borderColor?: HexColor;
    backgroundColor?: HexColor | 'inherit' | 'transparent' | 'none';
}

const CardB: React.FC<CardBProps> = ({
    number,
    content,
    icon,
    radius = 0,
    contentSize = 40,
    contentWeight = 400,
    width = 300,
    height = 330,
    IconWidth = 80,
    IconHeight = 80,
    borderWeight = 0,
    borderColor = '#E2E2E2',
    backgroundColor = 'inherit',
    boxShadow = 'none',
    ...boxProps
}) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--width': `${width}px`,
        '--height': `${height}px`,
        '--IconWidth': `${IconWidth}px`,
        '--IconHeight': `${IconHeight}px`,
        '--radius': `${radius}px`,
        '--backgroundColor': `${backgroundColor}`,
        '--border-color': borderColor,
        '--border-weight': `${borderWeight}px`,
        '--box-shadow': boxShadow,
    };
    return (
        <div className={styles.Wrapper} style={{ ...cssVariables }}>
            <div className={styles.Number}>{number}</div>
            <div className={styles.ContentWrapper}>
                <img src={icon} loading="lazy" alt="아이콘" />
                <Text size={contentSize} weight={contentWeight}>
                    {content}
                </Text>
            </div>
        </div>
    );
};
export default CardB;
