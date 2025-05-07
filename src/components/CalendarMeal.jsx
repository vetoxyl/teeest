import React from "react";
/*import edit from "./edit.svg";*/
/*import "./App.css";*/

// MealCard Component
const CalendarMeal = ({ mealName, servings, imageUrl }) => {
  return (
    <div
      style={{
        fontFamily:"sans-serif",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        width: "320px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        overflow: "hidden",
        border: "1px solid #e0e0e0",
      }}
    >
      {/* Meal Image */}
      <div style={{ width: "96px", height: "96px", flexShrink: 0 }}>
        <img
          src={imageUrl}
          alt={mealName}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Meal Info */}
      <div
        style={{ padding: "16px", display: "flex", flexDirection: "column" }}
      >
        <h3 style={{ margin: "0 0 4px", fontSize: "18px", color: "#333" }}>
          {mealName}
        </h3>
        <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>
          Servings: {servings}
        </p>
      </div>

      {/* Edit Icon */}
    </div>
  );
};

export default CalendarMeal;
