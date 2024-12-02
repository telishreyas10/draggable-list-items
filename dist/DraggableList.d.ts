import React from "react";
export interface Item {
    id: string;
    title: string;
    description: string;
    image: string;
}
interface DraggableListProps {
    items: Item[];
}
declare const DraggableList: React.FC<DraggableListProps>;
export default DraggableList;
