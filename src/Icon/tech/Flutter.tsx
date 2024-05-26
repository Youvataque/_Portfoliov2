import { cn } from "@/lib/utils"

const Flutter: React.FC<{ width: string, height: string, color: string }> = ({ width, height, color }) => {
    return (
        <svg
            height={height}
            viewBox="0 0 32 32"
            width={width}
            xmlns="http://www.w3.org/2000/svg"
            className={cn(color, "")}
        >
            <path d="m19.083 0-16.015 16 4.932 4.932 20.912-20.916h-9.808zm.021 14.76-8.631 8.609 8.631 8.631h9.828l-8.615-8.625 8.615-8.615z"/>
        </svg>
    )
}

export default Flutter
