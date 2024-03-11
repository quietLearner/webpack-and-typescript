export const formData = (form: HTMLFormElement) => {
    const inputs = form.querySelectorAll('input');

    // tuple is array
    // { [prop: string]: string } is object
    let values: { [prop: string]: string } = {};

    inputs.forEach(input => {
        console.log(input)
        values[input.id] = input.value;
    });
    return values;
};