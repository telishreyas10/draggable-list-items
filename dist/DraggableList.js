var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { DndContext, closestCenter, DragOverlay, } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy, } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
// Component for each sortable item
var SortableItem = function (_a) {
    var item = _a.item, overId = _a.overId;
    // Hook to make items sortable
    var _b = useSortable({ id: item.id }), attributes = _b.attributes, listeners = _b.listeners, setNodeRef = _b.setNodeRef, transform = _b.transform, transition = _b.transition, isDragging = _b.isDragging;
    // Style for the item
    var style = {
        transform: CSS.Transform.toString(transform),
        transition: transition,
        opacity: isDragging ? 0.5 : 1,
    };
    return (_jsxs("div", { children: [overId === item.id && _jsx(DropIndicator, {}), _jsxs("div", __assign({ ref: setNodeRef, style: style }, attributes, listeners, { className: "flex items-center p-4 rounded-sm  ".concat(isDragging ? "bg-gray-200" : ""), children: [_jsx("img", { src: item.image, alt: item.title, className: "w-16 h-16 rounded-md mr-4" }), _jsxs("div", { children: [_jsx("h3", { className: "font-bold font-sans text-black", children: item.title }), _jsx("p", { className: "text-gray-500 font-sans text-sm", children: item.description })] })] }))] }));
};
var DropIndicator = function () {
    return _jsx("div", { className: "h-0.5 bg-blue-500 rounded-lg mb-2" });
};
var ItemComponent = function (_a) {
    var item = _a.item, isOverlay = _a.isOverlay;
    return (_jsxs("div", { className: "flex items-center p-2 bg-white m-10 rounded-lg border-black shadow ".concat(isOverlay ? "opacity-100" : ""), children: [_jsx("img", { src: item.image, alt: item.title, className: "w-8 h-8 rounded-md" }), _jsx("h5", { className: "font-bold font-sans text-sm text-black px-3", children: item.title })] }));
};
// Draggable list component
var DraggableList = function (_a) {
    var items = _a.items;
    var _b = useState(items), list = _b[0], setList = _b[1];
    var _c = useState(null), activeItem = _c[0], setActiveItem = _c[1];
    var _d = useState(null), overId = _d[0], setOverId = _d[1];
    var _e = useState(false), isDragging = _e[0], setIsDragging = _e[1];
    // Handler for drag start event
    var handleDragStart = function (event) {
        setIsDragging(true);
        var active = event.active;
        var activeItem = list.find(function (item) { return item.id === active.id; });
        setActiveItem(activeItem || null);
    };
    // Handler for drag over event
    var handleDragOver = function (event) {
        var over = event.over;
        setOverId(over ? over.id : null);
    };
    // Handler for drag end event
    var handleDragEnd = function (event) {
        setIsDragging(false);
        var active = event.active, over = event.over;
        // Rearrange items if dropped over another item
        if (over && active.id !== over.id) {
            setList(function (items) {
                var oldIndex = items.findIndex(function (item) { return item.id === active.id; });
                var newIndex = items.findIndex(function (item) { return item.id === over.id; });
                return arrayMove(items, oldIndex, newIndex);
            });
        }
        setActiveItem(null);
        setOverId(null);
    };
    return (_jsxs(DndContext, { collisionDetection: closestCenter, onDragStart: handleDragStart, onDragOver: handleDragOver, onDragEnd: handleDragEnd, children: [isDragging ? (_jsx("div", { children: list.map(function (item) { return (_jsx(SortableItem, { item: item, overId: overId }, item.id)); }) })) : (
            // Render items in sortable context
            _jsx(SortableContext, { items: list, strategy: verticalListSortingStrategy, children: _jsx("div", { children: list.map(function (item) { return (_jsx(SortableItem, { item: item, overId: overId }, item.id)); }) }) })), _jsx(DragOverlay, { dropAnimation: null, children: activeItem ? _jsx(ItemComponent, { item: activeItem, isOverlay: true }) : null })] }));
};
export default DraggableList;
