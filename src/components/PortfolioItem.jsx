import Paragraph from "./ProjectPara"

const PortFolioItems = ({title, type}) => {
    return(
      <div>
         <h2>{title}</h2>
         <Paragraph/>
         <span>
            {type}
         </span>
      </div>  
    )
}