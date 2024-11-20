import { IRequest } from '@/ts/types/requests';
import {
    IconBoxSeam,
    IconCalendarEvent,
    IconCategory,
    IconEdit,
    IconTrash,
    IconTruckDelivery,
    IconUser,
    IconUsersGroup,
} from '@tabler/icons-react';
import Badge from '@/components/base/Badge.tsx';
import ActionsButton, { ActionOption } from '@/components/form/button/ActionsButton.tsx';
import Button from '@/components/form/button/Button.tsx';
import { RequestTypeEnums } from '@/ts/enums/request-type.enums.ts';
import { useRequestTypeName } from '@/hooks/useRequestTypeName.ts';
import { useMatchingRequests } from '@/hooks/useMatchingRequests.ts';
import './cards.pcss';

interface Props {
    data: IRequest;
    editable?: boolean;
    clickable?: boolean;
}

const RequestCard = ({ data }: Props) => {
    const options: ActionOption[] = [
        {
            label: 'Edit',
            icon: IconEdit,
            click: () => {
                console.log('edit');
            },
        },
        {
            label: 'Delete',
            icon: IconTrash,
            click: () => {
                console.log('delete');
            },
        },
    ];

    const requestTypeName = useRequestTypeName(data.type);
    const matchingList = useMatchingRequests(data);

    return (
        <div className="rounded-lg bg-white shadow-lg transition-shadow hover:shadow-2xl">
            <div className="request-card relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4 rounded-t-lg bg-blue-500 p-3 text-white">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 self-center max-sm:gap-2">
                        <h3 className="text-lg max-sm:text-base">{data.fromCity}</h3>

                        <IconTruckDelivery className="max-sm:h-5 max-sm:w-5" />

                        <h3 className="text-lg max-sm:text-base">{data.toCity}</h3>
                    </div>

                    <div className="flex gap-3">
                        <Badge>{data.type}</Badge>

                        <ActionsButton options={options} />
                    </div>
                </div>

                <div className="relative flex flex-grow flex-col overflow-hidden p-3 pt-5">
                    <ul className="mb-5 space-y-3">
                        <li v-if="data.user && !editable" className="flex items-center gap-2 text-base font-medium">
                            <IconUser size="20" className="text-slate-800 opacity-50" />

                            {data.user.name}
                        </li>

                        <li className="flex items-center gap-2 text-base font-medium">
                            <IconCalendarEvent size="20" className="text-slate-800 opacity-50" />
                            {data.dateDispatch}
                        </li>

                        <li
                            v-if="data.type === RequestTypeEnums.Order"
                            className="flex items-center gap-2 text-base font-medium"
                        >
                            <IconCategory size="20" className="text-slate-800 opacity-50" />
                            {data.category}
                        </li>

                        <li className="flex items-center gap-2 text-base font-medium">
                            <IconUsersGroup size="20" className="text-slate-800 opacity-50" />
                            {matchingList.length} matching {requestTypeName}
                        </li>
                    </ul>

                    <p
                        v-if="data.type === RequestTypeEnums.Order"
                        className="description mb-5 break-words text-base opacity-80"
                    >
                        {data.description ? data.description : 'No description'}
                    </p>

                    <div v-if="clickable" className="mt-auto flex gap-3">
                        <Button size="sm">Show more</Button>
                    </div>

                    {/* -- Background Icon -- */}
                    {data.type === RequestTypeEnums.Order && <IconBoxSeam className="icon" />}
                    {data.type === RequestTypeEnums.Delivery && <IconTruckDelivery className="icon" />}
                </div>
            </div>
        </div>
    );
};

export default RequestCard;
