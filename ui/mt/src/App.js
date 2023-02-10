import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ButtonGroup from "@mui/material/ButtonGroup";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

import Switch from '@mui/material/Switch';

import MusicPlayerSlider from "./MusicPlayer";

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

import { pink } from '@mui/material/colors';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import WomanIcon from '@mui/icons-material/Woman';
import YouTubeIcon from '@mui/icons-material/YouTube';


import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import Alert from '@mui/material/Alert';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

// type FontAwesomeSvgIconProps = {
//    icon: any;
// };

const FontAwesomeSvgIcon = React.forwardRef(
  (props, ref) => {
    const { icon } = props;
    const {
      icon: [width, height, , , svgPathData],
    } = icon;

    return (
      <SvgIcon ref={ref} viewBox={`0 0 ${width} ${height}`}>
        {typeof svgPathData === 'string' ? (
          <path d={svgPathData} />
        ) : (
          /**
           * A multi-path Font Awesome icon seems to imply a duotune icon. The 0th path seems to
           * be the faded element (referred to as the "secondary" path in the Font Awesome docs)
           * of a duotone icon. 40% is the default opacity.
           *
           * @see https://fontawesome.com/how-to-use/on-the-web/styling/duotone-icons#changing-opacity
           */
          svgPathData.map((d , i) => (
            <path style={{ opacity: i === 0 ? 0.4 : 1 }} d={d} />
          ))
        )}
      </SvgIcon>
    );
  },
);

const label = { inputProps: { "aria-label": "Checkbox demo" } };

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
];

function App() {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    console.log(event.target.checked); // true/false
  };

  const [age, setAge] = React.useState("");
  const handleChange2 = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const [value, setValue] = React.useState(30);
  const handleChange3 = (event: Event, newValue: int | int[]) => {
    setValue(newValue);
  };

  const [alignment, setAlignment] = React.useState('web');

  const handleChange4 = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };


  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);
  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[],
  ) => {
    setFormats(newFormats);
  };


  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  // BackDrop
  const [open5, setOpen5] = React.useState(false);
  const handleClose5 = () => {
    setOpen5(false);
  };
  const handleToggle5 = () => {
    setOpen5(!open);
  };

  return (
    <div className="App">
      <div>
        <Button variant="contained">Hello World</Button>
      </div>

      <div style={{ alignContent: "center" }}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
      </div>

      <div>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
      </div>
      <div>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>

      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />

      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </FormGroup>

      <div>
        <Checkbox
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />
        <Checkbox
          {...label}
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
        />
      </div>

      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
      </Box>

      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row // 이게 없으면 세로로 출력.
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />

          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="Ailien"
          />
        </RadioGroup>
      </FormControl>

      <Box sx={{ minWidth: 120, width: 200 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange2}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ width: 300 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={handleChange3} />
        <VolumeUp />
      </Stack>
      <Slider disabled defaultValue={30} aria-label="Disabled slider" />
      <Slider defaultValue={30} aria-label="Slider" />
    </Box>

    <Switch {...label} defaultChecked />

    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Label" />
    </FormGroup>

      {/* <MusicPlayerSlider/>
      
      
    */}
    
      <ToggleButtonGroup
      exclusive
      color="primary"
      value={alignment}
      onChange={handleChange4}
      aria-label="Platform"
    >
  <ToggleButton value="web">Web</ToggleButton>
  <ToggleButton value="android">Android</ToggleButton>
  <ToggleButton value="ios">iOS</ToggleButton>
</ToggleButtonGroup>


    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      <ToggleButton value="bold" aria-label="bold">
        <FormatBoldIcon />
      </ToggleButton>
      <ToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </ToggleButton>
      <ToggleButton value="underlined" aria-label="underlined">
        <FormatUnderlinedIcon />
      </ToggleButton>
      <ToggleButton value="color" aria-label="color" disabled>
        <FormatColorFillIcon />
        <ArrowDropDownIcon />
      </ToggleButton>
    </ToggleButtonGroup>


    <Stack direction="row" spacing={2}>
      <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      >
        B
      </Avatar>
      <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      />
      <Avatar src="/broken-image.jpg" />
    </Stack>

    <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />

      <Button variant="contained" startIcon={<FontAwesomeSvgIcon icon={faInfo} />}>
        Example
      </Button>
      <WomanIcon color="error" fontSize="large"/>
      <YouTubeIcon color="error" fontSize="large"/>



      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
      >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>

    <Alert severity="error">This is an error alert — check it out!</Alert>
<Alert severity="warning">This is a warning alert — check it out!</Alert>
<Alert severity="info">This is an info alert — check it out!</Alert>
<Alert severity="success">This is a success alert — check it out!</Alert>


<div>
      <Button onClick={handleToggle5}>Show backdrop</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open5}
        onClick={handleClose5}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>



    </div>
  );
}

export default App;
