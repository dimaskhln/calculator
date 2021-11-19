import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  ru: {
    HEAD_calculator: 'Калькулятор',
    HEAD_weather: 'Погода',
    HEAD_todo: 'Список дел',
    HEAD_about: 'Обо мне',

    CALC_poorSalary: 'Если это моя будущая зарплата, то попробуйте, пожалуйста, ещё раз',
    CALC_lowSalary: 'Близко к моей желаемой зарплате, но хочется большего',
    CALC_okSalary: 'Да, такая зарплата меня устроит (на начальном этапе)',
    CALC_highSalary: 'Если это моя будущая зарплата, то считайте мы договорились',
    CALC_superSalary: 'Пока можно начальство такими числами не пугать (ключевое слово "пока")',

    WEATHER_dialogHead: 'Это не просто погодный виджет!',
    WEATHER_dialogBody: 'Да, погоду здесь узнать можно, но так же можно узнать в каких городах я уже побывал!',
    WEATHER_wind: 'Ветер',
    WEATHER_addCity: 'Добавить город',
    WEATHER_cityNamePlaceholder: 'Название города',
    WEATHER_cityAddButton: 'Добавить',
    WEATHER_cityCancelButton: 'Отмена',
    WEATHER_footer: 'Информация о погоде',
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
      'Меня зовут Дмитрий и я очень рад, что Вы зашли на мою страницу! <br />Пройдите по всем вкладкам и Вы узнаете обо мне то, что я хочу Вам о себе рассказать!',
    ABOUT_mainInfoHead: 'Добрый',
    ABOUT_mainInfoBody:
      'Меня зовут Дмитрий.<br />Мне {{ age }} {{ ageWord }}. <br />Я web-разработчик. <br /> Мне нравится создавать удобные интерфейсы и наполнять приложения логикой.',
    ABOUT_hobbiesHead: 'Мои хобби',
    ABOUT_hobbiesBody: '<a href="https://steamcommunity.com/id/dimastip" target="_blank">Компьютерные игры</a>, гитара, коллекционирование старых мобильных телефонов',
    ABOUT_achievementsHead: 'Мои достижения',
    ABOUT_achievementsBody: 'За неполные три года работы в качестве Frontend-разработчика я !!!!!№!№" Web-приложение для управления охранными системами, доступное как на десктопе, так и на мобильных устройствах. При разработке использовались №%№;№;;№" HTML+CSS+JS, jQuery, бэкенд на C# (ASP.NET), MSSQL, Также одной из моих обязанностей была разработка и поддержка приложения-оболочки для этой системы управления на Android (Xamarin) с дополнительным функционалом.',
    ABOUT_whyChangeHead: 'Чего я хочу',
    ABOUT_whyChangeBody: 'До того как я пришел в компанию, в которой работаю сейчас, Web-разработкой я не занимался вообще. Знания о JavaScript и jQuery пришлось добывать "в бою", поэтому есть ощущения что в них могут быть пробелы. Поэтому в первую очередь я хочу актуализировать свои навыки. Есть ощущение, что вокруг все уже перемещаются на летающих машинах, а я всё ещё езжу на повозке, запряженной лошадьми. Для их восполнения я хочу попасть в профессиональную команду, в которой я смогу выровнять свои знания и получить новые. Также мне хочется видеть впереди перспективы - и профессиональные и финансовые. Безусловно, я понимаю, что для этого нужно усердно и качественно работать, к чему я готов и чего я хочу.',
    ABOUT_skillsHead: 'Что я уже умею',
    ABOUT_skillsBody: '<v-card-text>HTML, CSS, JavaScript, jQuery, Vue, SQL, PHP, C#</v-card-text><v-card-text>R, Статистический анализ данных</v-card-text><v-card-text>Photoshop, Sony Vegas (MAGIX Vegas) </v-card-text>',
    ABOUT_goalsHead: 'Чему хочу научиться',
    ABOUT_goalsBody: 'React',
    ABOUT_footerContact: 'Свяжитесь со мной:',
    ABOUT_footerIcons: 'Изображения сделаны <a href="https://www.freepik.com" title="Freepik">Freepik</a> из <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>'
  },
  en: {
    HEAD_calculator: '',
    HEAD_weather: '',
    HEAD_todo: '',
    HEAD_about: '',

    CALC_lowSalary: '',
    CALC_okSalary: '',
    CALC_highSalary: '',
    CALC_superSalary: '',

    WEATHER_dialogHead: '',
    WEATHER_dialogBody: '',
    WEATHER_wind: '',
    WEATHER_addCity: '',
    WEATHER_cityNamePlaceholder: '',
    WEATHER_cityAddButton: '',
    WEATHER_cityCancelButton: '',
    WEATHER_footer: '',
    WEATHER_deleteButton: '',

    TODO_addHead: '',
    TODO_namePlaceholder: '',
    TODO_descriptionPlaceholder: '',
    TODO_priorityPlaceholder: '',
    TODO_priorityNormal: '',
    TODO_priorityHigh: '',
    TODO_prioritySuper: '',

    ABOUT_dialogHead: '',
    ABOUT_dialogBody: '',
    ABOUT_mainInfoHead: '',
    ABOUT_mainInfoBody: '',
    ABOUT_hobbiesHead: '',
    ABOUT_hobbiesBody: '',
    ABOUT_achievementsHead: '',
    ABOUT_achievementsBody: '',
    ABOUT_whyChangeHead: '',
    ABOUT_whyChangeBody: '',
    ABOUT_skillsHead: '',
    ABOUT_skillsBody: '',
    ABOUT_goalsHead: '',
    ABOUT_goalsBody: '',
    ABOUT_footerContact: '',
    ABOUT_footerIcons: 'Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from<a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>'
  }
};

const i18n = new VueI18n({
  locale: 'ru', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages // set locale messages
});
