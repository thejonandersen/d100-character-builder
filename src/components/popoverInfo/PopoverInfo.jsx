/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(() => ({
  popoverPaper: {
    padding: 6,
  },
  caption: {
    marginTop: 3,
  },
  primaryText: {
    whiteSpace: 'nowrap',
  },
  secondaryText: {
    display: 'block',
  },
}));

const PopoverInfo = ({
  primaryText,
  secondaryText,
  orientation,
  popoverId,
  iconClass,
  iconButtonClass,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const classes = useStyles();
  const { direction, xs, spacing } = orientation === 'horizontal'
    ? {
      direction: 'row',
      xs: 6,
      spacing: 1,
    }
    : {
      direction: 'column',
      xs: 12,
      spacing: 0,
    };

  return (
    <>
      <IconButton
        aria-owns={open ? popoverId : undefined}
        aria-haspopup="true"
        onClick={handlePopoverOpen}
        classes={{ root: iconButtonClass }}
      >
        <HelpOutlineIcon classes={{ root: iconClass }} />
      </IconButton>
      <Popover
        id={popoverId}
        className={classes.popover}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
        onMouseLeave={handlePopoverClose}
        classes={{ paper: classes.popoverPaper }}
      >
        <Grid container direction={direction} spacing={spacing} justify="center">
          <Grid item xs={xs}>
            <Typography
              variant="body1"
              color="textPrimary"
              align="center"
              classes={{ root: classes.primaryText }}
            >
              {primaryText}
            </Typography>
          </Grid>
          <Grid item xs={xs} className={classes.caption}>
            <Typography
              variant="caption"
              color="textSecondary"
              align="center"
              classes={{ root: classes.secondaryText }}
            >
              {secondaryText}
            </Typography>
          </Grid>
        </Grid>
      </Popover>
    </>
  );
};

PopoverInfo.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  popoverId: PropTypes.string.isRequired,
  iconClass: PropTypes.object,
  iconButtonClass: PropTypes.object,
};

PopoverInfo.defaultProps = {
  orientation: 'vertical',
  iconClass: null,
  iconButtonClass: null,
};

export default PopoverInfo;
