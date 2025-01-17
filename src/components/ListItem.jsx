const ListItem =({className,img,content,pointer}) => {
    return(
        <li className={`${className}`}>
            {img}
            {content}
            {pointer}
        </li>
    )
}

export default ListItem