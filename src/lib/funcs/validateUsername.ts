export const validateUsername = (value: string) => {
    let error;
    if (/[A-Z]/g.test(value)) {
        error = 'Cant use big letters'
        return error
    }
}