const trueAPI = true;
const falseAPI = false;

function getFullResponseFromAPI(success=Boolean) {
    return new Promise((resolve, reject) => {
        if (trueAPI) {
            resolve({
                status: 200,
                body: 'Success'
            })
        } else if (falseAPI) {
            reject('The fake API is not working currently')
        }
    })
};

getFullResponseFromAPI().then((message) => {
    console.log(message)
}).catch((error) => {
    console.log(error.message)
});

