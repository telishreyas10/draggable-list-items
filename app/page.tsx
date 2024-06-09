"use client";
import Image from "next/image";
import Head from "next/head";
import DraggableList from "./Components/DraggableList";

export default function Home() {
  return (
    <div>
      <main className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md p-4">
          {/* Render DraggableList component */}
          <DraggableList />
        </div>
      </main>
    </div>
  );
}
