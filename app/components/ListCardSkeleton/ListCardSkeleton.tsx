
export const ListCardSkeleton = () => {
    return (
        <section className="w-full animate-pulse rounded-lg bg-white border border-neutrals-200 py-7 px-4 flex justify-center flex-wrap  md:px-7 xl:w-1/2">
            <div className="w-full flex justify-start  rounded-lg">
                <div className="rounded-full px-4 py-2 bg-neutrals-200 mb-6 flex items-center h-10 w-full">
                </div>
            </div>
            <div className="w-full gap-5 lg:flex-nowrap rounded-lg border-neutrals-200">
                <div className="grid grid-cols-1 gap-5 bg-neutrals-200 rounded-lg justify-center w-full md:grid-cols-2 h-24 md:h-36">
                </div>
                <div className="grid grid-cols-1 mt-3 gap-5 bg-neutrals-200 rounded-lg justify-center w-full md:grid-cols-2 h-24 md:h-36">
                </div>
                <div className="mt-3 bg-neutrals-200 rounded-lg justify-center w-full md:grid-cols-2 h-6"></div>
            </div>
        </section>
    )
}