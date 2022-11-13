import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  appMode: boolean;
  handleAppMode: (appMode: boolean) => void;
}

const Header = ({ appMode, handleAppMode }: Props) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">E-Commerce</Typography>
        <Switch
          checked={appMode}
          onChange={(event) => {
            handleAppMode(event.target.checked);
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
