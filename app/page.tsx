"use client";
import DraggableList, { Item } from "../src/DraggableList";
import React from "react";

export default function Home() {
  // List of items
  const items: Item[] = [
    {
      id: "1",
      title: "Scotland Island",
      description: "Sydney, Australia",
      image:
        "https://www.scotland-inverness.co.uk/hebrides-luskentyre-view.jpg",
    },
    {
      id: "2",
      title: "The Charles Grand Brasserie & Bar",
      description: "Lorem ipsum, Dolor",
      image:
        "https://thecharles.sydney/wp-content/uploads/sites/3/2022/11/Yk53YLBM-scaled.jpeg",
    },
    {
      id: "3",
      title: "Bridge Climb",
      description: "Dolor, Sit amet",
      image:
        "https://t4.ftcdn.net/jpg/00/67/59/55/360_F_67595591_UDaXLI35Csoqsy37rLiVLjFmkTUdHKhb.jpg",
    },
    {
      id: "4",
      title: "Scotland Island",
      description: "Sydney, Australia",
      image: "https://photos.superyachtapi.com/download/231492/large",
    },
    {
      id: "5",
      title: "Clam Bar",
      description: "Etcetera veni, Vidi vici",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyAPBbLvRzjJ1Zh-KfQXfEOVbeA0GkzaORaw&s",
    },
    {
      id: "6",
      title: "Vivid Festival",
      description: "Sydney, Australia",
      image:
        "https://i1.pickpik.com/photos/687/208/910/surfing-surfboard-man-surf-preview.jpg",
    },
  ];

  return (
    <>
      <DraggableList items={items} />{" "}
    </>
  );
}
