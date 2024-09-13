import React from "react";

const Maps = () => {
  const data = [
    {
      name: "janam",
      age: "eleven",
      hobby: ["football", "gaming"],
      placevisit: [
        {
          nepal: ["kathmandu", "udayapur"],
        },
        "india",
        "china",
      ],
    },
    {
      name: "ghana",
      age: "ten",
      hobby: ["football", "gaming"],
      placevisit: [
        {
          nepal: ["kathmandu", "udayapur"],
        },
        "india",
        "china",
      ],
    },
    {
      name: "ramesh",
      age: "one",
      hobby: ["football", "gaming"],
      placevisit: [
        {
          nepal: ["kathmandu", "udayapur"],
        },
        "india",
        "china",
      ],
    },
  ];
  return (
    <div style={{ color: "black" }}>
      {data.map((items) => (
        <h1>
          {items.name}
          {
            items.placevisit.map((items)=>(
              <h2>
                {items.nepal}
              </h2>
            ))
          }
        </h1>
      ))}
    </div>
  );
};

export default Maps;
