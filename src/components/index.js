import Table from './table';
import TableHead from './table-head';
import TableBody from './table-body';
import TableRow from './table-row';
import TableCell from './table-cell';
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
        <TableHead>
          <TableRow>
            {
              headers.map(header => {
                return (
                  <TableCell key={header} component="th">
                    {header}
                  </TableCell>
                );
              })
            }
            <TableCell key={'Действия'} component="th" />
          </TableRow>
        </TableHead>
        <TableBody>
          {
            items.map(({id, type, title, status}) => {
              return (
                <TableRow key={id}>
                  <TableCell icon={<MdVideocam />}>
                    {type}
                  </TableCell>
                  <TableCell>
                    {title}
                  </TableCell>
                  <TableCell>
                    {status}
                  </TableCell>
                  <TableCell icon={<MdSubtitles />} alignIcon="right">
                    <button>Записаться</button>
                  </TableCell>
                </TableRow>
              );
            })
          }
        </TableBody>
      </Table>
    </div>
  );
};

export default App;