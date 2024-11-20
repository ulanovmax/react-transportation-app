import { RequestTypeEnums } from '@/ts/enums/request-type.enums.ts';

import type { IRequest } from '@/ts/types/requests';

export const useMatchingRequests = (request: IRequest): IRequest[] => {
    const requestsList: IRequest[] = [];

    return requestsList.filter((item) => {
        if (item.user.id === request.user.id) return false;

        const requestDate = new Date(request.dateDispatch);
        const itemDate = new Date(item.dateDispatch);

        const cityCondition = request.toCity === item.toCity && request.fromCity === item.fromCity;

        const dateCondition =
            request.type === RequestTypeEnums.Delivery ? requestDate <= itemDate : requestDate >= itemDate;

        return request.type !== item.type && cityCondition && dateCondition;
    });
};
