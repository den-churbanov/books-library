import {BookData} from './types'
import shortid from 'shortid'

export const getData = () => {
    return [
        {
            id: shortid.generate(),
            author: 'Михаил Булгаков',
            name: 'Мастер и Маргарита',
            image: 'https://skidka-msk.ru/images/prodacts/sourse/61665/61665085_master-i-margarita.jpg',
            numberOfPages: 432,
            releaseYear: 1962
        },
        {
            id: shortid.generate(),
            author: 'Братья Стругацкие',
            name: 'Пикник на обочине',
            image: 'https://knigamir.com/upload/iblock/b32/b3282686be53742f40dba320e016dd81.jpg',
            numberOfPages: 432,
            releaseYear: 1971
        },
        {
            id: shortid.generate(),
            author: 'Дмитрий Глуховский',
            name: 'Метро 2033',
            image: 'https://media.b-stock.ru/gallery/1146008.jpeg',
            numberOfPages: 432,
            releaseYear: 2005
        },
        {
            id: shortid.generate(),
            author: 'Рэй Далио',
            name: 'Принципы',
            image: 'https://cdn1.ozone.ru/s3/multimedia-z/6013007591.jpg',
            numberOfPages: 432,
            releaseYear: 2019
        },
        {
            id: shortid.generate(),
            author: 'Рэй Брэдбери',
            name: '451 градус по Фаренгейту',
            image: 'https://cdn1.ozone.ru/s3/multimedia-a/6000988462.jpg',
            numberOfPages: 432,
            releaseYear: 1953
        },
        {
            id: shortid.generate(),
            author: 'Рэй Брэдбери',
            name: 'Вино из одуванчиков',
            image: 'https://cdn1.ozone.ru/s3/multimedia-c/c1200/6053494032.jpg',
            numberOfPages: 432,
            releaseYear: 1957
        },
        {
            id: shortid.generate(),
            author: 'Джордж Оруэлл',
            name: 'Скотный двор',
            image: 'https://cdn1.ozone.ru/s3/multimedia-6/6025592226.jpg',
            numberOfPages: 432,
            releaseYear: 1944
        },
        {
            id: shortid.generate(),
            author: 'Артур Кларк',
            name: 'Конец детства',
            image: 'https://cdn1.ozone.ru/s3/multimedia-r/c1200/6020563659.jpg',
            numberOfPages: 432,
            releaseYear: 1952
        },
        {
            id: shortid.generate(),
            author: 'Иван Гончаров',
            name: 'Обломов',
            image: 'https://forkidsandmum.ru/pictures/1014358971.jpg',
            numberOfPages: 432,
            releaseYear: 1847
        },
        {
            id: shortid.generate(),
            author: 'Джером Сэлинджер',
            name: 'Над пропастью во ржи',
            image: 'https://7books.ru/wp-content/uploads/2020/01/Nad-propastyu-vo-rzhi127781.jpg',
            numberOfPages: 432,
            releaseYear: 1951
        },
        {
            id: shortid.generate(),
            author:  'Антуан де Сент Экзюпери',
            name: 'Маленький принц',
            image: 'https://тюмень.скидкагид.рф/images/prodacts/sourse/61670/61670815_malenkiy-prints-eksmo.jpg',
            numberOfPages: 432,
            releaseYear: 1943
        }
    ] as Array<BookData>
}