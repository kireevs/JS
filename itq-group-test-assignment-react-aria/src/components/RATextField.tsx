import {
    FieldError,
    Input,
    Label,
    TextField,
    TextFieldProps,
    Text,
} from "react-aria-components";

interface RATextFieldProps extends TextFieldProps {
    label: string;
    description?: string;
}

function RATextField({ description, label, ...props }: RATextFieldProps) {
    return (
        <TextField
            {...props}
            aria-label={props.name}
            className={"flex w-full flex-col gap-2"}
        >
            <Label className="block text-sm font-medium">{label}</Label>
            <Input
                className={
                    "w-full rounded-lg border-2 border-slate-950 bg-slate-600 p-2.5 text-sm outline-none transition invalid:border-red-500 focus:border-emerald-400"
                }
            />
            {description && (
                <Text className="text-xs" slot="description">
                    {description}
                </Text>
            )}
            <FieldError className={"text-red-500"} />
        </TextField>
    );
}

export default RATextField;
