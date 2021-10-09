import './table.css';

const Table = () => {
  return (
    <div style={{background: 'rgb(246 246 246)', padding: '30px'}}>
      <table>
        <thead>
          <tr>
            <th>ИД</th>
            <th>Название</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Обучающий курс по охране труда. Оказание первой помощи пострадавшим</td>
            <td>Действие1</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Книга1</td>
            <td>Действие1</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Книга1</td>
            <td>Действие1</td>
          </tr>
        </tbody>
      </table>
    </div>
    
  )
}


export default Table;