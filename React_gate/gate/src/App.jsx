import React, { useState } from "react";

// Sample data for cards
const cardData = [
  {
    id: 1,
    title: "Card 1",
    description: "This is the description for Card 1.",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is the description for Card 2.",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is the description for Card 3.",
  },
  {
    id: 4,
    title: "Card 4",
    description: "This is the description for Card 4.",
  },
  {
    id: 5,
    title: "Card 5",
    description: "This is the description for Card 5.",
  },
  {
    id: 6,
    title: "Card 6",
    description: "This is the description for Card 6.",
  },
  {
    id: 7,
    title: "Card 7",
    description: "This is the description for Card 7.",
  },
  {
    id: 8,
    title: "Card 8",
    description: "This is the description for Card 8.",
  },
  // Add more cards as needed
];

function CardList() {
  const [visibleCards, setVisibleCards] = useState(4);

  const handleShowMore = () => {
    setVisibleCards((prev) => prev + 4); // Show 4 more cards
  };

  const handleShowLess = () => {
    setVisibleCards(4); // Show only 4 cards
  };

  return (
    <div>
      <div className="card-container">
        {cardData.slice(0, visibleCards).map((card) => (
          <div key={card.id} className="card">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <div className="buttons">
        {visibleCards < cardData.length && (
          <button onClick={handleShowMore}>Show More</button>
        )}
        {visibleCards > 4 && (
          <button onClick={handleShowLess}>Show Less</button>
        )}
      </div>
    </div>
  );
}

export default CardList;
