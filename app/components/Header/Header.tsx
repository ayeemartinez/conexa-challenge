
export const Header = () => { 
    return (
        <div className="text-center bg-white w-full flex flex-wrap justify-center py-6 p-5 md:p-7 lg:p-11 lg:pb-8"> 
           <h1 className="text-secondary-200 text-3xl font-medium text-center w-full mb-4 uppercase font-mono md:text-4xl">Welcome to my Rick and Morty&nbsp;app</h1> 
            <span className="text-neutrals-400 tex-base md:text-lg">Here you can see two lists of many Rick and Morty characters. You&apos;ll see more info about them if you pick one from each list.</span>
        </div>
    )
}