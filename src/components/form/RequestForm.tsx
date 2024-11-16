import { RequestTypeEnums } from '@/ts/enums/request-type.enums.ts';
import { OrderForm } from '@/ts/types/forms';
import Button from '@/components/form/button/Button.tsx';
import { FormEvent, useState } from 'react';
import CitySearch from '@/components/form/city-search/CitySearch.tsx';
import Select from '@/components/form/select/Select.tsx';
import { orderCategories } from '@/constants/order-categories.ts';
import Input from '@/components/form/input/Input.tsx';
import { IconCalendarEvent } from '@tabler/icons-react';
import { format } from 'date-fns';
import Textarea from '@/components/form/textarea/Textarea.tsx';

interface Props {
    type: RequestTypeEnums;
    defaultValues?: OrderForm;
    buttonLabel: string;
    onSubmit: () => void;
}

const RequestForm = ({ type, buttonLabel, onSubmit }: Props) => {
    const [isDisabled] = useState(false);
    const [fromCity, setFromCity] = useState('');
    const [toCity, setToCity] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [dateDispatch, setDateDispatch] = useState(format(new Date(), 'yyyy-MM-dd'));

    const onSubmitForm = (e: FormEvent) => {
        e.preventDefault();
        console.log(fromCity);
        console.log(toCity);
        onSubmit();
    };

    return (
        <form onSubmit={onSubmitForm}>
            <div
                className={`${type === RequestTypeEnums.Delivery ? 'grid-cols-1' : 'grid-cols-2 max-xs:grid-cols-1'} mb-5 grid gap-4`}
            >
                <CitySearch
                    required
                    label="Select departure city"
                    placeholder="Select city..."
                    onSelect={(city) => setFromCity(city)}
                />

                <CitySearch
                    required
                    label="Select where to send"
                    placeholder="Select city..."
                    onSelect={(city) => setToCity(city)}
                />

                {type === RequestTypeEnums.Order && (
                    <Select
                        label="Select order category"
                        placeholder="Select category"
                        required
                        value={category}
                        onChange={(option) => setCategory(option)}
                        options={orderCategories}
                    />
                )}

                <Input
                    required
                    icon={IconCalendarEvent}
                    type="date"
                    label="Select dispatch date"
                    value={dateDispatch}
                    onChange={(e) => setDateDispatch(e.target.value)}
                />

                <Textarea
                    value={description}
                    className="col-span-full"
                    label="Description (optional)"
                    placeholder="What's in the box"
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <Button disabled={isDisabled} type="submit">
                {buttonLabel}
            </Button>
        </form>
    );
};

export default RequestForm;
