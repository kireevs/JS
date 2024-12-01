import { ReactNode } from "react";

interface LatoutProps {
    children: ReactNode;
}

function Layout({ children }: LatoutProps) {
    return (
        <>
            <h1 className="pt-12 text-center text-3xl">Тестовое задание ITQ-group</h1>
            <div className="container">{children}</div>
        </>
    );
}

export default Layout;
