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
    };
    return (
        <div className={styles.Wrapper} style={{ ...cssVariables }} {...boxProps}>
            <img src={image} />
            <div className={styles.ContentWrapper}>
                <Text size={15} weight={700}>
                    {title}
                </Text>
                <Flex width="100%" justify="space-between">
                    <div>텍스트</div>
                    <div>가격</div>
                </Flex>
                <Flex width="100%" justify="space-between">
                    <div>텍스트</div>
                    <div>가격</div>
                </Flex>
            </div>
            <div className={styles.Button}>버튼</div>
        </div>
    );
};
export default TemplateC;
