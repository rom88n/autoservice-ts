// base
import React, { FunctionComponent } from 'react'

// material-ui
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

interface Item {
  value: number | string;
  name: string;
}

interface Props {
  fullWidth?: boolean,
  id?: string,
  variant?: "filled" | "outlined" | "standard",
  name?: string,
  label?: string,
  placeholder?: string,
  items?: Item[],
  value?: string,
  onChange:(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { value: unknown }>) => void
}

const SelectComponent:FunctionComponent<Props> = (props) => {
  const { items = [], label, variant, ...rest } = props

  return (
    <FormControl variant={variant}>
      {label && (<InputLabel>{label}</InputLabel>)}
      <Select
        {...rest}
        label={label}
      >
        {items.map(item => (
          <MenuItem
            key={item.value}
            value={item.value}
          >
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectComponent.defaultProps = {
  items: []
}

export default SelectComponent;
