import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

import HorizontalCalculatedField from '../calculatedField/HorizontalCalculatedField';
import fieldTypes from '../calculatedField/CalculatedField.type';

const useStyles = makeStyles((theme) => ({
  even: {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

const SavesBlock = ({
  stats,
  fieldProps,
}) => {
  const classes = useStyles();
  return (
    <Paper>
      <Typography variant="h5" align="center">Saves</Typography>
      <TableContainer>
        <Table>
          <TableBody>
            {fieldProps.map((field, index) => {
              const rootClass = index % 2 === 0 ? classes.even : null;
              return (
                <TableRow key={field.shortName} classes={{ root: rootClass }}>
                  <TableCell>
                    <HorizontalCalculatedField fieldProps={field} stats={stats} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

SavesBlock.propTypes = {
  fieldProps: PropTypes.arrayOf(fieldTypes).isRequired,
  stats: PropTypes.object.isRequired,
};

export default SavesBlock;
