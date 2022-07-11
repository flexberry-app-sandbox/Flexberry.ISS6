import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISISS6ПользовательLForm from './forms/i-i-s-i-s-s6-пользователь-l';
import IISISS6РабочееМестоLForm from './forms/i-i-s-i-s-s6-рабочее-место-l';
import IISISS6ПользовательEForm from './forms/i-i-s-i-s-s6-пользователь-e';
import IISISS6РабочееМестоEForm from './forms/i-i-s-i-s-s6-рабочее-место-e';
import IISISS6ОборудованиеModel from './models/i-i-s-i-s-s6-оборудование';
import IISISS6ПользовательModel from './models/i-i-s-i-s-s6-пользователь';
import IISISS6РабочееМестоModel from './models/i-i-s-i-s-s6-рабочее-место';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-i-s-s6-оборудование': IISISS6ОборудованиеModel,
    'i-i-s-i-s-s6-пользователь': IISISS6ПользовательModel,
    'i-i-s-i-s-s6-рабочее-место': IISISS6РабочееМестоModel
  },

  'application-name': 'I s s6',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'I s s6',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s6',
          title: 'I s s6'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'i-s-s6': {
          caption: 'ISS6',
          title: 'ISS6',
          'i-i-s-i-s-s6-пользователь-l': {
            caption: 'Пользователь',
            title: ''
          },
          'i-i-s-i-s-s6-рабочее-место-l': {
            caption: 'Рабочее место',
            title: ''
          }
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'i-i-s-i-s-s6-пользователь-l': {
            caption: 'ПользовательL',
            title: 'Пользователь'
          },
          'i-i-s-i-s-s6-рабочее-место-l': {
            caption: 'РабочееМестоL',
            title: 'Рабочее место'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-i-s-s6-пользователь-l': IISISS6ПользовательLForm,
    'i-i-s-i-s-s6-рабочее-место-l': IISISS6РабочееМестоLForm,
    'i-i-s-i-s-s6-пользователь-e': IISISS6ПользовательEForm,
    'i-i-s-i-s-s6-рабочее-место-e': IISISS6РабочееМестоEForm
  },

});

export default translations;
