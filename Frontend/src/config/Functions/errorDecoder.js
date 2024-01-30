const errorDecoder = (responseData) => {
    const values = Object.values(responseData);
    for (const error of values) {
        alert(error.toString());
    }
    return values[0];
};

export default errorDecoder;
