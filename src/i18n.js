import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
    // we init with resources
    resources: {
        'en': {
            translations: {
                bannerText: 'Welcome!',

                about: 'about',
                portfolio: 'portfolio',
                contact: 'contact',

                aboutTitle: 'About: Paper Developer',
                aboutTitleLink: 'https://www.youtube.com/watch?v=jFwB5ayV0vQ',

                aboutMusicUrl: 'https://www.youtube.com/watch?v=gnFuq-raWio',
                aboutText2: "This is my ({{twitterLink}}) personal website where you can find things like my {{portfolioLink}} and my {{contactsLink}}. The whole site is built using {{reactLink}} and {{reactToolboxLink}}. Hope you enjoy it. (:",

                contactSectionTitle: 'Contact',

                portfolioSectionTitle: 'Portfolio: Less Talk More Rokk',
                portfolioSectionTitleLink: 'https://www.youtube.com/watch?v=qV9dcSU3VcM',

                twitterUsername: '@fcgomes92',
                twitterUrl: '//twitter.com/fcgomes92',
                githubUsername: 'fcgomes92',
                githubUrl: '//github.com/fcgomes92',
                emailAddress: 'fcgomes.92@gmail.com',
                emailUrl: 'mailto:fcgomes.92@gmail.com',
            },
        },
    },
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ','
    },

    react: {
        wait: true
    }
});

export default i18n;
