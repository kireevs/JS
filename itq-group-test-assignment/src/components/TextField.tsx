interface TextFieldProps {
    label: string;
    type: string;
    name: string;
    error?: string;
}

function TextField({ label, type, name, error }: TextFieldProps) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium" htmlFor={name}>
                {label}:
            </label>
            <input
                className={`w-full rounded-lg border-2 bg-slate-600 p-2.5 text-sm outline-none transition focus:border-emerald-400 ${error ? "border-red-500" : "border-slate-950"}`}
                type={type}
                id={name}
                name={name}
            />
        </div>
    );
}

export default TextField;
