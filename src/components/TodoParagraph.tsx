import { ReactNode } from "react";

const TodoParagraph = ({
    children,
    ...props
}: { children: ReactNode } & React.HTMLAttributes<HTMLParagraphElement>) => {
    return <p {...props}>{children}</p>;
};

export default TodoParagraph;
