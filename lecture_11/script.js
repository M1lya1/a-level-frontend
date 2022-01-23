const DATA = [
    {
        name: 'Suzuki',
        img: 'https://avto-russia.ru/moto/suzuki/photo/suzuki_gsx-s1000f_1.jpg',
        description: 'Спортивно-туристический байк Suzuki GSX-S1000F идеален для тех, кто хочет завоевать новые горизонты. Этот универсальный мотоцикл может быть комфортным и послушным средством передвижения или настоящим агрессором с внушительными ходовыми возможностями. Аэродинамичный полуобтекатель и спортивная посадка делают этот байк максимально удобным для скоростных поездок по шоссе.'
    },
    {
        name: 'Yamaha',
        img: 'https://avto-russia.ru/moto/yamaha/photo/yamaha_yzf-r6_1.jpg',
        description: 'Точную и острую управляемость мотоцикла на треке призвано обеспечить продуманное шасси с 43-мм вилкой спереди (как у флагманского R1) и задним мономаятником с магниевой конструкцией подрамника. Разгонная динамика - прежде всего. Для молниеносного набора скорости Yamaha YZF-R6 2017 оборудован системой быстрого переключения передач без применения сцепления.'
    },
    {
        name: 'Honda',
        img: 'https://avto-russia.ru/moto/honda/photo/honda_cbr1000rr-r_1.jpg',
        description: 'Honda CBR1000RR-R Fireblade построен на новом шасси массой всего 201 килограмм. Среди инноваций – новая двухрежимная система ABS, 9-ти уровневая система контроля крутящего момента и системы контроля подъема переднего и заднего колеса.'
    },
    {
        name: 'Ducati',
        img: 'https://avto-russia.ru/moto/ducati/photo/ducati_panigale_v4_2.jpg',
        description: 'Суперзаряженный Ducati Panigale V4 знаменует своим появлением новую главу развития итальянской компании. Это первый байк Ducati, оснащенный 4-цилиндровым двигателем, использующим гоночные технологии MotoGP. Panigale V4 отвечает всем канонам спортивной итальянской элегантности. Мускулистый, агрессивный, впечатляющий, этот байк раскрывает исключительно сильные стороны спортивных мотоболидов. В Ducati Panigale V4 нашли свое отражение самые современные тeхнологии, а также инновационная электроника, не имеющая аналогов.'
    },
    {
        name: 'BMW',
        img: 'https://avto-russia.ru/moto/bmw/photo/bmw_s_1000_rr_2.jpg',
        description: 'На международной мотовыставке EICMA-2018 в Милане компания BMW продемонстрировала публике ряд 2-колесных новинок, в числе которых флагманский супербайк BMW S 1000 RR 2019 модельного года. Главной целью баварских инженеров при создании новой модели было кардинальное улучшение производительности. По сравнению с предшественником новый BMW S 1000 RR мощнее (+ 8 л.с.) и легче (минус 7 кг). Узнаваемую ассиметричную светотехнику сменили эффектные LED-фары с классическим дизайном, придающие мотоциклу неповторимый спортивно-агрессивный вид. Кроме того, супербайк получил пересмотренную эргономику органов управления и руля, а также обновленное сиденье'
    }
];

const nav = document.querySelector('#nav');
const wrapper = document.querySelector('#content');

const createNavEl = (name) => {
   const navEl = `
   <li class="nav_element">
        <a class="link" href="#${name.toLowerCase().replace(' ', '-')}">${name}</a>
   </li>
   ` 
   return navEl;
}

const generateNav = (data) => {
    let navContent = '';
    data.forEach((moto) => {
        navContent += createNavEl(moto.name);
    });
    nav.innerHTML = navContent;
}

const filterData = (data, querry) => {
    return data.filter((moto) => {
        if(moto.name === querry) return moto;
    })
}

const createElement = (moto) => {
    const content = `
    <div class="moto">
        <h2 class="moto_title">${moto.name}</h2>
        <img class="moto_img" src="${moto.img}" alt="${moto.name}"/>
        <p class="moto_description">${moto.description}</p>
    </div>
    `;
    return content;
}

generateNav(DATA);

nav.addEventListener('click', (e) => {
    const linkName = e.target.textContent;
    const result = filterData(DATA, linkName);
    wrapper.innerHTML = createElement(result[0]);

} );