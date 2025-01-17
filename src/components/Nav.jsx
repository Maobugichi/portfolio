const Nav = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours < 12 ? "AM" : "PM";

    
    const time = `${hours}:${minutes}${ampm}`;
    
    return(
        <nav className="w-[90%] mx-auto flex justify-between h-auto min-h-[15vh]  items-center">
            <h2 className="text-2xl text-[#61b2e4] font-bold">Maobugichi...</h2>
            <span>{time}</span>
        </nav>
    )
}

export default Nav