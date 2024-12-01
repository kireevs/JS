interface ErrorsProps {
    errors: string[];
}

function ErrorsList({ errors }: ErrorsProps) {
    if (errors.length) {
        return (
            <ul className="flex flex-col gap-2">
                {errors.map((error) => (
                    <li className="text-red-500" key={error}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    } else {
        return <></>;
    }
}

export default ErrorsList;
