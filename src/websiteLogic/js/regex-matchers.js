/**
 * This file contains some functions that creates regex to match different XML elements
 * such as simple tags, tags with one or multiple attributes, and closing tags.
 *
 * For now it doesnt match the content inside the tags, but that could be constructed
 * using the regex that we have until now plus some more to parse the content inside tags
 *
 * TODO: Integrate this module/file with the processXML module/file
 *
 */
const xmlFileText = `
        <head attr="foo" att2="bartaz" foo-bar-3="raztastas">El artista</head> 
`

// Match tag with no attributes
function getSimpleTagRegex(tagName) {
    try {
        const matchedTag = `<\/?${tagName}>`
        return new RegExp(matchedTag, 'g')
    } catch (e) {
        throw new Error('Invalid regex!')
    }
}

// Generates regex that matches any attribute in the form 'key="value"'
function getAttributesRegex() {
    try {
        const attributeKey = '(\\w-?)+='  // Attribute (including equals)
        const attributeValue = '\"([^"]*)\"'
        const attribute = attributeKey + attributeValue

        // An attribute 0 or more times (incluiding spaces between attributes)
        const attributes = `(${attribute} ?)(${attribute} ?)*`
        return new RegExp(attributes, 'g')
    } catch (e) {
        throw new Error('Invalid regex!')
    }
}

function getTagWithAttributesRegex(tagName) {
    try {
        const attributeKey = '(\\w-?)+='  // Attribute (including equals)
        const attributeValue = '\"([^"]*)\"'
        const attribute = attributeKey + attributeValue

        // An attribute 0 or more times (incluiding initial space)
        const attributes = `(${attribute} ?)(${attribute} ?)*`

        const matchedTag = `<\/?${tagName}( ?${attributes})*>`

        return new RegExp(matchedTag, 'g')
    } catch (e) {
        throw new Error('Invalid regex!')
    }
}


// Regex matches
const documentTag = getSimpleTagRegex('document')
const pTag = getTagWithAttributesRegex('p')
const attributes = getAttributesRegex()
const tagWithAttributes = getTagWithAttributesRegex('head')


// Tests
//console.log( xmlFileText.match(attributes) )
console.log(xmlFileText.match(tagWithAttributes))
//console.log( xmlFileText.match(documentTag) )
//console.log( xmlFileText.match(pTag) )

