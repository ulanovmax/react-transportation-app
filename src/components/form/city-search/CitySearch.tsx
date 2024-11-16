import Input, { InputProps } from '@/components/form/input/Input.tsx';
import { ChangeEvent, useState } from 'react';
import { ICity } from '@/ts/types/cities';
import { IconMapPin } from '@tabler/icons-react';
import { getCities } from '@/components/form/city-search/search-city.ts';
import useDebounce from '@/hooks/useDebounse.ts';

interface Props extends Pick<InputProps, 'placeholder' | 'label' | 'error' | 'required'> {
    onSelect: (name: ICity['name']) => void;
    defaultValue?: string;
}

const CitySearch = (props: Props) => {
    const [searchValue, setSearchValue] = useState(props.defaultValue ?? '');
    const [cities, setCities] = useState<ICity[]>();
    const [isDropdownShow, setDropdownShow] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const searchCities = useDebounce(async () => {
        try {
            const res = await getCities(searchValue);

            if (res) {
                setCities(res);
            }

            setDropdownShow(true);
        } finally {
            setLoading(false);
        }
    }, 500);

    const onInput = async (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setSearchValue(value);
        setDropdownShow(false);

        if (!value) return;

        setLoading(true);

        props.onSelect('');

        searchCities();
    };

    const onSelect = (city: ICity) => {
        const value = `${city.name} (${city.country})`;

        setSearchValue(value);

        props.onSelect(value);

        setDropdownShow(false);
    };

    const renderedList = cities?.map((city: ICity) => {
        return (
            <li
                onClick={() => onSelect(city)}
                key={city.latitude}
                className="flex cursor-pointer items-center gap-3 border-b border-solid border-b-slate-200 bg-white px-3 py-1.5 transition-colors hover:bg-slate-300"
            >
                <IconMapPin size="16" className="opacity-40" />
                <span className="capitalize">
                    {city.name}
                    <span className="ml-1">({city.country})</span>
                </span>
            </li>
        );
    });

    return (
        <div className="relative">
            <Input
                value={searchValue}
                onChange={onInput}
                label={props.label}
                placeholder={props.placeholder}
                loading={isLoading}
                icon={IconMapPin}
                error={props.error}
                required={props.required}
            />

            {isDropdownShow && (
                <div className="dropdown slide-down bordered absolute right-0 z-20 w-full overflow-hidden rounded-md shadow-lg">
                    <ul className="dropdown__list overflow-y-auto">
                        {cities && cities.length > 0 ? (
                            renderedList
                        ) : (
                            <li className="border-b border-solid border-b-slate-200 bg-white px-3 py-1.5">
                                <span className="opacity-60"> No city found... </span>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};
export default CitySearch;
