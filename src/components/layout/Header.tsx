import TodoButton from "../TodoButton";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { toggleTheme } from "../../store/theme/themeSlice";
import { useEffect } from "react";

const Header = () => {
    const theme = useSelector((state: RootState) => state.theme.theme);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <header className="text-white flex justify-between items-center mb-[4.8rem]">
            <h1 className="font-sans text-[3.6rem] font-[700]">TODO</h1>
            <TodoButton onClick={() => dispatch(toggleTheme())} className="border-none bg-transparent cursor-pointer">
                <img src={theme === "light" ? "/moon-4-32.png" : "/sun-2-24.png"} />
            </TodoButton>
        </header>
    );
};

export default Header;
