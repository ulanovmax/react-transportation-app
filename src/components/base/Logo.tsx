import { Link } from 'react-router-dom';
import logoWhite from '@img/logo-white.svg';
import logo from '@img/logo.svg';

interface Props {
    variant?: 'white';
    className?: string;
}

const Logo = ({ variant, className }: Props) => {
    return (
        <Link to="/" className={`h-10 w-44 transition hover:scale-110 ${className}`}>
            <img className="object-contain h-full w-full" src={variant ? logoWhite : logo} alt="Transportation" />
        </Link>
    );
};

export default Logo;
