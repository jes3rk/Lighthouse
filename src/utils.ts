export const environ = (varName: string, defaultValue: string = null): string => {
    if (typeof varName !== "string") throw TypeError('Invalid type for varName. Should be string');
    let response: string = process.env[varName];
    if (response === undefined) {
        if (defaultValue) {
            response = defaultValue;
        } else {
            throw ReferenceError('Environmental Variable does not exist and no valid default value passed')
        }
    }
    return response;
}