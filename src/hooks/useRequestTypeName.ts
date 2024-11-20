import { RequestTypeEnums } from "@/ts/enums/request-type.enums.ts";

export const useRequestTypeName = (type: RequestTypeEnums) =>
	type === RequestTypeEnums.Delivery ? "orders" : "deliveries";
