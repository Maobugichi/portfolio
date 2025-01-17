const Container = ({children}) => {
    return(
        <div className="bg-black h-auto min-h-[100vh] lg:min-h-[110vh] text-white">
            {children}
        </div>
    )
}

export default Container