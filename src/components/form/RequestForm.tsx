import { RequestTypeEnums } from '@/ts/enums/request-type.enums.ts';
import { OrderForm } from '@/ts/types/forms';
import Button from '@/components/form/button/Button.tsx';
import { FormEvent, useState } from 'react';
import CitySearch from '@/components/form/city-search/CitySearch.tsx';

interface Props {
    type: RequestTypeEnums;
    defaultValues?: OrderForm;
    buttonLabel: string;
    onSubmit: () => void;
}

const RequestForm = ({ type, buttonLabel, onSubmit }: Props) => {
    const [isDisabled] = useState(false);
    const [fromCity, setFromCity] = useState('');

    const onSubmitForm = (e: FormEvent) => {
        e.preventDefault();
        console.log(fromCity);
        onSubmit();
    };

    return (
        <form onSubmit={onSubmitForm}>
            <div
                className={`${type === RequestTypeEnums.Delivery ? 'grid-cols-1' : 'grid-cols-2 max-xs:grid-cols-1'} mb-5 grid gap-4`}
            >
                <CitySearch placeholder="Select city..." onSelect={(city) => setFromCity(city)} />
            </div>

            <Button disabled={isDisabled} type="submit">
                {buttonLabel}
            </Button>
        </form>
    );
};

export default RequestForm;
