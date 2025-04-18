import Item from '@/ui-kit/Item/Item';
import Responsive from '@/ui-kit/Responsive/Responsive';
import Text from '@/ui-kit/Text/Text';
import React from 'react';

type FormLabelProps = {
    label: string;
    children: React.ReactNode;
};

const FormLabel = ({ children, label }: FormLabelProps) => {
    return (
        <Responsive align="center">
            <Item flex={4}>
                <LabelText>{label}</LabelText>
            </Item>
            <Item flex={7}>{children}</Item>
        </Responsive>
    );
};

export default FormLabel;

const LabelText = ({ ...props }) => (
    <Text size={18} weight={600} {...props}>
        {props.children}
    </Text>
);
