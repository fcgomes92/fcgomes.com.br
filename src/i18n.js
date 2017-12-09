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
                blogPosts: 'blog posts',

                aboutTitle: 'About: Dev Talk',
                aboutTitleLink: 'https://www.youtube.com/watch?v=2tdCu8uXQ7k',

                aboutMusicUrl: 'https://www.youtube.com/watch?v=gnFuq-raWio',
                aboutText0: "This is my ({{- twitterLink}}) personal website where you can find things like my {{- portfolioLink}} and my {{- contactLink}} info. You can also check my {{- blogPostsLink}}.",
                aboutText1: "The whole site is built using {{- reactLink}} and {{- reactToolboxLink}}.",
                aboutText2: "Hope you enjoy it. (:",

                contactSectionTitle: 'Contact: Melody Calling',
                contactSectionTitleLink: 'https://www.youtube.com/watch?v=iJPqJwdCXpw',

                portfolioSectionTitle: 'Portfolio: Less Talk More Rokk',
                portfolioSectionTitleLink: 'https://www.youtube.com/watch?v=qV9dcSU3VcM',

                twitterUsername: '@fcgomes92',
                twitterUrl: '//twitter.com/fcgomes92',
                githubUsername: 'fcgomes92',
                githubUrl: '//github.com/fcgomes92',
                emailAddress: 'fcgomes.92@gmail.com',
                emailUrl: 'mailto:fcgomes.92@gmail.com',

                loading: 'Loading',
                blogSectionTitle: 'Blog Posts: Cooking Up Something Good',
                blogSectionTitleLink: 'https://www.youtube.com/watch?v=rGh97zsBfWk',

                readMore: 'Read More',

                react: 'React',
                reactToolbox: 'React Toolbox',

                errorLoadingBlogPostsTitle: 'Ops!',
                errorLoadingBlogPosts: 'It seems we had a problem loading the latest blog posts.',
                errorLoadingPortfolioPostsTitle: 'Ops!',
                errorLoadingPortfolioPosts: 'It seems we had a problem loading the latest portfolio posts.',

                version: 'Version',
            },
        },
        'pt-BR': {
            translations: {
                bannerText: 'Welcome!',

                about: 'about',
                portfolio: 'portfolio',
                contact: 'contact',
                blogPosts: 'blog posts',

                aboutTitle: 'About: Dev Talk',
                aboutTitleLink: 'https://www.youtube.com/watch?v=2tdCu8uXQ7k',

                aboutMusicUrl: 'https://www.youtube.com/watch?v=gnFuq-raWio',
                aboutText0: "This is my ({{- twitterLink}}) personal website where you can find things like my {{- portfolioLink}} and my {{- contactLink}} info. You can also check my {{- blogPostsLink}}.",
                aboutText1: "The whole site is built using {{- reactLink}} and {{- reactToolboxLink}}.",
                aboutText2: "Hope you enjoy it. (:",

                contactSectionTitle: 'Contact: Melody Calling',
                contactSectionTitleLink: '',

                portfolioSectionTitle: 'Portfolio: Less Talk More Rokk',
                portfolioSectionTitleLink: 'https://www.youtube.com/watch?v=qV9dcSU3VcM',

                twitterUsername: '@fcgomes92',
                twitterUrl: '//twitter.com/fcgomes92',
                githubUsername: 'fcgomes92',
                githubUrl: '//github.com/fcgomes92',
                emailAddress: 'fcgomes.92@gmail.com',
                emailUrl: 'mailto:fcgomes.92@gmail.com',

                loading: 'Loading',
                blogSectionTitle: 'Blog Posts: Cooking Up Something Good',
                blogSectionTitleLink: 'https://www.youtube.com/watch?v=rGh97zsBfWk',

                readMore: 'Read More',

                react: 'React',
                reactToolbox: 'React Toolbox',

                errorLoadingBlogPostsTitle: 'Ops!',
                errorLoadingBlogPosts: 'It seems we had a problem loading the latest blog posts.',

                version: 'Version',
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
