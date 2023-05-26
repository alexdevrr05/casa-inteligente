import { useMemo } from 'react';
// import { useDispatch } from 'react-redux'
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';
// import { setActiveNote } from '../../store/journal';

import { EvidenciasModal } from '../components/EvidenciasModal';
import { useUiStore } from '../../hooks';

export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {
  const { openDateModal } = useUiStore();

  // const [isActive, setActive] = useState(false);
  // const dispatch = useDispatch();

  const onClickNote = () => {
    openDateModal();
    // setActive(!isActive);
    // dispatch( setActiveNote({ title, body, id, date, imageUrls }) )
  };

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + '...' : title;
  }, [title]);

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={onClickNote}>
          <ListItemIcon>
            <TurnedInNot />
          </ListItemIcon>
          <Grid container>
            <ListItemText primary={newTitle} />
            <ListItemText secondary={body} />
          </Grid>
        </ListItemButton>
      </ListItem>
      <EvidenciasModal />
    </>
  );
};
