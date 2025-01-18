const Container = ({children}) => {
    return(
        <div className="bg-black h-auto min-h-[100vh] font-fira-font lg:min-h-[110vh] text-white">
            {children}
        </div>
    )
}

export default Container