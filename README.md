
# Drag-and-Drop List Component

## Overview
**Drag-and-Drop List** is a reusable React component for creating interactive and customizable draggable lists. Built with Tailwind CSS and the powerful `dnd-kit` library, this component provides a smooth drag-and-drop experience for rearranging list items.

## Features
- **Intuitive Drag-and-Drop**: Rearrange items seamlessly with a fluid and responsive user interface.
- **Customizable Design**: Easily adapt the styles using Tailwind CSS or your own CSS.
- **Lightweight and Fast**: Built with modern technologies for optimal performance.

## Demo
- Check out the demo here: [https://draggable-list-items.vercel.app/](https://draggable-list-items.vercel.app/)


## Installation

Install the library via npm:
```bash
npm install draggable-list-items
```

## Usage

Here’s an example of how to use the **Drag-and-Drop List** in your project:

### **JavaScript Example**
```jsx
import DraggableList from 'draggable-list-items';

const items = [
  { id: 1, title: 'Item 1', description: 'Description 1', image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Item 2', description: 'Description 2', image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Item 3', description: 'Description 3', image: 'https://via.placeholder.com/150' },
];

function App() {
  return <DraggableList items={items} />;
}

export default App;
```

### **TypeScript Example**
```tsx
import DraggableList from 'draggable-list-items';

type Item = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const items: Item[] = [
  { id: 1, title: 'Item 1', description: 'Description 1', image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Item 2', description: 'Description 2', image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Item 3', description: 'Description 3', image: 'https://via.placeholder.com/150' },
];

function App() {
  return <DraggableList items={items} />;
}

export default App;
```

### **Styling**
The component is styled using Tailwind CSS. Ensure you have Tailwind set up in your project, or use the bundled styles provided with the library:
```javascript
import 'draggable-list-items/dist/styles.css';
```

---

## How It Works
The **Drag-and-Drop List** uses the following technologies:
- **React**: A declarative JavaScript library for building user interfaces.
- **dnd-kit**: A lightweight and flexible drag-and-drop library for React.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.

---

## Contributing
We welcome contributions to improve the **Drag-and-Drop List** component. If you’d like to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and test thoroughly.
4. Submit a pull request.

---

### **Changelog**
Check out the [Releases](https://github.com/telishreyas10/draggable-list-items/releases/) for details on new features, bug fixes, and updates.

---

### **Contributions**
If you encounter any issues or have questions, feel free to open an issue.