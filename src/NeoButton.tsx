interface NeoButtonProps {
    text: string;
    color?: "yellow" | "pink" | "blue" | "white";
    onClick?: () => void;
}

export const NeoButton = ({text, color = "yellow", onClick }: NeoButtonProps) => {

    const colors = {
        yellow: "bg-neo-yellow hover:bg-neo-yellow/80",
        pink: "bg-neo-pink hover:bg-neo-pink/80 text-white",
        blue: "bg-neo-blue hover:bg-neo-blue/80",
        white: "bg-neo-white hover:bg-gray-100",
    };

    return(
        <button
            onClick={onClick}
            className={`
                ${colors[color]}
                border-4 border-black
                px-8 py-4
                font-display font-black uppercase tracking-wider text-xl
                shadow-neo transition-all
                hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neo-lg
                active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                `}
        >
            {text}
        </button>
    );
};