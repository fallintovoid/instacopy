export const validateUsername = (value: string) => {
    let error;
    if (/[A-Z]/g.test(value)) {
        error = 'Cant use big letters'
        return error
    }
    if (!/^\S+$/g.test(value)) {
        error = 'Space is not allowed'
        return error
    }
}