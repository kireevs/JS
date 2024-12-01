import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
}

function Card({ children }: CardProps) {
    return (
        <div className="flex justify-center pt-6 md:pt-12">
            <div className="w-full rounded-3xl bg-slate-900 px-8 py-12 md:px-24 lg:w-2/3 xl:w-2/5">
                {children}
            </div>
        </div>
    );
}

export default Card;
