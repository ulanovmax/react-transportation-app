import RequestCard from '@/components/cards/RequestCard.tsx';
import { RequestTypeEnums } from '@/ts/enums/request-type.enums.ts';

const DashboardRequests = () => {
    return (
        <div className="slide-up grid auto-rows-fr grid-cols-2 gap-5 max-md:grid-cols-1">
            <RequestCard
                data={{
                    id: 'erfref',
                    user: {
                        id: 1,
                        name: 'Max',
                    },
                    fromCity: 'Odesa (UA)',
                    toCity: 'Lviv (UA)',
                    type: RequestTypeEnums.Delivery,
                    dateDispatch: new Date().toISOString(),
                    dateCreated: new Date().toISOString(),
                    category: 'Food',
                    description: '',
                }}
            />
        </div>
    );
};

export default DashboardRequests;
