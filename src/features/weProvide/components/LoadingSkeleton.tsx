import { Skeleton } from "../../../components/ui/skeleton"

const LoadingSkeleton = () => {
    const array = new Array(6).fill(0)
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            {
                array.map((_, i) => (
                    <div key={i} className="w-full mb-6 flex justify-center ">
                        <Skeleton className="h-28 w-[80%] rounded-lg"/>
                    </div>
                ))
            }
        </div>
    )
}

export default LoadingSkeleton


