import React from 'react';
// const TableTd = (cell) => <td>{cell}</td>;

// const TableTh = (cell) => <th>{cell}</th>;

// const alignText = [
//   ''
// ]

// const styles = {
//   align: {
    
//   }
// }

const tdContent = (icon, alignIcon, children) => {
  if (alignIcon === 'right') {
    return (
      <React.Fragment>
        {children}
        {icon}
      </React.Fragment>   
    )
  } else {
    return (
      <React.Fragment>
        {icon}
        {children}
      </React.Fragment>     
    )
  }
};

const TableCell = ({component = 'td', alignText = 'left', icon = null,
  alignIcon = 'left', children, ...props}) => {
    
  return (
    component === 'td' ? 
      <td style={{textAlign: alignText}}>
        {tdContent(icon, alignIcon, children)}       
      </td> 
        : 
      <th style={{textAlign: alignText}}>
        {children}
      </th>
  )
  // const cell = component === 'td' ? TableTd(children) : TableTh(children);
  // return cell;
};

export default TableCell;