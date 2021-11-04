import { LearnTableDTO } from "./LearnTableDTO.dto";

const TableArray: LearnTableDTO.LearnList = [
    {
        id: 6870976507,
        clever: 5,
        name: 'Тренинг #ПроКлиента',
        state: 0,
        type: 'event',
        status: 'plan',
        url: '/event=06870976507'

    },
    {
        id: 68706666976507,
        clever: 5,
        name: 'Обучение персонала розницы в магазинах пятерочка и перекресток',
        state: 0,
        type: 'course',
        status: 'active',
        url: '/course=06870976507'

    },
    {
        id: 6666675757878,
        clever: 5,
        name: 'Аттестационный',
        state: 0,
        type: 'assessment',
        status: 'finished',
        url: '/assessment=06870976507'
    }
];

export default TableArray;