import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
  DragOverEvent,
  UniqueIdentifier,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

//Depricating icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

// Define the structure of each item
export interface Item {
  id: string;
  title: string;
  description: string;
  image: string;
}

// Props for DraggableList
interface DraggableListProps {
  items: Item[];
}

// Define the props for the sortable item component
interface SortableItemProps {
  item: Item;
  overId: UniqueIdentifier | null;
}

// Define the props for the item component
interface ItemComponentProps {
  item: Item;
  isOverlay?: boolean;
}

// Component for each sortable item
const SortableItem: React.FC<SortableItemProps> = ({ item, overId }) => {
  // Hook to make items sortable
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  // Style for the item
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div>
      {overId === item.id && <DropIndicator />}
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className={`flex items-center p-4 rounded-sm  ${
          isDragging ? "bg-gray-200" : ""
        }`}
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-16 h-16 rounded-md mr-4"
        />
        <div>
          <h3 className="font-bold font-sans text-black">{item.title}</h3>
          <p className="text-gray-500 font-sans text-sm">
            {/* Removed icon from description  */}
            {/* <FontAwesomeIcon
              style={{ width: "1em", height: "1em" }}
              icon={faMapPin}
              className="mr-1"
            /> */}

            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const DropIndicator: React.FC = () => {
  return <div className="h-0.5 bg-blue-500 rounded-lg mb-2" />;
};

const ItemComponent: React.FC<ItemComponentProps> = ({ item, isOverlay }) => {
  return (
    <div
      className={`flex items-center p-2 bg-white m-10 rounded-lg border-black shadow ${
        isOverlay ? "opacity-100" : ""
      }`}
    >
      <img src={item.image} alt={item.title} className="w-8 h-8 rounded-md" />
      <h5 className="font-bold font-sans text-sm text-black px-3">
        {item.title}
      </h5>
    </div>
  );
};

// Draggable list component
const DraggableList: React.FC<DraggableListProps> = ({ items }) => {
  const [list, setList] = useState(items);
  const [activeItem, setActiveItem] = useState<Item | null>(null);
  const [overId, setOverId] = useState<UniqueIdentifier | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Handler for drag start event
  const handleDragStart = (event: DragStartEvent) => {
    setIsDragging(true);
    const { active } = event;
    const activeItem = list.find((item) => item.id === active.id);
    setActiveItem(activeItem || null);
  };

  // Handler for drag over event
  const handleDragOver = (event: DragOverEvent) => {
    const { over } = event;
    setOverId(over ? over.id : null);
  };

  // Handler for drag end event
  const handleDragEnd = (event: DragEndEvent) => {
    setIsDragging(false);
    const { active, over } = event;

    // Rearrange items if dropped over another item
    if (over && active.id !== over.id) {
      setList((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveItem(null);
    setOverId(null);
  };

  return (
    <div>
      <main className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md p-4">
          <DndContext
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
          >
            {/* Render items during dragging */}
            {isDragging ? (
              <div>
                {list.map((item) => (
                  <SortableItem key={item.id} item={item} overId={overId} />
                ))}
              </div>
            ) : (
              // Render items in sortable context
              <SortableContext
                items={list}
                strategy={verticalListSortingStrategy}
              >
                <div>
                  {list.map((item) => (
                    <SortableItem key={item.id} item={item} overId={overId} />
                  ))}
                </div>
              </SortableContext>
            )}
            <DragOverlay dropAnimation={null}>
              {activeItem ? (
                <ItemComponent item={activeItem} isOverlay />
              ) : null}
            </DragOverlay>
          </DndContext>
        </div>
      </main>
    </div>
  );
};

export default DraggableList;
