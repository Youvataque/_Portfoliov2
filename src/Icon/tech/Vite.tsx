
import { cn } from "@/lib/utils"

const Vite: React.FC<{ width: string, height: string, color: string }> = ({ width, height, color }) => {
    return (
        <svg
            height={height}
            viewBox="0 0 24 24"
            width={width}
            fill="none"
            stroke={color} // Utilisation de la prop color pour le stroke
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 4l.5 13.5L12 22l7.5-4.5L20 4" />
            <path d="M4 4h16" />
            <path d="M12 22V4" />
        </svg>
    )
}

export default Vite
