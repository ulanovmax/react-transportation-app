import Button from '@/components/form/button/Button.tsx';
import { IconPlus } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import DashboardRequests from '@/components/lists/DashboardRequests.tsx';

const RequestsPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="mb-10">
                <div>
                    <h1 className="mb-5 text-xl text-slate-900">Hello, Mate 👋</h1>
                </div>

                <Button onClick={() => navigate('/create-request')} size="sm" variant="success">
                    Add new request
                    <IconPlus />
                </Button>
            </div>

            <DashboardRequests />
        </>
    );
};

export default RequestsPage;
