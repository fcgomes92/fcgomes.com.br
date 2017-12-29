import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
    // we init with resources
    resources: {
        'en': {
            translations: {
                languageEN: '(EN) English',
                languagePTBR: '(PT-BR) Portuguese',

                bannerText: 'Welcome!',

                about: 'about',
                contact: 'contact',
                blogPosts: 'blog posts',

                aboutTitle: 'About: Dev Talk',
                aboutTitleLink: 'https://www.youtube.com/watch?v=2tdCu8uXQ7k',

                aboutMusicUrl: 'https://www.youtube.com/watch?v=gnFuq-raWio',
                aboutText0: "This is my ({{- twitterLink}}) personal website where you can find my {{- contactLink}} info. You can also check my {{- blogPostsLink}}.",
                aboutText1: "The whole site is built using {{- reactLink}}, {{- reactToolboxLink}} and {{- reduxLink}}.",
                aboutText2: "Hope you enjoy it. (:",

                contactSectionTitle: 'Contact: Melody Calling',
                contactSectionTitleLink: 'https://www.youtube.com/watch?v=iJPqJwdCXpw',

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
                redux: 'Redux',

                errorLoadingBlogPostsTitle: 'Ops!',
                errorLoadingBlogPosts: 'It seems we had a problem loading the latest blog posts.',
                noBlogPostsYetTitle: 'No blog posts found!',
                noBlogPostsYet: 'I\'m still writing some blog posts. Soon we\'ll have some here!',

                moreBlogPosts: 'More Blog Posts',

                version: 'Version',
            },
        },
        'pt-BR': {
            translations: {
                languageEN: '(EN) Inglês',
                languagePTBR: '(PT-BR) Português',

                bannerText: 'Bem-vindo!',

                about: 'sobre',
                contact: 'contato',
                blogPosts: 'posts do blog',

                aboutTitle: 'Sobre: Dev Talk',
                aboutTitleLink: 'https://www.youtube.com/watch?v=2tdCu8uXQ7k',

                aboutMusicUrl: 'https://www.youtube.com/watch?v=gnFuq-raWio',
                aboutText0: "Este é meu ({{- twitterLink}}) site pessoal, onde você pode encontrar minhas informações de {{- contactLink}}. Você também pode ver aqui os {{- blogPostsLink}}.",
                aboutText1: "O site todo é feito utilizando {{- reactLink}}, {{- reactToolboxLink}} e {{- reduxLink}}.",
                aboutText2: "Espero que você goste. (:",

                contactSectionTitle: 'Contato: Melody Calling',
                contactSectionTitleLink: '',

                twitterUsername: '@fcgomes92',
                twitterUrl: '//twitter.com/fcgomes92',
                githubUsername: 'fcgomes92',
                githubUrl: '//github.com/fcgomes92',
                emailAddress: 'fcgomes.92@gmail.com',
                emailUrl: 'mailto:fcgomes.92@gmail.com',

                loading: 'Carregando',
                blogSectionTitle: 'Posts do Blog: Cooking Up Something Good',
                blogSectionTitleLink: 'https://www.youtube.com/watch?v=rGh97zsBfWk',

                readMore: 'Leia Mais',

                react: 'React',
                reactToolbox: 'React Toolbox',
                redux: 'Redux',

                errorLoadingBlogPostsTitle: 'Ops!',
                errorLoadingBlogPosts: 'Parece que houve algum problema na hora de carregar os artigos.',
                noBlogPostsYetTitle: 'Nenhum artigo encontrado.',
                noBlogPostsYet: 'Eu ainda estou escrevendo os artigos. Em breve teremos alguns.',

                moreBlogPosts: 'Ver mais postagens',

                version: 'Versão',
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
