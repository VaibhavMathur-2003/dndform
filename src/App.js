import { useState } from "react";

import { DragDropContext } from "react-beautiful-dnd";
import Drag from "./Components/Drag";
import Drop from "./Components/Drop";
import "./App.css"

function App() {
  const [formData, setFormData] = useState([]);

  const onDragEnd = (data) => {
    const { draggableId, source, destination } = data;
    if (source && destination) {
      if (source.droppableId === "controls_droppable") {
        const newFormControl = {
          id: `${formData.length}`,
          type: draggableId,
          config: {},
        };
        const newFormData = [...formData];
        newFormData.splice(destination.index, 0, newFormControl);
        setFormData(newFormData);
      }
      if (source.droppableId === "form_droppable") {
        if (source.index !== destination.index) {
          const newFormData = [...formData];
          const movedFormControl = newFormData.splice(source.index, 1)[0];
          newFormData.splice(destination.index, 0, movedFormControl);
          setFormData(newFormData);
        }
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="page">
        <div className="drag">
          <Drag />
        </div>
        <div className="drop">
          <Drop formData={formData} />
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;
