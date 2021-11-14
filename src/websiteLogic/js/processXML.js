const xmlText = 'The XML text from file should go here!'

function readTextFile(filePath) {
    // Read a text file here and return its content as a string
    //const file = ... // TODO: Read the file HERE

    return '<document>The content of the file as a string</document>'
}

// Strips all XML tags, leaving only text (no atributes, no tags, plain text only)
// xmlText is of type STRING
function stripXMLTags(xmlText) {
    const strippedText = xmlText.replace(/<\/?.+?>/ig, '')
    return strippedText.trim()
}

function getTagsObject(fileText) {
    // TODO: Complete this function, it should return an object with all XML Tags


    // FIXME: Delete this, replace it with the real object 
    // (which should be got from the 'fileText') using an XML Parser or REGEX
    const dummyObjectSample = {
        "document": {
            "column1": {
                "head": "The Artist",
                "p": [
                    {
                        "hi": {
                            "_rend": "italic",
                            "__text": "The Pleasure that Abideth for a Moment"
                        },
                        "__text": "One evening there came into his soul the desire to fashion an image of \n. And he went forth into the world to look for bronze. For he could think only in bronze."
                    },
                    {
                        "hi": {
                            "_rend": "italic",
                            "__text": "The Sorrow that Endureth for Ever"
                        },
                        "_rend": "indent-first",
                        "__text": "But all the bronze of the whole world had disappeared, nor anywhere in the whole world was there any bronze to be found, save only the bronze of the image of \n."
                    },
                    {
                        "hi": [
                            {
                                "_rend": "italic",
                                "__text": "The Sorrow that Endureth for Ever"
                            },
                            {
                                "_rend": "italic",
                                "__text": "The Pleasure that Abideth for a Moment"
                            }
                        ],
                    }
                ]
            },
        }
    }

    return dummyObjectSample
}

// @Description:
// Process an XML file, returns an object that is easy to work withfor rendering 
// the Markup of the file (with HTML, or equivalent markup language).
//
// It should have the following things (clearly separated, easily accessible)
//
// - The original text (A.K.A 'fileText' read from the XML file)
// - The stripped text (text with no tags, just plain text)
// - The object containing XML Tags
//
// @Arguments:
// filePath: The path of the file to be read (relative to the directory where 
// this file is located)
function generateRenderingObject(filePath) {
    // Read the file using the filePath
    const fileText = readTextFile(filePath)

    // process the file
    const strippedText = stripXMLTags(fileText)
    const xmlTagsObject = getTagsObject(fileText)

    // Return the object to be used for rendering the webpage
    return {
        originalText: fileText,
        strippedText,
        xmlTagsObject
    }
}

// TODO: Delete this console.log and actually start using this module ;D
console.log(generateRenderingObject('./dummy-path-example.xml'))
