import { cn } from "@/lib/utils"

const Tailwind: React.FC<{ width: string, height: string, color: string }> = ({ width, height, color }) => {
    return (
        <svg
            height={height}
            viewBox="0 0 24 24"
            width={width}
            xmlns="http://www.w3.org/2000/svg"
            className={cn(color, "")}
        >
            <path d="m12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35-.98-1-2.09-2.15-4.59-2.15m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35-.98-1-2.09-2.15-4.59-2.15z"/>
        </svg>
    )
}

export default Tailwind
