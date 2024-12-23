import { cn } from "@/lib/utils"

const Firebase: React.FC<{ width: string, height: string, color: string }> = ({ width, height, color }) => {
    return (
        <svg
            height={height}
            viewBox="0 0 24 24"
            width={width}
            xmlns="http://www.w3.org/2000/svg"
            className={cn(color, "")}
        >
            <path d="m3.89 15.672 2.365-15.211a.542.542 0 0 1 1.015-.173l2.543 4.771zm16.794 3.692-2.25-14a.54.54 0 0 0 -.919-.295l-14.199 14.296 7.856 4.427a1.621 1.621 0 0 0 1.588 0zm-6.384-12.217-1.82-3.482a.542.542 0 0 0 -.96 0l-7.99 14.319z"/>
        </svg>
    )
}

export default Firebase
