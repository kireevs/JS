import { FormEvent } from "react";
import RATextField from "./RATextField";
import RAButton from "./RAButton";
import { Form } from "react-aria-components";

interface InfoFormData {
    name: string;
    age: string;
    email: string;
}

function InfoForm() {
    function submitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const InfoFormData = Object.fromEntries(
            new FormData(e.currentTarget),
        ) as unknown as InfoFormData;
        const { name, age, email } = InfoFormData;
        alert(`Имя: ${name}\nВозраст: ${age}\nEmail: ${email}`);
    }

    return (
        <Form onSubmit={submitHandler}>
            <div className="flex flex-col gap-4">
                <RATextField
                    label="Имя"
                    type="text"
                    name="name"
                    pattern="^[A-Za-zА-Яа-я]+$"
                    description={"Ввод только кириллицы и латиницы"}
                    isRequired
                    maxLength={40}
                />
                <RATextField
                    label="Возраст"
                    type="text"
                    name="age"
                    pattern="^[0-9]+$"
                    description={"Ввод только цифр"}
                    isRequired
                    maxLength={3}
                />
                <RATextField
                    label="Email"
                    type="email"
                    name="email"
                    isRequired
                    maxLength={40}
                />
                <RAButton text="Проверить данные" type="submit" />
            </div>
        </Form>
    );
}

export default InfoForm;
