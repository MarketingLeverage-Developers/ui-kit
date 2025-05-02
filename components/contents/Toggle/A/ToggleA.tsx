import Toggle, { useToggle } from '@/headless/Toggle/Toggle';
import styles from './ToggleA.module.scss';
import classNames from 'classnames';
import { MouseEventHandler } from 'react';
import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/types';
import { config } from '@/ui-kit/configs/config';

type ToggleAProps = {
    onToggleClick: (value: boolean) => void;
    defaultValue: boolean;
    color?: HexColor;
};

const ToggleA = ({ onToggleClick, defaultValue, color = config.theme.primaryColor ?? '#E88731' }: ToggleAProps) => {
    const { changeToggle } = useToggle();

    const handleToggleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();

        const newToggleValue = changeToggle();
        console.log('newToggleValue', newToggleValue);

        onToggleClick(newToggleValue);
    };

    const combinedClassName = classNames(styles.ToggleA, {
        [styles.Active]: defaultValue,
    });

    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
    };

    return <Toggle.Button className={combinedClassName} onClick={handleToggleClick} style={{ ...cssVariables }} />;
};

function withProvider<P extends {}>(WrappedComponent: React.ComponentType<P>): React.FC<P> {
    return (props: P) => {
        return (
            <Toggle>
                <WrappedComponent {...(props as any)} />
            </Toggle>
        );
    };
}

export default withProvider(ToggleA);
