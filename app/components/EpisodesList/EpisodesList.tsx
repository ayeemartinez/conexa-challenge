import { FC } from "react"

interface EpisodesList {
    type:string,
}

export const EpisodesList:FC <EpisodesList> = ({type}) => {
    return (
        <div className="w-full rounded-lg bg-white border border-neutrals-200 p-7 flex justify-center flex-wrap text-left lg:w-1/3">
            <div className="w-full text-left">
                <h3 className="text-primary-300 font-bold text-sm uppercase">{type} EPISODES</h3>
                <span className="text-neutrals-400">Episode 1 <br/> Episode 1 <br/> Episode 1 <br/> Episode 1 <br/> Episode 1 <br/> Episode 1 <br/></span>
            </div>
        </div>
    )
}