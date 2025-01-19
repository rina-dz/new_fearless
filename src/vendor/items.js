// img={card} isPreorder={true} band='BTS/J-hope/Альбом' title='Альбом J-hope - Jack In The Box, HOPE Edition' price="2498₽"


// {
//     'img': '../../vendor/items/img-2.svg',
//     'isPreorder': false,
//     'band': '',
//     'title': '',
//     'price': ''
// },

// добавить свойство Link

import img1 from '../vendor/items/img-1.svg';
import img2 from '../vendor/items/img-2.svg';
import img3 from '../vendor/items/img-3.svg';
import img4 from '../vendor/items/img-4.svg';
import img5 from '../vendor/items/img-5.svg';


let ItemsCards = [
    {
        'img': img1,
        'isPreorder': false,
        'band': 'BTS/J-hope/Альбом',
        'title': 'Альбом J-hope - Jack In The Box, HOPE Edition',
        'price': '2498₽'
    },
    {
        'img': img2,
        'isPreorder': false,
        'band': 'StrayKids/Felix/Журнал',
        'title': 'Журнал Harper’s BAZAAR 2024',
        'price': '3590₽'
    },
    {
        'img': img3,
        'isPreorder': false,
        'band': 'aespa/Альбом',
        'title': 'Альбом aespa - Girls',
        'price': '2500₽'
    },
    {
        'img': img4,
        'isPreorder': false,
        'band': '(G)i-dle/YOQI/Альбом',
        'title': 'Альбом YUQI ((G)I-DLE)1st Mini Album',
        'price': '1980₽'
    },
    {
        'img': img5,
        'isPreorder': false,
        'band': 'Xdinary Heroes/Альбом',
        'title': 'Альбом Xdinary Heroes Troubleshooting (PLATFORM ALBUM)',
        'price': '2750₽'
    },
];

export default ItemsCards;