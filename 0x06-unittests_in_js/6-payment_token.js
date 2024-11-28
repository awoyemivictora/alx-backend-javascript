function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ data: 'Successful response from the API' });
        } else {
            // Do nothing (i.e., the promise remains pending)
        }
    });
}

module.exports = getPaymentTokenFromAPI;
