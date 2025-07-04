import { BoxSize, CSSPropertiesWithVars, FontSize, FontWeight, HexColor } from '@/ui-kit/src/types';
import styles from './CardB.module.scss';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import { dimensionToVariable } from '@/ui-kit/src/utils';

export interface CardBProps extends React.ComponentProps<typeof Box> {
    content?: string;
    number?: number;
    radius?: number;
    icon: string;
    contentSize?: FontSize;
    contentWeight?: FontWeight;
    width?: BoxSize | string;
    height?: BoxSize | string;
    boxShadow?: string;
    IconWidth?: BoxSize;
    IconHeight?: BoxSize;
    borderWeight?: number;
    borderColor?: HexColor;
    backgroundColor?: HexColor | 'inherit' | 'transparent' | 'none';
    children?: React.ReactNode;
    numberBackground?: HexColor;
}

const CardB: React.FC<CardBProps> = ({
    number,
    content,
    icon,
    radius = 0,
    contentSize = 40,
    contentWeight = 400,
    width,
    height,
    IconWidth,
    IconHeight,
    borderWeight = 0,
    borderColor = '#E2E2E2',
    backgroundColor = 'inherit',
    boxShadow = 'none',
    numberBackground = '#000000',
    children,
    ...boxProps
}) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--width': dimensionToVariable(width),
        '--height': dimensionToVariable(height),
        '--IconWidth': dimensionToVariable(IconWidth),
        '--IconHeight': dimensionToVariable(IconHeight),
        '--radius': `${radius}px`,
        '--backgroundColor': `${backgroundColor}`,
        '--border-color': borderColor,
        '--border-weight': `${borderWeight}px`,
        '--box-shadow': boxShadow,
        '--number-Background': numberBackground,
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
            {children && children}
        </div>
    );
};
export default CardB;
