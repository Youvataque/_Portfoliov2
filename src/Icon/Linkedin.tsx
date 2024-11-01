import { cn } from "@/lib/utils"

const Linkedin: React.FC<{ width: string, height: string, color: string }> = ({ width, height, color }) => {
    return (
        <svg viewBox="0 0 425 512" xmlns="http://www.w3.org/2000/svg" className={cn(color, "")} height={height} width={width}>
            <path d="M212 51.5q43.5 0 81.5 16.5t66.5 44.75T405 179t16.5 81.5T405 342t-45 66.5-66.5 45T212 470t-81.5-16.5-66.25-45T19.5 342 3 260.5 19.5 179t44.75-66.25T130.5 68 212 51.5zm-65 157H94.5v170H147v-170zM120.5 195q11 0 18.75-7.5T147 169t-7.75-18.5-18.75-7.5-18.5 7.5-7.5 18.5 7.5 18.5 18.5 7.5zM330 280q0-18-10-35.25t-26-26.25q-14.5-8-33.75-8.5T225 216.5v-8h-52v170h52v-104l22-10.5q4-2 10.75-2t10.75 2.5q3 1.5 6 6.5t3 9v98.5H330V280z"/>
        </svg>
    )
}

export default Linkedin
