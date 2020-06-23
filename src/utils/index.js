export const getFormValues = (form) => {
    const result = {};
    for (let input of form.elements) {
        if (input.tagName === "INPUT") {
            result[input.name] = input.value;
        }
    }
    return result
};