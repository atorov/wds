import { useController, useForm } from 'react-hook-form';
import ReactSelect from 'react-select';
import { FormGroup } from './FormGroup';
import './styles.css';

const COUNTRY_OPTIONS = [
    { label: 'United States', value: 'US' },
    { label: 'India', value: 'IN' },
    { label: 'Mexico', value: 'MX' },
] as const;

type Data = {
    email: string;
    password: string;
    country: (typeof COUNTRY_OPTIONS)[number];
};
function App() {
    console.log('---');

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        watch,
    } = useForm<Data>({
        defaultValues: {
            email: 'user@test.com',
            password: '123',
            country: { label: 'United States', value: 'US' },
        },
    });

    console.log('TODO: country', watch('country'));

    const { field: countryField } = useController({
        name: 'country',
        control,
        rules: {
            required: { value: true, message: 'required!' },
        },
    });

    function onSubmit(data: Data) {
        console.log('🚀 TODO: ~ file: App.tsx:45 ~ onSubmit ~ data:', data);
        alert('Success');
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <FormGroup errorMessage={errors.email?.message}>
                <label className="label" htmlFor="email">
                    Email
                </label>
                <input
                    className="input"
                    type="email"
                    id="email"
                    {...register('email', {
                        required: {
                            value: true,
                            message: 'required!',
                        },
                        validate: (value) => {
                            if (!value.endsWith('@test.com')) {
                                return 'wrong domain!';
                            }
                        },
                    })}
                />
            </FormGroup>
            <FormGroup errorMessage={errors.password?.message}>
                <label className="label" htmlFor="password">
                    Password
                </label>
                <input
                    className="input"
                    type="password"
                    id="password"
                    {...register('password', {
                        required: {
                            value: true,
                            message: 'required!',
                        },
                        minLength: {
                            value: 3,
                            message: '3+chars are needed!',
                        },
                        // validate: (value) => {
                        // ...
                        // },
                    })}
                />
            </FormGroup>
            <FormGroup errorMessage={errors.country?.message}>
                <label className="label" htmlFor="country">
                    Country
                </label>
                <ReactSelect
                    id="country"
                    options={COUNTRY_OPTIONS}
                    isClearable
                    classNamePrefix="react-select"
                    {...countryField}
                />
            </FormGroup>
            <button className="btn" type="submit">
                Submit
            </button>
        </form>
    );
}

export default App;
