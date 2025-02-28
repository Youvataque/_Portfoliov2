import { cn } from "@/lib/utils"

const CssIco: React.FC<{ width: string, height: string, color: string }> = ({ width, height, color }) => {
    return (
        <svg
            height={height}
            viewBox="0 0 24 24"
            width={width}
            xmlns="http://www.w3.org/2000/svg"
            className={cn(color, "")}
        >
            <path d="m1.5 0h21l-1.91 21.563-8.613 2.437-8.565-2.438zm17.09 4.413-13.18-.003.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855 5.465 1.703 5.373-1.53 1.217-13.344z"/>
        </svg>
    )
}

export default CssIco
