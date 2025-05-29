import { BoxSize, CSSPropertiesWithVars, FontSize, FontWeight, HexColor } from '@/ui-kit/src/types';
import styles from './TemplateC.module.scss';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Flex from '../../../layouts/Flex/Flex';

export interface TemplateCProps extends React.ComponentProps<typeof Box> {
    content?: string;
    number?: number;
    radius?: number;
    image: string;
    title?: string;
    contentSize?: FontSize;
    contentWeight?: FontWeight;
    width?: BoxSize;
    height?: BoxSize;
    boxShadow?: string;
    imageWidth?: BoxSize;
    imageHeight?: BoxSize;
    borderWeight?: number;
    borderColor?: HexColor;
    backgroundColor?: HexColor | 'inherit' | 'transparent' | 'none';
    buttonBackground?: HexColor;
    buttonColor?: HexColor;
}

const TemplateC: React.FC<TemplateCProps> = ({
    title,
    number,
    content,
    image,
    radius = 12,
    contentSize = 40,
    contentWeight = 400,
    width = 300,
    height = 450,
    imageWidth = '100%',
    imageHeight = 240,
    borderWeight = 0,
    borderColor = '#000000',
    backgroundColor = 'inherit',
    boxShadow = 'none',
    buttonBackground = '#363636',
    buttonColor = '#ffffff',
    ...boxProps
}) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--width': `${width}px`,
        '--height': `${height}px`,
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
                            텍스트
                        </Text>
                        <Text size={16} weight={500}>
                            가격
                        </Text>
                    </Flex>
                    <Flex width="100%" justify="space-between">
                        <Text size={24} weight={700}>
                            텍스트
                        </Text>
                        <Text size={24} weight={700}>
                            가격
                        </Text>
                    </Flex>
                </Flex>
            </div>
            <div className={styles.Button}>
                <Text size={20} weight={600} color={buttonColor}>
                    버튼
                </Text>
            </div>
        </div>
    );
};
export default TemplateC;
