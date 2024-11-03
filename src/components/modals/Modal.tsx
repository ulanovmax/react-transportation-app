import { PropsWithChildren } from '@/ts/common';
import { ReactNode } from 'react';
import Button from '@/components/form/button/Button.tsx';
import { IconX } from '@tabler/icons-react';

interface Props {
    open: boolean;
    size: 'lg' | 'sm';
    header?: ReactNode;
    closeButton?: boolean;
    onClose: () => void;
}

const Modal = ({ open, size, header, children, closeButton, onClose }: PropsWithChildren<Props>) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-400/30 backdrop-blur-sm">
            <div onClick={onClose} className="flex min-h-full items-center justify-center p-4 text-center">
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={`${size === 'lg' ? 'max-w-5xl' : 'max-w-xl'} zoom-in bordered relative flex w-full flex-col overflow-hidden rounded-md bg-white p-4 text-left shadow-xl`}
                >
                    {header && (
                        <div className="mb-4 border-b border-solid border-b-slate-200 pb-4 pr-12 pt-1">{header}</div>
                    )}

                    {children}

                    {closeButton && (
                        <Button onClick={onClose} className="absolute right-4 top-4" size="sm">
                            <IconX size="20" />
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
