/**
 * Created by gomes on 23/02/17.
 */
let _stringsInstance = null;

// singleton strings
class _Strings {
    strings = {
        app: {
            readMoreButton: 'Read More',
            previous: 'Previous',
            next: 'Next',
            welcomeTitle: 'Welcome!',
        }
    };

    constructor() {
        if (!_stringsInstance) {
            _stringsInstance = this;
        }
        return _stringsInstance;
    }

    setStrings(new_strings) {
        this.strings = new_strings;
    }
}

const s = new _Strings();

export default s;