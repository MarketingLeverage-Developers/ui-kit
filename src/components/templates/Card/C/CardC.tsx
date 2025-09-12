import { BoxSize, CSSPropertiesWithVars, FontSize, FontWeight, HexColor } from '@/ui-kit/src/types';
import styles from './CardC.module.scss';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Flex from '../../../layouts/Flex/Flex';
import { dimensionToVariable } from '@/ui-kit/src/utils';

export interface CardCProps extends React.ComponentProps<typeof Box> {
    radius?: number;
    image?: string;
    title?: string;
    width?: BoxSize | string;
    height?: BoxSize | string;
    boxShadow?: string;
    imageWidth?: BoxSize;
    imageHeight?: BoxSize;
    borderWeight?: number;
    borderColor?: HexColor;
    backgroundColor?: HexColor | 'inherit' | 'transparent' | 'none';
    buttonBackground?: HexColor;
    buttonColor?: HexColor;

    subLabel?: string;
    label?: string;
    subContent?: string;
    content?: string;
    buttonText?: string;
    highLightColor?: HexColor;
}

const CardC: React.FC<CardCProps> = ({
    subLabel = 'subLabel',
    label = 'label',
    subContent = 'subContent',
    content = 'content',
    buttonText = 'buttonText',
    title = 'title',
    image,
    radius = 12,
    width = 300,
    height = 450,
    imageWidth = '100%',
    imageHeight = 240,
    borderWeight = 0,
    borderColor = '#E0E0E0',
    backgroundColor = 'inherit',
    boxShadow = 'none',
    buttonBackground = '#363636',
    buttonColor = '#ffffff',
    highLightColor = '#121212',
    ...boxProps
}) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--width': dimensionToVariable(width),
        '--height': dimensionToVariable(height),
        '--imageWidth': `${imageWidth}px`,
        '--imageHeight': `${imageHeight}px`,
        '--radius': `${radius}px`,
        '--backgroundColor': `${backgroundColor}`,
        '--border-color': borderColor,
        '--border-weight': `${borderWeight}px`,
        '--box-shadow': boxShadow,
        '--buttonBackground': buttonBackground,
    };
    return (
        <div className={styles.Wrapper} style={{ ...cssVariables }} {...boxProps}>
            <img src={image} />
            <div className={styles.ContentWrapper}>
                <Text size={24} weight={700}>
                    {title}
                </Text>
                <Flex direction="column" width="100%" gap={7}>
                    <Flex width="100%" justify="space-between">
                        <Text size={16} weight={500}>
                            {subLabel}
                        </Text>
                        <Text size={16} weight={500}>
                            {subContent}
                        </Text>
                    </Flex>
                    <Flex width="100%" justify="space-between">
                        <Text size={24} weight={700} color={highLightColor}>
                            {label}
                        </Text>
                        <Text size={24} weight={700} color={highLightColor}>
                            {content}
                        </Text>
                    </Flex>
                </Flex>
            </div>
            <div className={styles.Button}>
                <Text size={20} weight={600} color={buttonColor}>
                    {buttonText}
                </Text>
            </div>
        </div>
    );
};
export default CardC;
