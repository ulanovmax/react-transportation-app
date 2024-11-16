import { PropsWithChildren } from 'react';

const Badge = ({ children }: PropsWithChildren) => {
    return (
        <span className="inline-flex items-center rounded-md bg-blue-800 px-2 py-1 text-sm font-medium">
            {children}
        </span>
    );
};

export default Badge;
