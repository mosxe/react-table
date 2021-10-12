
const TableTd = (cell) => <td>{cell}</td>;

const TableTh = (cell) => <th>{cell}</th>;

const TableCell = ({component = 'td', children, ...props}) => {
  const cell = component === 'td' ? TableTd(children) : TableTh(children);
  return cell;
};

export default TableCell;