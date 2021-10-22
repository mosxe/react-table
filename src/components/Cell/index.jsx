import React from 'react';
import './table-cell.scss';
import classNames from 'classnames';

const tdContent = (icon, alignIcon, children) => {
  const iconClasses = classNames({icon: icon, 'icon--left': alignIcon === 'left', 'icon--right': alignIcon === 'right' });
  const iconElement = React.cloneElement(icon, {className: iconClasses});
  if (alignIcon === 'right') {
    return (
      <React.Fragment>
        <span>{children}</span>
        {iconElement}
      </React.Fragment>   
    );
  };
  return (
    <React.Fragment>
      {iconElement}
      <span>{children}</span>
    </React.Fragment>     
  );
};

const TableCell = (props) => {
  const { 
    children,
    type = 'td',
    icon = null,
    alignText = 'left',
    alignIcon = 'left',
    colorText = null,
    width = null,
    ...attrs } = props;

  const textClasses = classNames({'text--left': alignText === 'left', 'text--right': alignText === 'right',
    'text--center' : alignText === 'center'});

  const textColors = classNames({'text--ghost': colorText === 'ghost'});
  
  return (
    type === 'td' ? 
      <td className={`${textClasses} ${textColors}`}>
        {icon && tdContent(icon, alignIcon, children) || children}       
      </td> 
        : 
      <th className={`${textClasses} ${textColors}`} style={{width: width}}>
        {children}
      </th>
  );
};

export default TableCell;