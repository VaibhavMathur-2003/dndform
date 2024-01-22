import { Droppable, Draggable } from "react-beautiful-dnd";
import { Formik } from "formik";
import { getControl } from "./Behave";

import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function Drop({ formData }) {
  const initialValues = formData.reduce((total, current) => {
    return { ...total, [current.id]: "" };
  }, {});

  return (
    <Formik initialValues={initialValues}>
      {({ submitForm, isSubmitting }) => (
        <Droppable droppableId="form_droppable" type="controls">
          {(provided, snapshot) => (
            <div>
              <List
                className="bg-gray-800 p-4 min-h-96 overflow-auto"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {formData.map((data, index) => (
                  <Draggable
                    key={`form_draggable_${index}`}
                    draggableId={`form_draggable_${index}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <ListItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                      >
                        <Card
                          className="p-4 w-full bg-gray-700 rounded-md shadow-md text-white"
                          {...provided.dragHandleProps}
                        >
                          {getControl(data.type, data.id)}
                        </Card>
                      </ListItem>
                    )}
                  </Draggable>
                ))}
                <ListItem></ListItem>
                {provided.placeholder}
              </List>
            </div>
          )}
        </Droppable>
      )}
    </Formik>
  );
}
