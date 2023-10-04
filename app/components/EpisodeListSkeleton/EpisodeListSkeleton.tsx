
import { FC } from "react"

export const EpisodesListSkeleton = () => {

 
    return (
        <div className="w-full animate-pulse rounded-lg bg-white border border-neutrals-200 p-7 flex justify-center flex-wrap lg:w-1/3">
            <div className="w-full ">
                <h3 className="bg-neutrals-200 h-5 rounded-lg"></h3>
                <div className="mt-3 h-11 rounded-lg bg-neutrals-200"></div>
            </div>
        </div>
    )
}