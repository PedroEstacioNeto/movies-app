import { Movie } from "@/types";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

export interface Props {
    rating: number
}

export default function StarRating(props: Props) {

    const numStars = Math.round(props.rating /2);

    const fullStars = [];
    const emptyStars = [];

    for(let i = 0; i < 5; i++) {
        if(i < numStars){
            console.log('numStarts:'+numStars)
            fullStars.push(i)
        }else{
            emptyStars.push(i)
        }
    }

    return(
        <div className="star-rating">
            {fullStars.map(index => 
                <FaStar key={index}/>
            )}
            {emptyStars.map(ind => 
                <FaRegStar key={ind}/>
            )}
        </div>
    );
}