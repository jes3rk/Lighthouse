/**
 * Wrapper function to source environment variables
 * @param varName Name of the variable to find
 * @param defaultValue Default value if variable does not exist
 * @throws {TypeError} Non-string passed to function
 * @throws {ReferenceError} Variable does not exist and no default passed
 */
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