import { memo } from "react";

import LoadingComponent from "../../../../components/general/Loading";
import { ReviewCardElement } from "./ReviewCard";
import { useReviews } from "../../hooks/useReviews";
import { Loader } from "rsuite";

interface IReviewCard {
    id: string;
    reveal: boolean;
}

const ReviewCards = ({ id, reveal }: IReviewCard) => {
    const {
        review,
        setReview,
        reviews,
        addReview,
        loading
    } = useReviews(id);

    if (!reveal) {
        return (<></>)
    }

    if (!reviews) {
        return (<LoadingComponent />)
    }



    return (
        <div className="w-full flex flex-col bg-white p-6 space-y-4 my-4 rounded-lg">
            <h5 className="text-lg font-semibold text-gray-800">Give Review</h5>
            <div className="flex">
                <input value={review} onChange={(e) => setReview(e.target.value)} placeholder="review this forum" className="rounded-lg border border-bitBrown text-bitBrown w-full px-4" />
                <button className="lg:w-1/5 md:w-1/3 w-1/2 ms-6 px-4 py-2 bg-yellow-600 rounded-lg text-bitBrown" disabled={review === "" || loading} onClick={() => addReview()}>
                    {loading && (<Loader/>)}
                    Add Review
                </button>
            </div>
            {!loading && reviews.length > 0 && reviews.map((review) => {
                return (
                    <ReviewCardElement key={review.id} review={review} />
                )
            })}
            {loading && (<Loader/>)}
        </div>
    );
}

export const ReviewElements = memo(ReviewCards);