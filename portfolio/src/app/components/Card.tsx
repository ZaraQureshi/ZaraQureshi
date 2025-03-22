import { CardDetails } from '../model';
interface CardProps {
    params: CardDetails;
  }
const Card=({params}:CardProps)=>{
    return(
        <div>
            <h3>{params.title}</h3>
            <span>{params.description}</span>
            <span>{params.link}</span>
        </div>
    )
}
export default Card;