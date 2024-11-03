import Button from '@/components/form/button/Button.tsx';
import { IconPlus } from '@tabler/icons-react';

const RequestsPage = () => {
    return (
        <>
            <div className="mb-10">
                <div>
                    <h1 className="mb-5 text-xl text-slate-900">Hello, Mate 👋</h1>
                </div>

                <Button size="sm" variant="success">
                    Add new request
                    <IconPlus />
                </Button>
            </div>
        </>
    );
};

export default RequestsPage;
