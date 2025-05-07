import React from "react";
import moment from "moment";
import CalendarMeal from "./CalendarMeal";

const weeklyMeals = {
  Sunday: [
    {
      mealName: "Vegan Protein Smoothie",
      servings: 2,
      imageUrl: "/meals/beetsmoothie.png",
      mealType: "breakfast",
    },
    {
      mealName: "Mediterranean Salad Bowl",
      servings: 1,
      imageUrl: "/meals/scrambledsalad.png",
      mealType: "lunch",
    },
    {
      mealName: "Avocado Salad",
      servings: 4,
      imageUrl: "/meals/avocadosalad.png",
      mealType: "dinner",
    },
    {
      mealName: "Butter Roll",
      servings: 1,
      imageUrl: "/meals/butter-roll.jpg",
      mealType: "snack",
    },
  ],
  Monday: [
    {
        mealName: "Vegan Protein Smoothie",
        servings: 2,
        imageUrl: "/meals/beetsmoothie.png",
        mealType: "breakfast",
      },
      {
        mealName: "Mediterranean Salad Bowl",
        servings: 1,
        imageUrl: "/meals/scrambledsalad.png",
        mealType: "lunch",
      },
      {
        mealName: "Avocado Salad",
        servings: 4,
        imageUrl: "/meals/avocadosalad.png",
        mealType: "dinner",
      },
      {
        mealName: "Butter Roll",
        servings: 1,
        imageUrl: "/meals/butter-roll.jpg",
        mealType: "snack",
      },
  ],
  Tuesday: [
    {
        mealName: "Vegan Protein Smoothie",
        servings: 2,
        imageUrl: "/meals/beetsmoothie.png",
        mealType: "breakfast",
      },
      {
        mealName: "Mediterranean Salad Bowl",
        servings: 1,
        imageUrl: "/meals/scrambledsalad.png",
        mealType: "lunch",
      },
      {
        mealName: "Avocado Salad",
        servings: 4,
        imageUrl: "/meals/avocadosalad.png",
        mealType: "dinner",
      },
      {
        mealName: "Smores Donuts",
        servings: 1,
        imageUrl: "/meals/smores-donuts.jpg",
        mealType: "snack",
      },
  ],
  Wednesday: [
    {
        mealName: "Vegan Protein Smoothie",
        servings: 2,
        imageUrl: "/meals/beetsmoothie.png",
        mealType: "breakfast",
      },
      {
        mealName: "Mediterranean Salad Bowl",
        servings: 1,
        imageUrl: "/meals/scrambledsalad.png",
        mealType: "lunch",
      },
      {
        mealName: "Avocado Salad",
        servings: 4,
        imageUrl: "/meals/avocadosalad.png",
        mealType: "dinner",
      },
      {
        mealName: "Apple Walnut Tart",
        servings: 1,
        imageUrl: "/meals/apple-walnut-tart.jpg",
        mealType: "snack",
      },
  ],
  Thursday: [
    {
        mealName: "Akara and Pap",
        servings: 2,
        imageUrl: "/meals/akaraandpap.png",
        mealType: "breakfast",
      },
      {
        mealName: "Mediterranean Salad Bowl",
        servings: 1,
        imageUrl: "/meals/scrambledsalad.png",
        mealType: "lunch",
      },
      {
        mealName: "Avocado Salad",
        servings: 4,
        imageUrl: "/meals/avocadosalad.png",
        mealType: "dinner",
      },
      {
        mealName: "Butter Roll",
        servings: 1,
        imageUrl: "/meals/butter-roll.jpg",
        mealType: "snack",
      },
  ],
  Friday: [
    {
        mealName: "Akara and Pap",
        servings: 2,
        imageUrl: "/meals/akaraandpap.png",
        mealType: "breakfast",
      },
      {
        mealName: "Apple Walnut Tart",
        servings: 1,
        imageUrl: "/meals/apple-walnut-tart.jpg",
        mealType: "lunch",
      },
      {
        mealName: "Biscoff Tiramisu",
        servings: 4,
        imageUrl: "/meals/biscoff-tiramisu.jpg",
        mealType: "dinner",
      },
      {
        mealName: "Butter Roll",
        servings: 1,
        imageUrl: "/meals/butter-roll.jpg",
        mealType: "snack",
      },
  ],
  Saturday: [
    {
        mealName: "Vegan Protein Smoothie",
        servings: 2,
        imageUrl: "/meals/beetsmoothie.png",
        mealType: "breakfast",
      },
      {
        mealName: "Mediterranean Salad Bowl",
        servings: 1,
        imageUrl: "/meals/scrambledsalad.png",
        mealType: "lunch",
      },
      {
        mealName: "Avocado Salad",
        servings: 4,
        imageUrl: "/meals/avocadosalad.png",
        mealType: "dinner",
      },
      {
        mealName: "Butter Roll",
        servings: 1,
        imageUrl: "/meals/butter-roll.jpg",
        mealType: "snack",
      },
  ],
};

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const DayView = ({ date, goBack }) => {
  const selectedDate = moment(date, "YYYY-MM-DD");
  const selectedDay = daysOfWeek[selectedDate.day()];

  const changeDay = (offset) => {
    const newDate = selectedDate.clone().add(offset, "days");
    const formatted = newDate.format("YYYY-MM-DD");
    goBack(formatted); // Always send a valid date string
  };

  return (
    <div className="day-view" style={{ padding: "24px",fontFamily:"sans-serif"}}>
      {/* Navigation Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginBottom: "16px",
          flexWrap: "wrap",
        }}
      >
        <button onClick={() => changeDay(-1)} style={navBtnStyle}>
          ← Previous
        </button>

        {daysOfWeek.map((_, index) => {
          const startOfWeek = selectedDate.clone().startOf("week");
          const dayDate = startOfWeek.clone().add(index, "days");
          const formattedDate = dayDate.format("YYYY-MM-DD");
          const isSelected =
            formattedDate === selectedDate.format("YYYY-MM-DD");

          return (
            <button
              key={formattedDate}
              onClick={() => goBack(formattedDate)}
              style={{
                ...navBtnStyle,
                backgroundColor: isSelected ? "#007BFF" : "#f0f0f0",
                color: isSelected ? "#fff" : "#333",
                fontWeight: isSelected ? "bold" : "normal",
                fontFamily:"sans-serif",
              }}
            >
              {dayDate.format("ddd")}
            </button>
          );
        })}

        <button onClick={() => changeDay(1)} style={navBtnStyle}>
          Next →
        </button>
      </div>

      {/* Back to Calendar Button */}
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <button
          onClick={() => goBack(null)}
          style={{ ...navBtnStyle, backgroundColor: "#e0e0e0" }}
        >
          ← Back to Calendar
        </button>
      </div>

      {/* Selected Day Header */}
      <h1 style={{ textAlign: "center" }}>
        {`${selectedDay}, ${selectedDate.format("MMMM D, YYYY")}`}
      </h1>

      {/* Meal Sections */}
      {["breakfast", "lunch", "dinner", "snack"].map((mealType) => (
        <div key={mealType} style={{ marginBottom: "24px" }}>
          <h2
            style={{
              color: "#444",
              borderBottom: "2px solid #ddd",
              paddingBottom: "4px",
            }}
          >
            {mealType.charAt(0).toUpperCase() + mealType.slice(1)}
          </h2>

          {weeklyMeals[selectedDay]?.some(
            (meal) => meal.mealType === mealType
          ) ? (
            weeklyMeals[selectedDay]
              .filter((meal) => meal.mealType === mealType)
              .map((meal, index) => (
                <CalendarMeal
                  key={index}
                  mealName={meal.mealName}
                  servings={meal.servings}
                  imageUrl={meal.imageUrl}
                />
              ))
          ) : (
            <p style={{ color: "#888", marginLeft: "8px" }}>
              No meals scheduled.
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

const navBtnStyle = {
  padding: "8px 12px",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#f0f0f0",
  color: "#333",
  fontWeight: "bold",
  transition: "background 0.2s",
};

export default DayView;