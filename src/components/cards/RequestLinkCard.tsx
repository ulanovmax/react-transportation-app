import { RequestTypeEnums } from '@/ts/enums/request-type.enums.ts';
import { Link } from 'react-router-dom';
import { IconBoxSeam, IconTruckDelivery } from '@tabler/icons-react';
import './cards.pcss';

interface Props {
    to: string;
    title: string;
    description?: string;
    type: RequestTypeEnums;
}

const RequestLinkCard = ({ to, title, description, type }: Props) => {
    console.log('card');
    return (
        <Link
            className={`card-type bordered max-xs:max-w-full w-full max-w-96 cursor-pointer overflow-hidden rounded-md shadow-lg`}
            to={to}
        >
            <div className="h-96 w-full overflow-hidden bg-slate-500 max-sm:h-72">
                {type === RequestTypeEnums.Delivery ? (
                    <img src="/images/deliver-img.jpg" alt="Delivery" />
                ) : (
                    <img src="/images/order-img.jpg" alt="Order" />
                )}
            </div>

            <div className="p-5">
                <div className="mb-2 flex items-center gap-1">
                    <h2>{title}</h2>

                    {type === RequestTypeEnums.Delivery ? (
                        <IconTruckDelivery className="opacity-60" />
                    ) : (
                        <IconBoxSeam className="opacity-60" />
                    )}
                </div>

                <p v-if="description">{description}</p>
            </div>
        </Link>
    );
};

export default RequestLinkCard;
