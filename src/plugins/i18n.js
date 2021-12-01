import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export const messages = {
  ru: {
    HEAD_calculator: 'Калькулятор',
    HEAD_weather: 'Погода',
    HEAD_todo: 'Список дел',
    HEAD_about: 'Обо мне',

    TITLE_calculator: 'Дмитрий Халин | Калькулятор',
    TITLE_weather: 'Дмитрий Халин | Погода',
    TITLE_todo: 'Дмитрий Халин | Список дел',
    TITLE_about: 'Дмитрий Халин | Обо мне',

    CALC_whatIfThisIsMySalary: 'Если бы это была моя зарплата (в рублях):',
    CALC_poorSalary: 'Если это моя будущая зарплата, то попробуйте, пожалуйста, ещё раз 🙂;',
    CALC_lowSalary: 'Близко к моей желаемой зарплате, но хочется большего 😀',
    CALC_okSalary: 'Да, такая зарплата меня устроит (на начальном этапе) 😉',
    CALC_highSalary: 'Если это моя будущая зарплата, то считайте мы договорились 😉😉😉',
    CALC_superSalary: 'Пока можно начальство такими числами не пугать 😅 (ключевое слово "пока")',

    WEATHER_dialogHead: 'Это не просто погодный виджет!',
    WEATHER_dialogBody: 'Да, погоду здесь узнать можно, но так же можно узнать в каких городах я уже побывал!',
    WEATHER_dialogOkButton: 'Понятно',
    WEATHER_snackboxCloseButton: 'Закрыть',
    WEATHER_wind: 'Ветер',
    WEATHER_addCity: 'Добавить город',
    WEATHER_cityNamePlaceholder: 'Название города',
    WEATHER_cityAddButton: 'Добавить',
    WEATHER_cityCancelButton: 'Отмена',
    WEATHER_footer: 'Информация о погоде -',
    WEATHER_deleteButton: 'Удалить',

    TODO_addButton: 'Добавить',
    TODO_addHead: 'Добавление события',
    TODO_namePlaceholder: 'Наименование',
    TODO_descriptionPlaceholder: 'Описание',
    TODO_priorityPlaceholder: 'Приоритет',
    TODO_priorityNormal: 'Обычный',
    TODO_priorityHigh: 'Высокий',
    TODO_prioritySuper: 'Очень высокий',

    ABOUT_dialogHead: 'Добро пожаловать',
    ABOUT_dialogBody:
      'Меня зовут Дмитрий и я очень рад, что Вы зашли на мою страницу! Пройдите по всем вкладкам и Вы узнаете обо мне то, что я хочу Вам о себе рассказать!',
    ABOUT_dialogButton: 'Хорошо',
    ABOUT_mainInfoHead: 'Добрый',
    ABOUT_mainInfoBody: 'Меня зовут Дмитрий. Мне 26 лет. Я web-разработчик. Мне нравится создавать удобные интерфейсы и наполнять приложения логикой.',
    ABOUT_hobbiesHead: 'Мои хобби',
    ABOUT_hobbiesBodyPCGames: 'Компьютерные игры',
    ABOUT_hobbiesBodyOther: ', коллекционирование старых мобильных телефонов, приготовление еды, немного играю на гитаре.',
    ABOUT_achievementsHead: 'Мои достижения',
    ABOUT_achievementsBody:
      'За неполные три года работы в качестве Frontend-разработчика я сделал Web-приложение для управления охранными системами, доступное как на десктопе, так и на мобильных устройствах. При разработке использовались такие технологии как HTML, CSS, JS вместе с jQuery, бэкенд  был на C# (ASP.NET). Также одной из моих обязанностей была разработка и поддержка приложения-оболочки для этой системы управления на Android (Xamarin) с дополнительным функционалом.',
    ABOUT_whyChangeHead: 'Чего я хочу',
    ABOUT_whyChangeBody:
      'До того как я пришел в компанию, в которой работаю сейчас, Web-разработкой я не занимался вообще. Знания о JavaScript и jQuery пришлось добывать "в бою", поэтому есть ощущения что в них могут быть пробелы. Поэтому в первую очередь я хочу актуализировать свои навыки. Есть ощущение, что вокруг все уже перемещаются на летающих машинах, а я всё ещё езжу на повозке, запряженной лошадьми. Для их восполнения я хочу попасть в профессиональную команду, в которой я смогу выровнять свои знания и получить новые. Также мне хочется видеть впереди перспективы - и профессиональные и финансовые. Безусловно, я понимаю, что для этого нужно усердно и качественно работать, к чему я готов и чего я хочу.',
    ABOUT_skillsHead: 'Что я уже умею',
    ABOUT_skillsBody:
      '<v-card-text>HTML, CSS, JavaScript, jQuery, Vue, SQL, PHP, C#</v-card-text><v-card-text>R, Статистический анализ данных</v-card-text><v-card-text>Photoshop, Sony Vegas (MAGIX Vegas) </v-card-text>',
    ABOUT_goalsHead: 'Чему хочу научиться',
    ABOUT_goalsBody: 'React',
    ABOUT_footerContact: 'Свяжитесь со мной!',
    ABOUT_footerIcons1: 'Изображения сделаны ',
    ABOUT_footerIcons2: ' из '
  },
  en: {
    HEAD_calculator: 'Calculator',
    HEAD_weather: 'Weather',
    HEAD_todo: 'ToDo',
    HEAD_about: 'About me',

    TITLE_calculator: 'Dmitriy Khalin | Calculator',
    TITLE_weather: 'Dmitriy Khalin | Weather',
    TITLE_todo: 'Dmitriy Khalin | ToDo',
    TITLE_about: 'Dmitriy Khalin | About me',

    CALC_whatIfThisIsMySalary: 'What if this was my salary (in rubles)?',
    CALC_poorSalary: "That's couldn't be my salary. Please try again. 🙂",
    CALC_lowSalary: 'Closer to my desired salary, but I want more. 😀',
    CALC_okSalary: "Yes, that's a good salary for beginning! 😉",
    CALC_highSalary: 'Consider that we have agreed 😉🤝😊',
    CALC_superSalary: "Wow! Don't frighten your boss with this numbers! 😅 For now...",

    WEATHER_dialogHead: 'This is not just a weather widget!',
    WEATHER_dialogBody: "Yeah, you can check the weather here, but also you can see in which cities I've already been.",
    WEATHER_dialogOkButton: 'Got it!',
    WEATHER_snackboxCloseButton: 'Close',
    WEATHER_wind: 'wind',
    WEATHER_addCity: 'Add city',
    WEATHER_cityNamePlaceholder: 'City name',
    WEATHER_cityAddButton: 'Add',
    WEATHER_cityCancelButton: 'Cancel',
    WEATHER_footer: 'Weather info from',
    WEATHER_deleteButton: 'Delete',

    TODO_addButton: 'Add',
    TODO_addHead: 'Adding event',
    TODO_namePlaceholder: 'Name',
    TODO_descriptionPlaceholder: 'Description',
    TODO_priorityPlaceholder: 'Priority',
    TODO_priorityNormal: 'Normal',
    TODO_priorityHigh: 'High',
    TODO_prioritySuper: 'Super high',

    ABOUT_dialogHead: 'Welcome!',
    ABOUT_dialogBody: "I'm Dmitriy and glad to see you here! Go through all the tabs to know something about me!",
    ABOUT_dialogButton: 'Ok',
    ABOUT_mainInfoHead: 'Good ',
    ABOUT_mainInfoBody: "My name is Dmitriy. I'm 26. I'm a web-developer. I like to create user-friendly interfaces and fill applications with logic. ",
    ABOUT_hobbiesHead: 'My hobbies',
    ABOUT_hobbiesBodyPCGames: 'Computer games',
    ABOUT_hobbiesBodyOther: ', cooking, collecting old cellphones, playing guitar a little',
    ABOUT_achievementsHead: 'My achievements',
    ABOUT_achievementsBody:
      'During my incomplete three years of work as a Frontend developer I made a web-application for managing security systems, available both on desktop and mobile devices. During development we used such technologies as HTML, CSS, JS with jQuery, backend was on C# (ASP.NET). Also one of my responsibilities was to develop and maintain a wrapper application for the control system mentioned above on Android (Xamarin) with additional functionality.',
    ABOUT_whyChangeHead: 'My priorities',
    ABOUT_whyChangeBody:
      'Before joining the company where I work now, I was not involved in web-development at all. The knowledge about JavaScript and jQuery had to be gained in practice, so there is a feeling that there may be gaps in them.    Therefore, first of all, I want to update my skills. There is a feeling that everyone is already moving around in flying cars, and I still ride a horse-drawn carriage.    To restore knowledge gaps, I want to get into a professional team in which I can actualize my knowledge and get new skills. I also want prospects - both professional and financial.    I understand that this requires hard work and high-quality result from me. I am ready for this and I want it.',
    ABOUT_skillsHead: 'My skills',
    ABOUT_skillsBody: '',
    ABOUT_goalsHead: 'My goals',
    ABOUT_goalsBody: '',
    ABOUT_footerContact: 'Contact me!',
    ABOUT_footerIcons1: 'Icons made by ',
    ABOUT_footerIcons2: ' from '
  }
};

const i18n = new VueI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages
});
export default i18n;
