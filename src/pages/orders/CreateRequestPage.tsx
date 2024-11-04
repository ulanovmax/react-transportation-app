import RequestLinkCard from '@/components/cards/RequestLinkCard.tsx';
import { RequestTypeEnums } from '@/ts/enums/request-type.enums.ts';
import BackLink from '@/components/base/BackLink.tsx';

const CreateOrderPage = () => {
    return (
        <>
            <BackLink />

            <div className="mb-10 text-center">
                <h1 className="mb-4 text-2xl">Let's create your request!</h1>
                <p className="text-lg">Choose type of your request 👇</p>
            </div>

            <div className="zoom-in max-xs:flex-col flex justify-center gap-5">
                <RequestLinkCard
                    to="/create-order"
                    title="Order"
                    type={RequestTypeEnums.Order}
                    description="If you want to send your parcel"
                />

                <RequestLinkCard
                    to="/create-delivery"
                    title="Delivery"
                    type={RequestTypeEnums.Delivery}
                    description="If you open to deliver"
                />
            </div>
        </>
    );
};

export default CreateOrderPage;
