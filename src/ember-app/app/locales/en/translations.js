import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'I s s6',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s6',
          title: 'I s s6'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-i-s-s6-пользователь-l': IISISS6ПользовательLForm,
    'i-i-s-i-s-s6-рабочее-место-l': IISISS6РабочееМестоLForm,
    'i-i-s-i-s-s6-пользователь-e': IISISS6ПользовательEForm,
    'i-i-s-i-s-s6-рабочее-место-e': IISISS6РабочееМестоEForm
  },

});

export default translations;
