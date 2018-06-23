export const addOfficialData = response => ({
    type: "NEW_STATE",
    response: response
});

export const fetchOfficialData = (dispatch, url) => {
    return fetch(url)
        .then(response => response.json())
        .then(response => dispatch(addOfficialData(response)));
};
