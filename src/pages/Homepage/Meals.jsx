import React from "react";
import MealCardContainer from '../../components/MealCardContainer.jsx';

const categorizedMeals = {
  LowSodium: [
    {
      imageSrc: "/meals/akaraandpap.png",
      altText: "Akara and Pap",
      title: "Akara and Pap",
    },
    {
      imageSrc: "/meals/creamysaladandboiledegg.jpg",
      altText: "Creamy Salad and Boiled Egg",
      title: "Creamy Salad and Boiled Egg",
    },
  ],
  LowFat: [
    {
      imageSrc: "/meals/scrambledsalad.png",
      altText: "Scrambled Salad",
      title: "Scrambled Salad",
    },
    {
      imageSrc: "/meals/avocadosalad.png",
      altText: "Avocado Salad",
      title: "Avocado Salad",
    },
  ],
  JuiceandDrinks: [
    {
      imageSrc: "/meals/orangejuice.png",
      altText: "Orange Juice",
      title: "Orange Juice",
    },
    {
      imageSrc: "/meals/Beet Smoothie.png",
      altText: "Beet Smoothie",
      title: "Beet Smoothie",
    },
  ],
};

const categoryTitles = {
  LowSodium: "Recommended: Low Sodium Meals",
  LowFat: "Low Fat Meals",
  JuiceandDrinks: "Juices and Drinks",
};

const MealGroups = ({ categorizedMeals }) => {
  if (!categorizedMeals) {
    return <div>No meals available</div>;
  }

  return (
    <div>
      {Object.entries(categorizedMeals).map(([category, meals]) => (
        <div key={category} style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              color: "#05976a", // Set the color
              fontFamily: "sans-serif", // Set the font family
            }}
          >
            {categoryTitles[category]}
          </h2>
          <MealCardContainer meals={meals} />
        </div>
      ))}
    </div>
  );
};

// Main component to render MealGroups
const Meals = () => {
  return (
    <div>
      <div
        className="search-bar"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <input type="text" placeholder="Search for any meals..." />
        <button>Search</button>
      </div>
      <div>
        <h2
          style={{ color: "#7879f1", fontSize: "1.125rem", fontWeight: "500" }}
        >
          Low Sodium Diet Plan Active
        </h2>
        <p style={{ color: "#6b7280" }}>
          Your meal suggestions are optimized for your hypertension management.
        </p>
        <p
          style={{
            fontSize: "0.875rem",
            color: "#9ca3af",
            marginTop: "0.25rem",
          }}
        >
          Sodium today: 1,250mg of 2,000mg limit
        </p>
      </div>
      <MealGroups categorizedMeals={categorizedMeals} />
    </div>
  );
};

export default Meals;
