import { ReactNode } from "react";

const TodoButton = ({
    children,
    ...props
}: { children: ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <button {...props}>{children}</button>;
};

export default TodoButton;
