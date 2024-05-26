import { cn } from "@/lib/utils"

const Vite: React.FC<{ width: string, height: string, color: string }> = ({ width, height, color }) => {
    return (
        <svg
            height={height}
            viewBox="0 0 24 24"
            width={width}
            xmlns="http://www.w3.org/2000/svg"
            className={cn(color, "")}
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 4.5l6 -1.5l-2 6.5l2 -.5l-4 7v-5l-3 1z" />
            <path d="M15 6.5l7 -1.5l-10 17l-10 -17l7.741 1.5" />
        </svg>
    )
}

export default Vite
