import React from 'react';
import './table-cell.scss';
import classNames from 'classnames';

const TableCell = (props) => {
  const { 
    children,
    type = 'td',
    alignText = 'left',
    colorText = 'color-default',
    width = null } = props;

  const TD = ({children, customStyle }) => {
    return (
      <td className={customStyle}>
        {children}
      </td>
    )
  };

  const TH = ({children, customStyle, width }) => {
    return (
      <th className={customStyle} style={{ width: width }}>
        {children}
      </th>
    )
  };

  const textClasses = classNames({'text--left': alignText === 'left', 'text--right': alignText === 'right',
    'text--center' : alignText === 'center'});

  const textColors = classNames({'text--color-default': colorText === 'color-default', 'text--ghost': colorText === 'ghost'});
 
  return (
    type === 'td' ?
      <TD customStyle={`${textClasses} ${textColors}`}>
        {children}
      </TD>
      :
      <TH customStyle={`${textClasses} ${textColors}`} width={width}>
        {children}
      </TH>
  );
};

export default TableCell;