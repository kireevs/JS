import { useState, FormEvent } from "react";
import TextField from "./TextField";
import ErrorsList from "./ErrorsList";
import SubmitButton from "./SubmitButton";

interface InfoFormData {
    name: string;
    age: string;
    email: string;
}

interface InfoFormErrors {
    name?: string;
    age?: string;
    email?: string;
}

function InfoForm() {
    const [errors, setErrors] = useState<InfoFormErrors>({});

    function validateForm(
        name: string,
        age: string,
        email: string,
    ): InfoFormErrors {
        const errorsToReturn: InfoFormErrors = {};
        const nameRe = /^[A-Za-zА-Яа-я]+$/;
        const ageRe = /^[0-9]+$/;
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!nameRe.test(name)) {
            errorsToReturn.name =
                "Имя должно включать только кириллицу и латиницу";
        }
        if (!ageRe.test(age)) {
            errorsToReturn.age = "Возраст должен включать только цифры";
        }
        if (!emailRe.test(email)) {
            errorsToReturn.email = "Некорректный формат Email";
        }

        return errorsToReturn;
    }

    function submitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const InfoFormData = Object.fromEntries(
            new FormData(e.currentTarget),
        ) as unknown as InfoFormData;
        const { name, age, email } = InfoFormData;

        const validationErrors = validateForm(name, age, email);
        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            alert(`Имя: ${name}\nВозраст: ${age}\nEmail: ${email}`);
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="flex flex-col gap-4">
                <TextField
                    label="Имя"
                    type="text"
                    name="name"
                    error={errors.name}
                />
                <TextField
                    label="Возраст"
                    type="text"
                    name="age"
                    error={errors.age}
                />
                <TextField
                    label="Email"
                    type="text"
                    name="email"
                    error={errors.email}
                />
                <ErrorsList errors={Object.values(errors)} />
                <SubmitButton />
            </div>
        </form>
    );
}

export default InfoForm;
