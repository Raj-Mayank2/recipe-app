import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

export default function QuoteSection(){
    return(
        <div className="section quote">
            <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft}/>To eat well, I always disagree with critics who say that all restaurants should be fine dining. You can get a Michelin star if you serve the best hamburger in the world.</p>
            <p className="quoote-author">-David Chang</p>
        </div>
    )
}