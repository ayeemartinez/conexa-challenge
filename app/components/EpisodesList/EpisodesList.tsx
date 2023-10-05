'use client';
import { FC } from "react"
import { useState, useEffect } from "react";
import { EpisodesListSkeleton } from "./EpisodeListSkeleton";
import { Episode } from "@/app/types/types";

interface EpisodesList {
    type:string,
}

export const EpisodesList:FC <EpisodesList> = ({type}) => {

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (type) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, );


    return (
        <>
        
        {
            loading ? (<EpisodesListSkeleton/>)

                : (
                    <div className="w-full rounded-lg bg-neutrals-100  p-7 flex justify-center flex-wrap text-left lg:w-1/3">
                        <div className="w-full text-left">
                            <h3 className="text-secondary-200 font-normal text-sm uppercase">{type} EPISODES</h3>
                            <div className="flex flex-wrap max-h-36 h-full overflow-y-scroll pt-3">
                                <span className="text-neutrals-400">S01E01 - Pilot - December 2, 2013</span>
                                </div>
                        </div>
                    </div>
                )
        }
        </>
    )
}