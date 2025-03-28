import { ReactNode } from "react";

const Layout = ({ children, ...props }: { children: ReactNode } & React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            {...props}
            className="w-full pt-[5rem] pb-[5rem] bg-no-repeat bg-top bg-contain bg-[hsl(0,0%,98%)] bg-[url(/bg-desktop-light.jpg)] text-[hsl(236,9%,61%)] dark:bg-[hsl(235,21%,11%)] dark:bg-[url(/bg-desktop-dark.jpg)] dark:text-[hsl(234,11%,52%)]"
        >
            <div className="max-w-[54rem] mt-0 mr-auto mb-0 ml-auto">{children}</div>
        </div>
    );
};

export default Layout;
