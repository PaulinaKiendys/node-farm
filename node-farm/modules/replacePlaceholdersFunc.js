// We can create our own modules if we want to reuse a function in different files

// 1. Create the function

// 2. Export it

// 2.1 We are exporting it as an anonymous function
module.exports = (htmlTemplate, currentElement) => {
    let replacedPlaceholder = htmlTemplate.replace(/{%PRODUCTNAME%}/g, currentElement.productName);
    replacedPlaceholder = replacedPlaceholder.replace(/{%IMAGE%}/g, currentElement.image);
    replacedPlaceholder = replacedPlaceholder.replace(/{%PRICE%}/g, currentElement.price);
    replacedPlaceholder = replacedPlaceholder.replace(/{%FROM%}/g, currentElement.from);
    replacedPlaceholder = replacedPlaceholder.replace(/{%NUTRIENTS%}/g, currentElement.nutrients);
    replacedPlaceholder = replacedPlaceholder.replace(/{%QUANTITY%}/g, currentElement.quantity);
    replacedPlaceholder = replacedPlaceholder.replace(/{%DESCRIPTION%}/g, currentElement.description);
    replacedPlaceholder = replacedPlaceholder.replace(/{%ID%}/g, currentElement.id);

    if (!product.organic) {
        replacedPlaceholder = replacedPlaceholder.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
        return replacedPlaceholder;
    }
}

// 3. Import the function (in a different file)