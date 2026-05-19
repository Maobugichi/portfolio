const Nav = () => {
    const now = new Date();

    const hours = now.getHours();
    const formattedHours = hours % 12 || 12;

    const minutes = String(now.getMinutes()).padStart(2, "0");

    const ampm = hours < 12 ? "AM" : "PM";

    const time = `${formattedHours}:${minutes} ${ampm}`;
    
    return(
        <nav className="w-[90%] mx-auto flex justify-between h-auto min-h-[15vh]  items-center">
            <h2 className="text-2xl text-[#61b2e4] font-bold">Maobugichi...</h2>
            <span>{time}</span>
        </nav>
    )
}

export default Nav