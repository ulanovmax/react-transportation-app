import Button from '@/components/form/button/Button.tsx';
import { IconDots, IconProps } from '@tabler/icons-react';
import { ComponentType, useRef, useState } from 'react';
import { useOutsideClick } from '@/hooks/useClickOutside.ts';

export interface ActionOption {
    label: string;
    icon?: ComponentType<IconProps>;
    click: () => void;
}

interface Props {
    options: ActionOption[];
}

const ActionsButton = ({ options }: Props) => {
    const [isDropdownShow, setIsDropdownShow] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useOutsideClick(ref, () => setIsDropdownShow(false));

    const InputIcon = (Icon: ComponentType<IconProps>) => {
        return <Icon size="16" />;
    };

    const clickAction = (callback: () => void) => {
        callback();
        setIsDropdownShow(false);
    };

    return (
        <div ref={ref} className="relative z-20">
            <Button
                onClick={() => setIsDropdownShow((value) => !value)}
                className={`${isDropdownShow ? '!bg-blue-700' : ''}`}
            >
                <IconDots />
            </Button>

            {isDropdownShow && (
                <div className="bordered slide-down absolute left-0 top-full overflow-hidden rounded-md bg-white max-md:left-auto max-md:right-0">
                    <ul>
                        {options.map((item) => {
                            return (
                                <li
                                    key={item.label}
                                    className="flex cursor-pointer items-center gap-2 border-b border-solid border-slate-200 bg-white py-1 pl-2 pr-4 text-base text-slate-900 transition-colors hover:bg-slate-200"
                                    onClick={() => clickAction(item.click)}
                                >
                                    {item.icon && InputIcon(item.icon)}

                                    {item.label}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ActionsButton;
