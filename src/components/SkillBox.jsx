const SkillBox = ({children}) => {
    return(
        <div className="w-[125px] lg:w-[130px] flex flex-col items-center justify-center border h-[50px] hover:bg-[#61b2e4] transition-colors duration-700 ease-out">{children}</div>
    )
}

export default SkillBox