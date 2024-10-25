import loginBG from '@img/login-bg.jpg';
import Input from '@/components/form/input/Input.tsx';
import { ChangeEvent, useState } from 'react';

const LoginPage = () => {
    const [name, setName] = useState('');

    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    return (
        <main>
            <div className="flex min-h-screen w-full">
                <div className="flex w-1/2 flex-grow items-center py-20 max-lg:w-full">
                    <div className="container w-full">
                        <div className="mx-auto max-w-xl">
                            <div className="mb-5">
                                <h1 className="mb-2 text-2xl">
                                    Welcome to the <span>Transportation 👋</span>
                                </h1>
                                <p>Please tell me your name</p>
                            </div>

                            <form>
                                <Input
                                    value={name}
                                    required={true}
                                    onChange={handleChangeName}
                                    label="Name"
                                    placeholder="Will Smith"
                                />
                            </form>
                        </div>
                    </div>
                </div>

                <div className="relative w-1/3 flex-grow bg-blue-600 max-lg:hidden">
                    <img src={loginBG} className="absolute right-0 top-0 h-full w-full object-cover" alt="Background" />
                </div>
            </div>
        </main>
    );
};

export default LoginPage;
