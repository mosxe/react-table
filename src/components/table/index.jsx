import Head from '../Head';
import Body from '../Body';
import Row from '../Row';
import Cell from '../Cell';
import './table.scss';

const Table = ({children}) => {
  return (
    <table className="table-clever">
      {children}
    </table>   
  )
}

Table.Head = Head;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;

export default Table;