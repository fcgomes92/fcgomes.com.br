// ref.: https://stackoverflow.com/questions/8648892/convert-url-parameters-to-a-javascript-object
export const urlSearchToObject = (searchString) => {
    let search = searchString.substring(1);
    if (search) {
        return JSON.parse(`{"${search.replace(/&/g, '","').replace(/=/g, '":"')}"}`,
            (key, value) => {
                return key === "" ? value : decodeURIComponent(value)
            });
    }
    return {}
};