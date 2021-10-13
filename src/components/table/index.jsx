import './table.scss';

const Table = ({children}) => {
  return (
    <table className="table-clever">
      {children}
    </table>   
  )
}


export default Table;