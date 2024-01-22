import { Droppable, Draggable } from "react-beautiful-dnd";
import { Formik, Field } from "formik";
import { TextField } from "formik-material-ui";

import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";



export default function Drop({ formData }) {
  const initialValues = formData.reduce((total, current) => {
    return { ...total, [current.id]: "" };
  }, {});

  const getControl = (type, id, config) => {
    switch (type) {
      case "date":
        return (
          <Field
            size="small"
            variant="outlined"
            fullWidth={true}
            component={TextField}
            name={id}
            label={id}
          />
        );
      default:
        return <div>{type}</div>;
    }
  };

  return (
    <Formik initialValues={initialValues}>
      {({ submitForm, isSubmitting }) => (
        <Droppable droppableId="form_droppable" type="controls">
          {(provided, snapshot) => (
            <div>
              <List
                style={{
                  backgroundColor: "grey",
                  minHeight:'88vh',
                  overflow: "auto"
                }}
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
                          style={{
                            padding: "10px",
                            width: "100%"
                          }}
                          {...provided.dragHandleProps}
                        >
                          {getControl(data.type, data.id)}
                        </Card>
                      </ListItem>
                    )}
                  </Draggable>
                ))}
                <ListItem>
                 
                </ListItem>
                {provided.placeholder}
              </List>
            </div>
          )}
        </Droppable>
      )}
    </Formik>
  );
}
