
import { cn } from "@/lib/utils"

const NextIco: React.FC<{ width: string, height: string, color: string }> = ({ width, height, color }) => {
    return (
        <svg
            height={height}
            viewBox="0 0 1000 1000"
            width={width}
            xmlns="http://www.w3.org/2000/svg"
            className={cn(color, "")}
            fill="none"
        >
            <path d="m467.253.269139c-2.15.195474-8.993.879641-15.151 1.368331-142.034 12.80363-275.074 89.42963-359.3356 207.20353-46.9208 65.484-76.9306 139.764-88.26982 218.443-4.007821 27.464-4.49658 35.576-4.49658 72.814s.488759 45.35 4.49658 72.814c27.17502 187.754 160.80142 345.502 342.03342 403.949 32.453 10.458 66.666 17.592 105.572 21.893 15.151 1.666 80.645 1.666 95.796 0 67.156-7.428 124.047-24.044 180.157-52.681 8.602-4.398 10.264-5.571 9.091-6.548-.782-.586-37.439-49.748-81.428-109.173l-79.96-107.999-100.196-148.268c-55.132-81.513-100.489-148.17-100.88-148.17-.391-.097-.782 65.778-.977 146.215-.293 140.84-.391 146.509-2.151 149.832-2.541 4.789-4.496 6.744-8.602 8.894-3.128 1.564-5.865 1.857-20.625 1.857h-16.912l-4.496-2.835c-2.933-1.857-5.083-4.3-6.549-7.134l-2.053-4.399.195-195.963.293-196.061 3.031-3.812c1.564-2.052 4.887-4.691 7.233-5.962 4.008-1.955 5.572-2.15 22.483-2.15 19.942 0 23.265.782 28.446 6.451 1.466 1.563 55.719 83.272 120.626 181.693 64.907 98.422 153.665 232.811 197.263 298.783l79.178 119.924 4.008-2.639c35.484-23.066 73.021-55.906 102.737-90.114 63.246-72.618 104.008-161.169 117.693-255.583 4.008-27.464 4.497-35.576 4.497-72.814s-.489-45.35-4.497-72.814c-27.175-187.754-160.801-345.5019-342.033-403.9488-31.965-10.3602-65.982-17.49504-104.105-21.79548-9.385-.977375-73.998-2.05248-82.112-1.270581zm204.692 302.398861c4.692 2.346 8.505 6.842 9.873 11.533.782 2.542.978 56.884.782 179.348l-.293 175.732-30.987-47.5-31.085-47.5v-127.743c0-82.588.391-129.013.977-131.261 1.564-5.474 4.985-9.774 9.678-12.315 4.007-2.053 5.474-2.248 20.821-2.248 14.467 0 17.008.195 20.234 1.954z"/>
        </svg>
    )
}

export default NextIco
