import { ReactNode } from 'react';
import BackLink from '@/components/base/BackLink.js';
import Modal from '@/components/modals/Modal.tsx';
import Button from '@/components/form/button/Button.tsx';
import { Link } from 'react-router-dom';
import TypeLoader from '@/components/feedback/loader/TypeLoader.tsx';

interface Props {
    isModalOpen: boolean;
    header: ReactNode;
    form: ReactNode;
    onClose: () => void;
}

const CreateRequestLayout = ({ header, form, isModalOpen, onClose }: Props) => {
    return (
        <>
            <BackLink to="/create-request" />

            <div>
                <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
                    <div>{header}</div>

                    <TypeLoader />
                </div>

                {form}
            </div>

            {/* Confirmation modal */}
            <Modal header={false} open={isModalOpen} size="sm" onClose={onClose}>
                <div className="py-5 max-xs:pt-10">
                    <div className="flex flex-col items-center">
                        <h2 className="mb-10 text-center text-xl">Thanks for creating request!</h2>

                        <div className="flex flex-wrap items-center gap-4">
                            <Button className="flex-grow justify-center" variant="secondary">
                                Create another one
                            </Button>

                            <Link className="flex-grow" to="/requests">
                                <Button className="h-full w-full justify-center" variant="success">
                                    Show my requests
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default CreateRequestLayout;
