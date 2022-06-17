import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import storeModel from "@/services/models/store";
import { CountryLabel } from "./styled";

export default function Index() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { country, countries, changeCountry } = storeModel();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button id="basic-button" onClick={handleClick} data-cy="switch-country-btn">
        <CountryLabel data-cy="country-label">{country.label}</CountryLabel> <CurrencyExchangeIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {countries.map((country) => (
          <MenuItem
            key={country.code}
            onClick={changeCountry.bind(this, country.code)}
            data-cy="country-selection"
          >
            {country.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
