import React, { useState } from 'react';

const ReviewForm = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleRatingChange = (event) => {
        setRating(parseInt(event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Submit the review and rating to your backend or save it locally
        // You can use an AJAX call or any other method to send the data
        console.log(`Name: ${name}, Comment: ${comment}, Rating: ${rating}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label> 
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleNameChange}
            />
            <br />
            <label htmlFor="comment">Comment:</label>
            <textarea
                id="comment"
                name="comment"
                value={comment}
                onChange={handleCommentChange}
            ></textarea>
            <br />
            <label htmlFor="rating">Rating:</label>
            <select id="rating" name="rating" value={rating} onChange={handleRatingChange}>
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
            </select>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ReviewForm;
