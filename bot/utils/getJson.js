const getJson = async (url) => await fetch(url, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
}).then(response => response.json());

export default getJson;
