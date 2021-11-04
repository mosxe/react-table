import Table from './Table';
import { MdVideocam, MdRemoveFromQueue,  MdSubtitles} from 'react-icons/md';
import TableArray  from './dataContext/LearnTableContext.ts';

const App = () => {
  const headers = ['Тип', 'Название', 'Статус'];

  return (
    <div style={{background: '#EFF1F5', padding: '30px'}}>
      <Table>
        <Table.Head>
          <Table.Row>
            {
              headers.map(header => {
                return (
                  <Table.Cell key={header} type="th">
                    {header}
                  </Table.Cell>
                );
              })
            }
            <Table.Cell key={'Действия'} type="th" width="120px"/>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {
            TableArray.map(({id, type, name, status}) => {
              return (
                <Table.Row key={id}>
                  <Table.Cell icon={<MdVideocam />} alignIcon="right" alignText="left" colorText="ghost">
                    {type}
                  </Table.Cell>
                  <Table.Cell colorText="ghost">
                    {name}
                  </Table.Cell>
                  <Table.Cell alignText="center">
                    {status}
                  </Table.Cell>
                  <Table.Cell icon={<MdSubtitles />} alignIcon="right" alignText="right" colorText="ghost">
                    <button>Записаться</button>
                  </Table.Cell>
                </Table.Row>
              );
            })
          }
        </Table.Body>
      </Table>
    </div>
  );
};

export default App;