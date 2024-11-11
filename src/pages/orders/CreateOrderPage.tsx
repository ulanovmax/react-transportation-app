import { useState } from 'react';
import { IconBoxSeam } from '@tabler/icons-react';
import RequestForm from '@/components/form/RequestForm.tsx';
import { RequestTypeEnums } from '@/ts/enums/request-type.enums.ts';
import CreateRequestLayout from '@/components/layout/CreateRequestLayout.tsx';

const CreateOrderPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const onSubmit = () => {
        console.log('submit');
    };

    const header = (
        <>
            <h1 className="mb-2 flex items-center gap-2 text-xl">
                Create order
                <IconBoxSeam className="text-blue-500" />
            </h1>
            <p>Please fill the form below 👇</p>
        </>
    );

    const form = <RequestForm type={RequestTypeEnums.Order} buttonLabel="Create" onSubmit={onSubmit} />;

    return (
        <CreateRequestLayout
            isModalOpen={isModalOpen}
            header={header}
            form={form}
            onClose={() => setModalOpen(false)}
        />
    );
};

export default CreateOrderPage;
