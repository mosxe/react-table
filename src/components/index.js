import Table from './Table';
import { MdVideocam, MdRemoveFromQueue,  MdSubtitles} from 'react-icons/md';

const App = () => {
  const headers = ['Тип', 'Название', 'Статус'];
  const items = [
    {
      id: 1,
      title: 'Видеоролик',
      type: 'video',
      status: 'plan'
    },
    {
      id: 2,
      title: 'Видеоролик',
      type: 'video2',
      status: 'active'
    },
    {
      id: 3,
      title: 'Курс',
      type: 'course',
      status: 'passed'
    },
    {
      id: 4,
      title: 'Тест',
      type: 'test',
      status: 'cancel'
    },
  ];

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
            items.map(({id, type, title, status}) => {
              return (
                <Table.Row key={id}>
                  <Table.Cell icon={<MdVideocam />} alignIcon="right" alignText="left" colorText="ghost">
                    {type}
                  </Table.Cell>
                  <Table.Cell colorText="ghost">
                    {title}
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