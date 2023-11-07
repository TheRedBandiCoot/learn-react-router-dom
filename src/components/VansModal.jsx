import React from 'react';
import { Button, Dialog, IconButton, Link, Slide } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink, useLoaderData, useSearchParams } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const VansModal = ({ van, clsName, url }) => {
  const [open, setOpen] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const data = useLoaderData();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setSearchParams('');
    setOpen(false);
  };

  React.useEffect(() => {
    const check = JSON.parse(searchParams.get('hash'));
    if (check && !url) {
      setOpen(true);
    }
    // console.log('test');
  }, []);

  return (
    <>
      <NavLink to="?hash=true" style={{ cursor: 'pointer' }} onClick={handleClickOpen}>
        <img className={`${clsName} && ''`} src={van.imageUrl} />
      </NavLink>
      <Dialog
        TransitionComponent={Transition}
        keepMounted
        style={{ maxWidth: '100%', maxHeight: '100%' }}
        open={open}
        onClose={handleClose}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon style={{ color: '#f54e42' }} />
        </IconButton>
        <img src={`${van.imageUrl}`} alt="image" />
      </Dialog>
    </>
  );
};

export default VansModal;
