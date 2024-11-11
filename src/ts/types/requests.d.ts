import type { RequestTypeEnums } from "@/ts/enums/request-type.enums.ts";

import type { IUser } from "@/ts/types/users";

interface IRequest {
	user: IUser;
	id: string;
	fromCity: string;
	toCity: string;
	type: RequestTypeEnums;
	dateDispatch: string;
	dateCreated: string;
	category?: string;
	description?: string;
}

export type { IRequest };
