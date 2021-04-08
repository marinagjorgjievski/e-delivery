import { CompanyModel } from '../model/company-food/company-food.model';
import { MenuTypeData } from './menu-types';

export const CompanyData: CompanyModel[] = 
[
  {
    id: 1,
    avatar: '../../assets/food/company-logos/gurman-veles.jpg',
    name: 'Гурман',
    category: ['Домашна кујна', 'Странска кујна'],
    company_type: 'Ресторан',
    photos: ['../../assets/food/company-photos/gurman/63fce6ee7d00ef0aa541c254c57272e6.jpg','../../assets/food/company-photos/gurman/KotorTheDish07.jpg','../../assets/food/company-photos/gurman/phoca_thumb_l_Macedonia-2102.jpg'], 
    description: 'Единствениот ресторан кој Ви нуди се од македонска кујна. Од пица до паста вклучувајќи риба и морска храна. Посебноста на јадењето нека биде Вашиот избор и задоволство. Внесете го вкусот на македонската кујна во Вашиот дом само со еден клик кај нас.',
    preparation_time: '25-40',
    delivery: '15-20',
    open_company: true,
    menu: [
      { 
        menu_id: '1a',
        type: MenuTypeData.filter(menuType => menuType.type === 'Салати')[0],
        food: [
          {
            food_id: '1a1',
            food_name: 'Цезар Салата',
            food_photo: '../../assets/food/salads/caesar.jpg',
            food_price: 179,
            food_ingredients: 
            [
              {name:'марула'}, 
              {name:'ајсберг'},
              {name:'пилешки стек'},
              {name:'кубети'},
              {name:'цезар сос'}, 
            ],
            food_type: 'Салати',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција'],
            food_additions: ['маслинки + 20ден', 'сирење + 30ден', 'пилешки стек + 60ден'],
            food_quantity: 1
          },
          {
            food_id: '1a2',
            food_name: 'Пилешка Салата',
            food_photo: '../../assets/food/salads/chicken.jpg',
            food_price: 199,
            food_ingredients: 
            [
              {name:'марула'}, 
              {name:'ајсберг'},
              {name:'пилешки стек'},
              {name:'кубети'},
              {name:'цезар сос'}, 
            ],
            food_type: 'Салати',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција'],
            food_additions:['кубети + 20ден', 'сос + 20ден'],
            food_quantity: 1
          },
          {
            food_id: '1a3',
            food_name: 'Македонска Салата',
            food_photo: '../../assets/food/salads/makedonska.jpg',
            food_price: 149,
            food_ingredients: 
            [
              {name:'патлиџани'}, 
              {name:'краставици'},
              {name:'кромид'},
              {name:'сирење'},
              {name:'маслинки'}, 
            ],
            food_type: 'Салати',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција'],
            food_additions:['маслинки + 20ден', 'сирење + 30ден'],
            food_quantity: 1
          },
        ]
      },
      {
        menu_id: '1b',
        type: MenuTypeData.filter(menuType => menuType.type === 'Домашна кујна')[0],
        food: [
          {
            food_id: '1b1',
            food_name: 'Ориз со копан',
            food_photo: '../../assets/food/macedonian/chicken-wings.jpg',
            food_price: 119,
            food_ingredients: [
              {name:'ориз'}, 
              {name:'копан'},
              {name:'морков'} 
            ],
            food_type: 'Домашна кујна',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција'],
            food_additions:['копан + 50ден'],
            food_quantity: 1
          },
          {
            food_id: '1b2',
            food_name: 'Пилешка чорба',
            food_photo: '../../assets/food/macedonian/chicken-soup.jpg',
            food_price: 129,
            food_ingredients: 
            [
              {name:'пилешко месо'}, 
              {name:'морков'},
              {name:'домат'},
              {name:'ѓумбир'},
            ],
            food_type: 'Домашна кујна',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција'],
            food_additions: ['лимон + 20ден'],
            food_quantity: 1
          },
          {
            food_id: '1b3',
            food_name: 'Гравче тавче',
            food_photo: '../../assets/food/macedonian/baked-beans.jpg',
            food_price: 139,
            food_ingredients: 
            [
              {name:'грав'}, 
              {name:'сува пиперка'},
              {name:'морков'},
              {name:'лук'},
            ],
            food_type: 'Домашна кујна',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција'],
            food_additions: ['леб + 20ден'],
            food_quantity: 1
          },
        ]
      },
      {
        menu_id: '1c',
        type: MenuTypeData.filter(menuType => menuType.type === 'Морско')[0],
        food: [
          {
            food_id: '1c1',
            food_name: 'Ослич',
            food_photo: 'https://www.croatia-expert.com/wp-content/uploads/2011/07/Lubin-in-restaurant-1024x768.jpg',
            food_price: 119,
            food_ingredients: 
            [
              {name:'ориз'}, 
              {name:'ослич'},
              {name:'морков'},
            ],
            food_type: 'Морско',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција'],
            food_additions:['лимон + 20ден'],
            food_quantity: 1
          },
          {
            food_id: '1c2',
            food_name: 'Крап',
            food_photo: 'https://cdn.off.mk/files/styles/statija-sofka/public/sofka/2016/12/21/180429-pechen-krap.jpeg',
            food_price: 129,
            food_ingredients: 
            [
              {name:'крап'}, 
              {name:'лимон'},
            ],
            food_type: 'Морско',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција'],
            food_additions: ['лимон + 20ден'],
            food_quantity: 1
          },
        ]
      },
      {
        menu_id: '1d',
        type: MenuTypeData.filter(menuType => menuType.type === 'Тестенини')[0],
        food: [
          {
            food_id: '1d1',
            food_name: 'Лазањи',
            food_photo: 'https://www.stvarukusa.rs/wp-content/uploads/2019/05/shutterstock_739787011.jpg',
            food_price: 119,
            food_ingredients: 
            [
              {name:'лазањи'}, 
              {name:'кашкавал'},
            ],
            food_type: 'Тестенини',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција'],
            food_additions:['лимон + 20ден'],
            food_quantity: 1
          },
          {
            food_id: '1d2',
            food_name: 'Тортелини',
            food_photo: 'https://img.static-rmg.be/a/food/image/q75/w640/h400/18145/tortellini-met-ricottavulling-en-tomatensaus.jpg',
            food_price: 129,
            food_ingredients: 
            [
              {name:'тортелини'}, 
              {name:'кашкавал'},
            ],
            food_type: 'Тестенини',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција'],
            food_additions: ['лимон + 20ден'],
            food_quantity: 1
          },
          {
            food_id: '1d3',
            food_name: 'Макарони печени',
            food_photo: 'https://odprtakuhinja.delo.si/wp-content/uploads/2019/09/Odprtakuhinja-makaroni-in-sir.jpg',
            food_price: 129,
            food_ingredients: 
            [
              {name:'макарони'}, 
              {name:'сирење'},
            ],
            food_type: 'Тестенини',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција'],
            food_additions: ['сирење + 20ден'],
            food_quantity: 1
          },
        ]
      }
    ],
    work_time: [
      {
        work_time_id: 'work11',
        day: 'Понеделник',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work12',
        day: 'Вторник',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work13',
        day: 'Среда',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work14',
        day: 'Четврток',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work15',
        day: 'Петок',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work16',
        day: 'Сабота',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work17',
        day: 'Недела',
        from_hour: '08:30',
        to_hour: '13:30',
        is_active: false
      }
    ]
  },
  {
    id: 2,
    avatar: '../../assets/food/company-logos/KFC-Logo.png',
    name: 'KFC',
    category: ['Американска кујна'],
    company_type: 'Ресторан',
    photos: ['../../assets/food/company-photos/kfc/350x350_web_baner.jpg','../../assets/food/company-photos/kfc/5-Crispy-Strips-350x350.png','../../assets/food/company-photos/kfc/Fries-SML-02-350x350.png'], 
    description: 'Единствениот ресторан кој Ви нуди се од американска кујна. Од пица до паста вклучувајќи риба и морска храна. Посебноста на јадењето нека биде Вашиот избор и задоволство. Внесете го вкусот на Италија во Вашиот дом само со еден клик кај нас.',
    preparation_time: '10-15',
    delivery: '15-20',
    open_company: false,
    menu: [
      {
        menu_id: '2a',
        type: MenuTypeData.filter(menuType => menuType.type === 'Бургери')[0],
        food: [
          {
            food_id: '2a1',
            food_name: 'Крцкав бургер',
            food_photo: '../../assets/food/burgers/Crunch-Burger-02-min-350x350.png',
            food_price: 80,
            food_ingredients: 
            [
              {name:'пилешко месо'}, 
              {name:'лепче'},
              {name:'марула'},
              {name:'сос'},
            ],
            food_type: 'Бургери',
            food_packaging: '',
            food_comment: '',
            food_options:['средна порција'],
            food_additions:['маслинки + 20ден', 'сос + 20ден', 'печурки + 30ден'],
            food_quantity: 1
          },
          {
            food_id: '2a2',
            food_name: 'Замотан бургер',
            food_photo: '../../assets/food/burgers/512_Twister-350x350.png',
            food_price: 100,
            food_ingredients: 
            [
              {name:'пилешко месо'}, 
              {name:'лепче'},
              {name:'марула'},
              {name:'сос'},
            ],
            food_type: 'Бургери',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција'],
            food_additions:['маслинки + 20ден', 'сос + 20ден', 'печурки + 30ден'],
            food_quantity: 1
          },
          {
            food_id: '2a3',
            food_name: 'Чикенбургер',
            food_photo: '../../assets/food/burgers/TowerBurger-350x350.png',
            food_price: 110,
            food_ingredients: 
            [
              {name:'пилешко месо'}, 
              {name:'лепче'},
              {name:'марула'},
              {name:'сос'},
            ],
            food_type: 'Бургери',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција'],
            food_additions:['маслинки + 20ден', 'сос + 20ден', 'печурки + 30ден'],
            food_quantity: 1
          },
        ]
      },
      {
        menu_id: '2b',
        type: MenuTypeData.filter(menuType => menuType.type === 'Снекс')[0],
        food: [
          {
            food_id: '2b1',
            food_name: 'Крцкав снекс',
            food_photo: '../../assets/food/snacks/5-Crispy-Strips-350x350.png',
            food_price: 120,
            food_ingredients: 
            [
              {name:'пилешко месо'}, 
            ],
            food_type: 'Снекс',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција','голема порција + 30ден'],
            food_additions:['сос + 20ден'],
            food_quantity: 1
          },
          {
            food_id: '2b2',
            food_name: 'Фамилијарно пакување',
            food_photo: '../../assets/food/snacks/Family-Bucket-350x350.png',
            food_price: 129,
            food_ingredients: 
            [
              {name:'пилешки копанчиња'}, 
            ],
            food_type: 'Снекс',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција','голема порција + 30ден'],
            food_additions:['сос + 20ден'],
            food_quantity: 1
          },
          {
            food_id: '2b3',
            food_name: 'Снекс и помфрит',
            food_photo: '../../assets/food/snacks/Snack-Box-Crispy-strips-02-min-350x350.png',
            food_price: 139,
            food_ingredients: 
            [
              {name:'пилешки копанчиња'}, 
              {name:'помфрит'}, 
            ],
            food_type: 'Снекс',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција','голема порција + 30ден'],
            food_additions:['помфрит + 30ден'],
            food_quantity: 1
          },
        ]
      },
      {
        menu_id: '2c',
        type: MenuTypeData.filter(menuType => menuType.type === 'Пијалоци')[0],
        food: [
          {
            food_id: '2c1',
            food_name: 'Кока кола',
            food_photo: '../../assets/food/drinks/6.png',
            food_price: 80,
            food_ingredients: 
            [
              {name:'кока кола'}, 
              {name:'помфрит'}, 
            ],
            food_type: 'Пијалоци',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна чаша','голема чаша + 20ден'],
            food_additions:[''],
            food_quantity: 1
          },
        ]
      }
    ],
    work_time: [
      {
        work_time_id: 'work21',
        day: 'Понеделник',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work22',
        day: 'Вторник',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work23',
        day: 'Среда',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work24',
        day: 'Четврток',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work25',
        day: 'Петок',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work26',
        day: 'Сабота',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work27',
        day: 'Недела',
        from_hour: '08:30',
        to_hour: '13:30',
        is_active: false
      }
    ]
  },
  {
    id: 3,
    avatar: '../../assets/food/company-logos/vig.jpg',
    name: 'Виг',
    category: ['Домашна кујна'],
    company_type: 'Пекара',
    photos: ['../../assets/food/company-photos/vig/101648872_3109020919157628_6380389130429267968_o.jpg', '../../assets/food/company-photos/vig/26165896_1634625116597223_7162565653941155268_n.jpg','../../assets/food/company-photos/vig/30709461_1747860821940318_9181905755404500992_n.jpg'], 
    description: 'Единствениот ресторан кој Ви нуди се од американска кујна. Од пица до паста вклучувајќи риба и морска храна. Посебноста на јадењето нека биде Вашиот избор и задоволство. Внесете го вкусот на Италија во Вашиот дом само со еден клик кај нас.',
    preparation_time: '10-15',
    delivery: '15-20',
    open_company: true,
    menu: [
      {
        menu_id: '3a',
        type: MenuTypeData.filter(menuType => menuType.type === 'Пецива')[0],
        food: [
          {
            food_id: '3а1',
            food_name: 'Крофни',
            food_photo: '../../assets/food/pastry/donuts.jpg',
            food_price: 50,
            food_ingredients: 
            [
              {name:'тесто'}, 
              {name:'чоколаден прелив'}, 
            ],
            food_type: 'Пецива',
            food_packaging: '',
            food_comment: '',
            food_options: ['џем од јагоди', 'чоколаден крем'],
            food_additions:['чоколадно млеко + 20 ден'],
            food_quantity: 1
          },
          {
            food_id: '3а2',
            food_name: 'Бурек',
            food_photo: '../../assets/food/pastry/burek.jpg',
            food_price: 50,
            food_ingredients: 
            [
              {name:'тесто'}, 
            ],
            food_type: 'Пецива',
            food_packaging: '',
            food_comment: '',
            food_options: ['бурек со месо', 'бурек со сирење', 'бурек со спанаќ'],
            food_additions:['јогурт + 30ден'],
            food_quantity: 1
          },
          {
            food_id: '3а3',
            food_name: 'Панцерота',
            food_photo: '../../assets/food/pastry/panzerota.jpg',
            food_price: 30,
            food_ingredients: 
            [
              {name:'тесто'}, 
              {name:'шунка'}, 
              {name:'кашкавал'}, 
              {name:'кечап'}, 
            ],
            food_type: 'Пецива',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна панцерота', 'голема панцерота + 30ден'],
            food_additions:['јогурт + 30ден'],
            food_quantity: 1
          },
        ]
      },
    ],
    work_time: [
      {
        work_time_id: 'work31',
        day: 'Понеделник',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work32',
        day: 'Вторник',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work33',
        day: 'Среда',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work34',
        day: 'Четврток',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work35',
        day: 'Петок',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work36',
        day: 'Сабота',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work37',
        day: 'Недела',
        from_hour: '08:30',
        to_hour: '13:30',
        is_active: false
      }
    ]
  },
  {
    id: 4,
    avatar: '../../assets/food/company-logos/krug.jpg',
    name: 'Сендвичара Круг',
    category: ['Италијанска кујна', 'Американска кујна'],
    company_type: 'Сендвичара',
    photos: ['../../assets/food/company-photos/krug/125488694_10157669356878616_9148407231196668550_o.jpg','../../assets/media/food/company-photos/krug/54278763_10156135258963616_8818834294219735040_o.jpg','../../assets/food/company-photos/krug/54377141_10156135258728616_8272440116874575872_o.jpg'], 
    description: 'Единствениот ресторан кој Ви нуди се од американска кујна. Од пица до паста вклучувајќи риба и морска храна. Посебноста на јадењето нека биде Вашиот избор и задоволство. Внесете го вкусот на Италија во Вашиот дом само со еден клик кај нас.',
    preparation_time: '25-40',
    delivery: '15-20',
    open_company: false,
    menu: [
      {
        menu_id: '4a',
        type: MenuTypeData.filter(menuType => menuType.type === 'Пица')[0],
        food: [
          {
            food_id: '4а1',
            food_name: 'Капричиоза',
            food_photo: '../../assets/food/pizza/capricioza-krug.jpg',
            food_price: 125,
            food_ingredients: 
            [
              {name:'тесто'}, 
              {name:'шунка'}, 
              {name:'кашкавал'}, 
              {name:'печурки'}, 
            ],
            food_type: 'Пица',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција','голема порција + 75ден'],
            food_additions: ['маслинки + 20ден', 'сирење + 20ден'],
            food_quantity: 1
          },
          {
            food_id: '4а2',
            food_name: 'Индиано',
            food_photo: '../../assets/food/pizza/indiano-krug.jpg',
            food_price: 125,
            food_ingredients: 
            [
              {name:'тесто'}, 
              {name:'моцарела'}, 
              {name:'маслинки'}, 
              {name:'пиперки'}, 
            ],
            food_type: 'Пица',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција','голема порција + 75ден'],
            food_additions: ['маслинки + 20ден', 'сирење + 20ден', 'зеленчук + 20ден'],
            food_quantity: 1
          },
          {
            food_id: '4а3',
            food_name: 'Пеперони',
            food_photo: '../../assets/food/pizza/peperoni-krug.jpg',
            food_price: 125,
            food_ingredients: 
            [
              {name:'тесто'}, 
              {name:'чајна'}, 
              {name:'кашкавал'}, 
            ],
            food_type: 'Пица',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција','голема порција + 75ден'],
            food_additions:['маслинки + 20ден', 'сирење + 20ден', 'зеленчук + 20ден'],
            food_quantity: 1
          },
        ]
      },
      {
        menu_id: '4b',
        type: MenuTypeData.filter(menuType => menuType.type === 'Бургери')[0],
        food: [
          {
            food_id: '4b1',
            food_name: 'Хамбургер',
            food_photo: '../../assets/food/burgers/burger.jpg',
            food_price: 125,
            food_ingredients: 
            [
              {name:'лепче'}, 
              {name:'плескавица'}, 
              {name:'помфрит'}, 
            ],
            food_type: 'Бургери',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција'],
            food_additions: ['салата + 20ден', 'сос + 20ден'],
            food_quantity: 1
          },
          {
            food_id: '4b2',
            food_name: 'Чедар бургер',
            food_photo: '../../assets/food/burgers/Smashburger-recipe-120219.jpg',
            food_price: 139,
            food_ingredients: 
            [
              {name:'лепче'}, 
              {name:'плескавица'}, 
              {name:'чедар'}, 
              {name:'сос'}, 
              {name:'к.краставички'}, 
            ],
            food_type: 'Бургери',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција'],
            food_additions: ['салата + 20ден', 'сос + 20ден', 'чедар + 30ден'],
            food_quantity: 1
          },
          {
            food_id: '4b3',
            food_name: 'Бејкон бургер',
            food_photo: '../../assets/food/burgers/RedDot_Burger.jpg',
            food_price: 139,
            food_ingredients: 
            [
              {name:'лепче'}, 
              {name:'плескавица'}, 
              {name:'крцкава сланина'}, 
              {name:'сос'}, 
              {name:'марула'}, 
            ],
            food_type: 'Бургери',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција'],
            food_additions:['салата + 20ден', 'сос + 20ден', 'сланина + 30ден'],
            food_quantity: 1
          },
        ]
      },
      {
        menu_id: '4c',
        type: MenuTypeData.filter(menuType => menuType.type === 'Пијалоци')[0],
        food: [
          {
            food_id: '4c1',
            food_name: 'Кока кола',
            food_photo: 'https://atlas-content-cdn.pixelsquid.com/stock-images/coca-cola-glass-soda-nrdvoxB-600.jpg',
            food_price: 60,
            food_ingredients: 
            [
              {name:'кока кола'}, 
            ],
            food_type: 'Пијалоци',
            food_packaging: '',
            food_comment: '',
            food_options: [''],
            food_additions: [''],
            food_quantity: 1
          },
          {
            food_id: '4c2',
            food_name: 'Лимонада',
            food_photo: 'https://images-na.ssl-images-amazon.com/images/I/71wj9GVnFsL._AC_SL1500_.jpg',
            food_price: 30,
            food_ingredients: 
            [
              {name:'лимонада'}, 
            ],
            food_type: 'Пијалоци',
            food_packaging: '',
            food_comment: '',
            food_options: [''],
            food_additions: [''],
            food_quantity: 1
          },
        ]
      }
    ],
    work_time: [
      {
        work_time_id: 'work41',
        day: 'Понеделник',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work42',
        day: 'Вторник',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work43',
        day: 'Среда',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work44',
        day: 'Четврток',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work45',
        day: 'Петок',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work46',
        day: 'Сабота',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work47',
        day: 'Недела',
        from_hour: '08:30',
        to_hour: '13:30',
        is_active: false
      }
    ]
  },
  {
    id: 5,
    avatar: '../../assets/food/company-logos/etage.jpg',
    name: 'Etage',
    category: ['Домашна кујна', 'Странска кујна'],
    company_type: 'Ресторан',
    photos: ['../../assets/food/company-photos/etage/131547298_2838689519706886_2210174782063454606_o.jpg','../../assets/food/company-photos/etage/135418379_2854709521438219_8383820187850485050_o.jpg','../../assets/food/company-photos/etage/136359264_2857071877868650_1805135422246207507_o.jpg'], 
    description: 'Единствениот ресторан кој Ви нуди се од македонска кујна. Од пица до паста вклучувајќи риба и морска храна. Посебноста на јадењето нека биде Вашиот избор и задоволство. Внесете го вкусот на македонската кујна во Вашиот дом само со еден клик кај нас.',
    preparation_time: '25-40',
    delivery: '15-20',
    open_company: true,
    menu: [
			{
				menu_id: '5a',
				type: MenuTypeData.filter(menuType => menuType.type === 'Морско')[0],
				food: [
          {
            food_id: '5а1',
            food_name: 'Крап',
            food_photo: '../../assets/food/fish/krap_na_manastirski_nacin.jpg',
            food_price: 139,
            food_ingredients: 
            [
              {name:'крап'}, 
              {name:'лимон'}, 
            ],
            food_type: 'Морско',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција'],
            food_additions:['лимон + 20ден'],
            food_quantity: 1
          },
          {
            food_id: '5а2',
            food_name: 'Пастрмка',
            food_photo: '../../assets/food/fish/DSC_0020_glavna-945bf6.jpg',
            food_price: 139,
            food_ingredients: 
            [
              {name:'пастрмка'}, 
              {name:'лимон'}, 
            ],
            food_type: 'Морско',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција'],
            food_additions:['лимон + 20ден'],
            food_quantity: 1
          },
          {
            food_id: '5а3',
            food_name: 'Лосос во фурна',
            food_photo: '../../assets/food/fish/shutterstock-211029946.jpg',
            food_price: 139,
            food_ingredients: 
            [
              {name:'лосос'}, 
              {name:'лимон'}, 
            ],
            food_type: 'Морско',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција'],
            food_additions:['лимон + 20ден'],
            food_quantity: 1
          },
				]
			},
			{
				menu_id: '5b',
				type: MenuTypeData.filter(menuType => menuType.type === 'Морско')[0],
				food: [
          {
            food_id: '5b1',
            food_name: 'Октопод во црвено вино',
            food_photo: '../../assets/food/seafood/cyal-oktopod.jpg',
            food_price: 139,
            food_ingredients: 
            [
              {name:'октопод'}, 
              {name:'вино'},
              {name:'лимон'}, 
            ],
            food_type: 'Морско',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција', 'голема порција + 59ден'],
            food_additions:['сос + 30ден'],
            food_quantity: 1
          },
          {
            food_id: '5b2',
            food_name: 'Ракчиња',
            food_photo: '../../assets/food/seafood/seafood-langs-LST332405.jpg',
            food_price: 139,
            food_ingredients: 
            [
              {name:'ракчиња'}, 
            ],
            food_type: 'Морско',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција', 'голема порција + 59ден'],
            food_additions:['сос + 30ден'],
            food_quantity: 1
          },
          {
            food_id: '5b3',
            food_name: 'Поховани лигњи',
            food_photo: '../../assets/food/seafood/DSC00908-05efd1.jpg',
            food_price: 139,
            food_ingredients: 
            [
              {name:'лигњи'}, 
            ],
            food_type: 'Морско',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција', 'голема порција + 59ден'],
            food_additions:['сос + 30ден'],
            food_quantity: 1
          },
				]
      },
      {
				menu_id: '5c',
				type: MenuTypeData.filter(menuType => menuType.type === 'Тестенини')[0],
				food: [
          {
            food_id: '5c1',
            food_name: 'Шпагети болоњезе',
            food_photo: '../../assets/food/pasta/bolognese.jpg',
            food_price: 139,
            food_ingredients: 
            [
              {name:'шпагети'}, 
              {name:'мелено'},
              {name:'месо'},
            ],
            food_type: 'Тестенини',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција', 'голема порција + 59ден'],
            food_additions:['пармезан + 30ден'],
            food_quantity: 1
          },
          {
            food_id: '5c2',
            food_name: 'Макарони со кватро формаџи',
            food_photo: '../../assets/food/pasta/kvatro-pasta-post.jpg',
            food_price: 139,
            food_ingredients: 
            [
              {name:'макарони'}, 
              {name:'формаџи'},
              {name:'сос'},
            ],
            food_type: 'Тестенини',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција', 'голема порција + 59ден'],
            food_additions:['екстра сос + 30ден', 'маслинки + 30ден'],
            food_quantity: 1
          },
          {
            food_id: '5c3',
            food_name: 'Лазањи',
            food_photo: '../../assets/food/pasta/01-lazanji.jpg',
            food_price: 139,
            food_ingredients: 
            [
              {name:'лазањи'}, 
              {name:'кашкавал'},
            ],
            food_type: 'Тестенини',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција', 'голема порција + 59ден'],
            food_additions:['кашкавал + 30ден', 'маслинки + 30ден'],
            food_quantity: 1
          },
				]
      },
      {
				menu_id: '5d',
				type: MenuTypeData.filter(menuType => menuType.type === 'Пица')[0],
				food: [
          {
            food_id: '5d1',
            food_name: 'Пеперони',
            food_photo: 'https://www.womanscribbles.net/wp-content/uploads/2020/01/pepperoni-pizza-one-720x720.jpg',
            food_price: 139,
            food_ingredients: 
            [
              {name:'тесто'},
              {name:'чајна'},  
              {name:'кашкавал'},
            ],
            food_type: 'Пица',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција','голема порција + 75ден'],
            food_additions:['маслинки + 20ден', 'сирење + 20ден', 'зеленчук + 20ден'],
            food_quantity: 1
          },
          {
            food_id: '5d2',
            food_name: 'Маргарита',
            food_photo: 'https://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3.jpg',
            food_price: 139,
            food_ingredients: 
            [
              {name:'тесто'},
              {name:'спанаќ'},  
              {name:'кашкавал'},
            ],
            food_type: 'Пица',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција','голема порција + 75ден'],
            food_additions:['маслинки + 20ден', 'сирење + 20ден', 'зеленчук + 20ден'],
            food_quantity: 1
          },
          {
            food_id: '5d3',
            food_name: 'Хаваи',
            food_photo: 'https://www.jessicagavin.com/wp-content/uploads/2020/07/hawaiian-pizza-16-1200.jpg',
            food_price: 139,
            food_ingredients: 
            [
              {name:'тесто'},
              {name:'ананас'},  
              {name:'шунка'},
            ],
            food_type: 'Пица',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција','голема порција + 75ден'],
            food_additions:['ананас + 20ден', 'шунка + 20ден', 'зеленчук + 20ден'],
            food_quantity: 1
          },
				]
			}
		],
    work_time: [
      {
        work_time_id: 'work51',
        day: 'Понеделник',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work52',
        day: 'Вторник',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work53',
        day: 'Среда',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work54',
        day: 'Четврток',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work55',
        day: 'Петок',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work56',
        day: 'Сабота',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work57',
        day: 'Недела',
        from_hour: '08:30',
        to_hour: '13:30',
        is_active: false
      }
    ]
  },
  {
      id: 6,
      avatar: '../../assets/food/company-logos/choco-bar.jpg',
      name: 'Choco Bar',
      company_type: 'Кафе бар',
      category: ['Американска кујна'],
      photos: ['../../assets/food/company-photos/chocobar/139045631_524659361799782_6924586836834984284_o.jpg','../../assets/food/company-photos/chocobar/139769172_525143835084668_7608604490363919795_o.jpg','../../assets/food/company-photos/chocobar/139843159_525659191699799_1895052571286534753_o.jpg'], 
      description: 'Единствениот ресторан кој Ви нуди се од американска кујна. Од пица до паста вклучувајќи риба и морска храна. Посебноста на јадењето нека биде Вашиот избор и задоволство. Внесете го вкусот на Италија во Вашиот дом само со еден клик кај нас.',
      preparation_time: '10-15',
      delivery: '15-20',
      open_company: true,
      menu: [
        {
          menu_id: '6a',
          type: MenuTypeData.filter(menuType => menuType.type === 'Бургери')[0],
          food: [
            {
              food_id: '6а1',
              food_name: 'Крцкав бургер',
              food_photo: '../../assets/food/burgers/Crunch-Burger-02-min-350x350.png',
              food_price: 80,
              food_ingredients: 
              [
                {name:'пилешко месо'},
                {name:'лепче'},  
                {name:'марула'}, 
                {name:'сос'},
              ],
              food_type: 'Бургери',
              food_packaging: '',
              food_comment: '',
              food_options:['средна порција'],
              food_additions:['маслинки + 20ден', 'сос + 20ден', 'печурки + 30ден'],
              food_quantity: 1
            },
            {
              food_id: '6а2',
              food_name: 'Замотан бургер',
              food_photo: '../../assets/food/burgers/512_Twister-350x350.png',
              food_price: 100,
              food_ingredients: 
              [
                {name:'пилешко месо'},
                {name:'лепче'},  
                {name:'марула'}, 
                {name:'сос'},
              ],
              food_type: 'Бургери',
              food_packaging: '',
              food_comment: '',
              food_options: ['средна порција'],
              food_additions:['маслинки + 20ден', 'сос + 20ден', 'печурки + 30ден'],
              food_quantity: 1
            },
            {
              food_id: '6а3',
              food_name: 'Чикенбургер',
              food_photo: '../../assets/food/burgers/Smashburger-recipe-120219.jpg',
              food_price: 110,
              food_ingredients: 
              [
                {name:'пилешко месо'},
                {name:'лепче'},  
                {name:'марула'}, 
                {name:'сос'},
              ],
              food_type: 'Бургери',
              food_packaging: '',
              food_comment: '',
              food_options: ['средна порција'],
              food_additions:['маслинки + 20ден', 'сос + 20ден', 'печурки + 30ден'],
              food_quantity: 1
            },
          ]
        },
        {
          menu_id: '6b',
          type: MenuTypeData.filter(menuType => menuType.type === 'Десерт')[0],
          food: [
            {
              food_id: '6b1',
              food_name: 'Палачинка',
              food_photo: '../../assets/food/desserts/crepe-chocobar.jpg',
              food_price: 139,
              food_ingredients: 
              [
                {name:'крем'},  
                {name:'банана'}, 
              ],
              food_type: 'Десерт',
              food_packaging: '',
              food_comment: '',
              food_options: ['средна порција', 'голема порција + 59ден'],
              food_additions:['сладолед ванила + 30ден', 'сладолед чоколадо + 30ден', 'екстра прелив + 30ден'],
              food_quantity: 1
            },
            {
              food_id: '6b2',
              food_name: 'Чизкејк',
              food_photo: '../../assets/food/desserts/cheesecake.jpeg',
              food_price: 139,
              food_ingredients: 
              [
                {name:'џем'},  
              ],
              food_type: 'Десерт',
              food_packaging: '',
              food_comment: '',
              food_options: ['едно парче'],
              food_additions:['екстра прелив + 20ден'],
              food_quantity: 1
            },
            {
              food_id: '6b3',
              food_name: 'Топло ладно',
              food_photo: '../../assets/food/desserts/volcano.jpg',
              food_price: 139,
              food_ingredients: 
              [
                {name:'чоколадо'}, 
                {name:'сладолед'}, 
              ],
              food_type: 'Десерт',
              food_packaging: '',
              food_comment: '',
              food_options: ['едно парче'],
              food_additions:['сладолед страчатела + 30ден', 'сладолед ванила + 30ден', 'компот од јагоди + 30ден'],
              food_quantity: 1
            },
          ]
        },
        {
          menu_id: '6c',
          type: MenuTypeData.filter(menuType => menuType.type === 'Кафе')[0],
          food: [
            {
              food_id: '6b1',
              food_name: 'Еспресо',
              food_photo: '../../assets/food/drinks/espresso.jpg',
              food_price: 139,
              food_ingredients: 
              [
                {name:'еспресо'},
              ],
              food_type: 'Кафе',
              food_packaging: '',
              food_comment: '',
              food_options: ['кратко еспресо', 'долго еспресо + 30ден'],
              food_additions:['карамел бисквита + 10ден', 'стевиа + 10ден'],
              food_quantity: 1
            },
            {
              food_id: '6b2',
              food_name: 'Макијато',
              food_photo: '../../assets/food/drinks/makiato.jpg',
              food_price: 139,
              food_ingredients: 
              [
                {name:'макијато'},
              ],
              food_type: 'Кафе',
              food_packaging: '',
              food_comment: '',
              food_options: ['средно макијато', 'големо макијато + 30ден'],
              food_additions:['карамел бисквита + 10ден', 'стевиа + 10ден'],
              food_quantity: 1
            },
            {
              food_id: '6b3',
              food_name: 'Нескафе',
              food_photo: '../../assets/food/drinks/nescaffe.jpg',
              food_price: 139,
              food_ingredients: 
              [
                {name:'нескафе'},
              ],
              food_type: 'Кафе',
              food_packaging: '',
              food_comment: '',
              food_options: ['средно нескафе', 'големо нескафе + 30ден'],
              food_additions:['карамел бисквита + 10ден', 'стевиа + 10ден'],
              food_quantity: 1
            },
          ]
        },
        {
          menu_id: '6d',
          type: MenuTypeData.filter(menuType => menuType.type === 'Пијалоци')[0],
          food: [
            {
              food_id: '6d1',
              food_name: 'Пиво',
              food_photo: 'https://i.pinimg.com/originals/8d/05/f8/8d05f853e12ebe6e9f46b5443a9e7ea8.jpg',
              food_price: 100,
              food_ingredients: 
              [
                {name:'пиво'},
              ],
              food_type: 'Пијалоци',
              food_packaging: '',
              food_comment: '',
              food_options: ['средна чаша','голема чаша + 20ден'],
              food_additions:[''],
              food_quantity: 1
            },
            {
              food_id: '6d2',
              food_name: 'Кока кола',
              food_photo: '../../assets/food/drinks/Coca-Cola-glass.jpg',
              food_price: 80,
              food_ingredients: 
              [
                {name:'кока кола'},
              ],
              food_type: 'Пијалоци',
              food_packaging: '',
              food_comment: '',
              food_options: ['средна чаша','голема чаша + 20ден'],
              food_additions:['орео + 60ден'],
              food_quantity: 1
            },
            {
              food_id: '6d3',
              food_name: 'Вино Темјаника',
              food_photo: 'data:image/jpeg;base64,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',
              food_price: 250,
              food_ingredients: 
              [
                {name:'вино бело'},
              ],
              food_type: 'Пијалоци',
              food_packaging: '',
              food_comment: '',
              food_options: ['мало пакување','големо пакување + 20ден'],
              food_additions:[''],
              food_quantity: 1
            },
            {
              food_id: '6d4',
              food_name: 'Вино Александрија',
              food_photo: 'https://1740009751.rsc.cdn77.org/sites/balkanbaba/docs/image_1360136364_72.png',
              food_price: 250,
              food_ingredients: 
              [
                {name:'вино црвено'},
              ],
              food_type: 'Пијалоци',
              food_packaging: '',
              food_comment: '',
              food_options: ['мало пакување','големо пакување + 20ден'],
              food_additions:[''],
              food_quantity: 1
            },
          ]
        }
      ],
      work_time: [
        {
          work_time_id: 'work61',
          day: 'Понеделник',
          from_hour: '08:30',
          to_hour: '23:30',
          is_active: true
        },
        {
          work_time_id: 'work62',
          day: 'Вторник',
          from_hour: '08:30',
          to_hour: '23:30',
          is_active: true
        },
        {
          work_time_id: 'work63',
          day: 'Среда',
          from_hour: '08:30',
          to_hour: '23:30',
          is_active: true
        },
        {
          work_time_id: 'work64',
          day: 'Четврток',
          from_hour: '08:30',
          to_hour: '23:30',
          is_active: true
        },
        {
          work_time_id: 'work65',
          day: 'Петок',
          from_hour: '08:30',
          to_hour: '23:30',
          is_active: true
        },
        {
          work_time_id: 'work66',
          day: 'Сабота',
          from_hour: '08:30',
          to_hour: '23:30',
          is_active: true
        },
        {
          work_time_id: 'work67',
          day: 'Недела',
          from_hour: '08:30',
          to_hour: '13:30',
          is_active: false
        }
      ]
  },
  {
    id: 7,
    avatar: '../../assets/food/company-logos/glorius-white.jpg',
    name: 'Глориус',
    category: ['Домашна кујна', 'Италијанска кујна', 'Кинеска кујна'],
    company_type: 'Ресторан',
    photos: ['../../assets/food/company-photos/glorius/101554545_683171898896197_5603359744774373376_o.jpg','../../assets/food/company-photos/glorius/117294842_725928031287250_1114318287741923166_o.jpg','../../assets/food/company-photos/glorius/122784092_783841692162550_4890100263762435068_o.jpg'], 
    description: 'Единствениот ресторан кој Ви нуди се од американска кујна. Од пица до паста вклучувајќи риба и морска храна. Посебноста на јадењето нека биде Вашиот избор и задоволство. Внесете го вкусот на Италија во Вашиот дом само со еден клик кај нас.',
    preparation_time: '20-30',
    delivery: '15-20',
    open_company: true,
    menu: [
			{
				menu_id: '7a',
				type: MenuTypeData.filter(menuType => menuType.type === 'Домашна кујна')[0],
				food: [
          {
            food_id: '7а1',
            food_name: 'Пилешко во кари',
            food_photo: '../../assets/food/international/chicken-curry.jpg',
            food_price: 139,
            food_ingredients: 
            [
              {name:'пилешко месо'},
              {name:'кари сос'},
            ],
            food_type: 'Домашна кујна',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција'],
            food_additions:['ориз + 50ден', 'зеленчук + 50ден'],
            food_quantity: 1
          },
          {
            food_id: '7а2',
            food_name: 'Пита пастрмајлија',
            food_photo: '../../assets/food/macedonian/pastrmajlija.jpg',
            food_price: 139,
            food_ingredients: 
            [
              {name:'тесто'},
              {name:'свинско месо'},
              {name:'јајце'},
            ],
            food_type: 'Домашна кујна',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна', 'голема + 59ден'],
            food_additions:['феферонки + 30ден'],
            food_quantity: 1
          },
          {
            food_id: '7а3',
            food_name: 'Плескавица',
            food_photo: '../../assets/food/bbq/burger.jpg',
            food_price: 139,
            food_ingredients: 
            [
              {name:'мелено месо'},
              {name:'кромид'},
            ],
            food_type: 'Домашна кујна',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна', 'голема + 59ден'],
            food_additions:['сос + 30ден', 'црвен пипер + 10ден'],
            food_quantity: 1
          },
				]
			},
			{
				menu_id: '7b',
				type: MenuTypeData.filter(menuType => menuType.type === 'Пијалоци')[0],
				food: [
          {
            food_id: '7b1',
            food_name: 'Пиво',
            food_photo: '../../assets/food/drinks/corona.jpg',
            food_price: 100,
            food_ingredients: 
            [
              {name:'пиво'},
            ],
            food_type: 'Пијалоци',
            food_packaging: '',
            food_comment: '',
            food_options: ['500мл', '750мл + 20ден'],
            food_additions:['кикирики + 30ден', 'похован кромид + 70ден'],
            food_quantity: 1
          },
          {
            food_id: '7b2',
            food_name: 'Вино',
            food_photo: '../../assets/food/drinks/alexandria.jpg',
            food_price: 139,
            food_ingredients: 
            [
              {name:'вино'},
            ],
            food_type: 'Пијалоци',
            food_packaging: '',
            food_comment: '',
            food_options: ['250мл', '500мл + 59ден'],
            food_additions:['порција сирење + 100ден'],
            food_quantity: 1
          },
          {
            food_id: '7b3',
            food_name: 'Мохито',
            food_photo: '../../assets/food/drinks/mojito.jpg',
            food_price: 139,
            food_ingredients: 
            [
              {name:'мохито'},
            ],
            food_type: 'Пијалоци',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна чаша'],
            food_additions:['дупла доза рум + 70ден'],
            food_quantity: 1
          },
				]
			}
		],
    work_time: [
      {
        work_time_id: 'work71',
        day: 'Понеделник',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work72',
        day: 'Вторник',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work73',
        day: 'Среда',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work74',
        day: 'Четврток',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work75',
        day: 'Петок',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work76',
        day: 'Сабота',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work77',
        day: 'Недела',
        from_hour: '08:30',
        to_hour: '13:30',
        is_active: false
      }
    ]
  },
  {
    id: 8,
    avatar: '../../assets/food/company-logos/jadiburgerbar.jpg',
    name: 'Јади Бургер Бар',
    category: ['Италијанска кујна', 'Американска кујна'],
    company_type: 'Сендвичара',
    photos: ['../../assets/food/company-photos/jadiburgerbar/128910188_123817139509528_1100722492116261447_o.jpg','../../assets/food/company-photos/jadiburgerbar/131893585_130488692175706_6037786417530735125_o.jpg','../../assets/food/company-photos/jadiburgerbar/134077160_138330358058206_8615484747849265956_o.jpg'], 
    description: 'Единствениот ресторан кој Ви нуди се од американска кујна. Од пица до паста вклучувајќи риба и морска храна. Посебноста на јадењето нека биде Вашиот избор и задоволство. Внесете го вкусот на Италија во Вашиот дом само со еден клик кај нас.',
    preparation_time: '25-40',
    delivery: '15-20',
    open_company: false,
    menu: [
      {
        menu_id: '8a',
        type: MenuTypeData.filter(menuType => menuType.type === 'Пица')[0],
        food: [
          {
            food_id: '8а1',
            food_name: 'Капричиоза',
            food_photo: '../../assets/food/pizza/capricciosa.jpg',
            food_price: 125,
            food_ingredients: 
            [
              {name:'тесто'},
              {name:'шунка'},
              {name:'кашкавал'},
              {name:'печурки'},
            ],
            food_type: 'Пица',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција','голема порција + 75ден'],
            food_additions: ['маслинки + 20ден', 'сирење + 20ден'],
            food_quantity: 1
          },
          {
            food_id: '8а2',
            food_name: 'Индиано',
            food_photo: '../../assets/food/pizza/indiano.jpg',
            food_price: 125,
            food_ingredients: 
            [
              {name:'тесто'},
              {name:'моцарела'},
              {name:'маслинки'},
              {name:'пиперки'},
            ],
            food_type: 'Пица',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција','голема порција + 75ден'],
            food_additions: ['маслинки + 20ден', 'сирење + 20ден', 'зеленчук + 20ден'],
            food_quantity: 1
          },
          {
            food_id: '8а3',
            food_name: 'Пеперони',
            food_photo: '../../assets/food/pizza/pepperoni.jpg',
            food_price: 125,
            food_ingredients: 
            [
              {name:'тесто'},
              {name:'кулен'},
              {name:'кашкавал'},
            ],
            food_type: 'Пица',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција','голема порција + 75ден'],
            food_additions:['маслинки + 20ден', 'сирење + 20ден', 'зеленчук + 20ден'],
            food_quantity: 1
          },
        ]
      },
      {
        menu_id: '8b',
        type: MenuTypeData.filter(menuType => menuType.type === 'Бургери')[0],
        food: [
          {
            food_id: '8b1',
            food_name: 'Хамбургер',
            food_photo: '../../assets/food/burgers/burger.jpg',
            food_price: 125,
            food_ingredients: 
            [
              {name:'лепче'},
              {name:'плескавица'},
              {name:'помфрит'},
            ],
            food_type: 'Бургери',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција'],
            food_additions: ['салата + 20ден', 'сос + 20ден'],
            food_quantity: 1
          },
          {
            food_id: '8b2',
            food_name: 'Чедар бургер',
            food_photo: '../../assets/food/burgers/Smashburger-recipe-120219.jpg',
            food_price: 139,
            food_ingredients: 
            [
              {name:'лепче'},
              {name:'плескавица'},
              {name:'чедар'},
              {name:'к.краставички'},
              {name:'сос'},
            ],
            food_type: 'Бургери',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција'],
            food_additions: ['салата + 20ден', 'сос + 20ден', 'чедар + 30ден'],
            food_quantity: 1
          },
          {
            food_id: '8b3',
            food_name: 'Бејкон бургер',
            food_photo: '../../assets/food/burgers/RedDot_Burger.jpg',
            food_price: 139,
            food_ingredients: 
            [
              {name:'лепче'},
              {name:'плескавица'},
              {name:'крцкава сланина'},
              {name:'марула'},
              {name:'сос'},
            ],
            food_type: 'Бургери',
            food_packaging: '',
            food_comment: '',
            food_options: ['средна порција'],
            food_additions:['салата + 20ден', 'сос + 20ден', 'сланина + 30ден'],
            food_quantity: 1
          },
        ]
      }
    ],
    work_time: [
      {
        work_time_id: 'work81',
        day: 'Понеделник',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work82',
        day: 'Вторник',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work83',
        day: 'Среда',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work84',
        day: 'Четврток',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work85',
        day: 'Петок',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work86',
        day: 'Сабота',
        from_hour: '08:30',
        to_hour: '23:30',
        is_active: true
      },
      {
        work_time_id: 'work87',
        day: 'Недела',
        from_hour: '08:30',
        to_hour: '13:30',
        is_active: false
      }
    ]
  },
]