import { Droppable, Draggable } from "react-beautiful-dnd";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { controls } from "./Control";

function Drag() {
  return (
    <Droppable
      droppableId="controls_droppable"
      type="controls"
      isDropDisabled={true}
    >
      {(provided, snapshot) => (
        <div
          className="p-4 bg-gray-800 h-5/6 overflow-auto"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {controls.map((control, index) => (
            <Draggable
              key={`control_draggable_${control.value}`}
              draggableId={control.value}
              index={index}
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <ListItem
                    key={control.value}
                    className="bg-gray-700 rounded-md mb-2 p-2 cursor-pointer"
                  >
                    <ListItemText className="text-white">
                      {control.label}
                    </ListItemText>
                  </ListItem>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Drag;
