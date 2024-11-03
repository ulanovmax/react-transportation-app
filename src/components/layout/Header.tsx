import Logo from '@/components/base/Logo.js';
import Button from '@/components/form/button/Button.js';
import { IconLogout, IconMessage } from '@tabler/icons-react';
import { NavLink, NavLinkRenderProps, useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import Modal from '@/components/modals/Modal.tsx';
import { useState } from 'react';

const Header = () => {
    const [openLogout, setOpenLogout] = useState(false);
    const navigate = useNavigate();

    const logout = () => {
        navigate('/login');
    };

    const setActiveClass = ({ isActive }: NavLinkRenderProps) => (isActive ? 'active hover-link' : 'hover-link');
    return (
        <>
            <header>
                <div className="bordered py-4">
                    <div className="container flex items-center justify-between">
                        <Logo />

                        <div className="flex items-center gap-3">
                            <Button variant="success" size="sm">
                                <IconMessage />
                            </Button>

                            <Button onClick={() => setOpenLogout(true)} variant="success" size="sm">
                                <IconLogout />
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>

                <nav className="bordered pt-6 shadow-md">
                    <div className="container">
                        <ul className="flex gap-4">
                            <NavLink className={setActiveClass} to="/dashboard">
                                Dashboard
                            </NavLink>
                            <NavLink className={setActiveClass} to="/requests">
                                All requests
                            </NavLink>
                        </ul>
                    </div>
                </nav>
            </header>

            {createPortal(
                <Modal open={openLogout} size="sm" onClose={() => setOpenLogout(false)}>
                    <div className="flex flex-col items-center pb-3 pt-5">
                        <h2 className="mb-5 text-center text-xl max-sm:mb-3 max-sm:text-lg">
                            Are you sure you want to logout?
                        </h2>

                        <div className="flex gap-4">
                            <Button onClick={() => setOpenLogout(false)} variant="secondary">
                                Cancel
                            </Button>

                            <Button onClick={logout} variant="error">
                                Cancel
                            </Button>
                        </div>
                    </div>
                </Modal>,
                document.body,
            )}
        </>
    );
};
export default Header;
