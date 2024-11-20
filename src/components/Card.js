import React, { Fragment } from "react";

const Card = ({ name, email, id }) => {
    return (
        <>
            <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
                <img alt="robot" src={`https://robohash.org/${id}?size=200x200`}></img>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </>
    );
}

export default Card;