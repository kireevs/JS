import { Button, ButtonProps } from "react-aria-components";

interface RAButtonProps extends ButtonProps {
    text: string;
}

function RAButton({ text, ...props }: RAButtonProps) {
    return (
        <Button
            className="self-center rounded-lg border-2 border-slate-950 bg-slate-700 px-4 py-2 transition hover:border-emerald-500 hover:text-emerald-500"
            {...props}
        >
            {text}
        </Button>
    );
}

export default RAButton;
