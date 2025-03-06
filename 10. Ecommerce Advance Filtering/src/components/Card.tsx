import { BsFillBagFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

interface CardProps {
    img: string;
    title: string;
    star: string;
    reviews: string;
    prevPrice: string;
    newPrice: string;
}

function Card({ img, title, star, reviews, prevPrice, newPrice }: CardProps) {
    return (
        <section className="card">
            <img src={img} alt="title" className="card-img" />
            <div className="card-details">
                <h3 className="card-title">{title}</h3>
                <section className="card-reviews">
                    {/* {star} {star} {star} {star}  */} {star === "AiFillStar" && <AiFillStar className="rating-star" />}
                    <span className="total-reviews">{reviews} </span>
                </section>
                <section className="card-price">
                    <div className="price">
                        <del>
                            {prevPrice}
                        </del>
                        {newPrice}
                    </div>
                    <div className="bag">
                        <BsFillBagFill className="bag-icon" />
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Card;