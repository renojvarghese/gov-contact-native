export const fetchOfficialData = url => {
    fetch(url)
        .then(response => response.json())
        .then(response => ({
            type: "NEW_STATE",
            response: response
        }));
};
