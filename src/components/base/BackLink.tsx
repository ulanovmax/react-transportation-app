import { Link } from 'react-router-dom';
import { IconArrowNarrowLeft } from '@tabler/icons-react';
import { PropsWithChildren } from 'react';

interface Props {
    to?: string;
}

const BackLink = ({ to, children }: PropsWithChildren<Props>) => {
    return (
        <Link to={to ?? '/'} className="hover-link mb-12 inline-flex items-center gap-2 font-semibold">
            <IconArrowNarrowLeft className="text-blue-500" />

            {children ?? 'Go back'}
        </Link>
    );
};

export default BackLink;
