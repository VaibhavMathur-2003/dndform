import { Field } from "formik";
import { TextField } from "formik-material-ui";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const getControl = (type, id, config) => {
    switch (type) {
      case "question":
        return (
          <Field
          classname="text-white"
            size="small"
            variant="outlined"
            fullWidth={true}
            component={TextField}
            name={id}
            label={id}
          />
        );
      case "text_area":
        return (
          <Field
          classname="text-white"
            size="small"
            variant="outlined"
            fullWidth={true}
            component={TextField}
            name={id}
            label={id}
          />
        )
        case "dropdown":
          return(
            <>
          <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={2}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
        </>
          )
          case "date":
        return (
          <DatePicker
          label="Controlled picker"
        />
        )
      default:
        return <div>{type}</div>;
    }
  };
