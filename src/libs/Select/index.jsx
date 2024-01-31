import classnames from "classnames";
import { FormControl } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import MuiSelect from "@mui/material/Select";

import styles from "./index.module.scss";

const Select = ({
  className,
  value,
  icon,
  options,
  onChange,
  label,
  hideArrow,
  disabled,
  renderValue,
  error,
  warning,
  multiple,
  transparent,
}) => {
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 240,
      },
    },
  };

  return (
    <div
      className={classnames(
        className,
        error
          ? styles["error-holder"]
          : warning
          ? styles["warning-holder"]
          : styles["select-holder"]
      )}
    >
      {!!label && <p className={styles["input-label"]}>{label}</p>}
      <span className={styles["select-icon"]}>{icon}</span>
      <FormControl fullWidth error={error}>
        <MuiSelect
          value={value}
          onChange={onChange}
          displayEmpty
          multiple={multiple}
          variant={"standard"}
          disabled={disabled}
          renderValue={renderValue}
          disableUnderline
          MenuProps={MenuProps}
          inputProps={{
            className: styles["select-input"],
          }}
          classes={{
            select: classnames(
              styles["select"],
              icon ? styles["select-with-icon"] : "",
              className
            ),
            outlined: styles["select-input"],
            standard: transparent
              ? styles["select-standard-transparent"]
              : styles["select-standard"],
            icon: hideArrow ? styles["hide-icon"] : "",
            iconStandard: styles["icon-standard"],
          }}
        >
          {options.map((item) => (
            <MenuItem
              value={item?.value}
              key={item?.value}
              disabled={item?.disabled}
            >
              <div className={styles["option-item"]}>
                <div className={styles["option-title"]}>{item.title}</div>
              </div>
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    </div>
  );
};

export default Select;
