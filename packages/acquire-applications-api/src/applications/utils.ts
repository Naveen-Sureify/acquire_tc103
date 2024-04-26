import { fromXML } from "from-xml";
import { toXML } from "to-xml";

export const stringToXml = (xmlString: string): any =>{
  const parsedObject = fromXML(xmlString);
  const xmlObject = toXML(parsedObject);
  return xmlObject;
}

export const stringsToXmlArray = (stringArray: string[]): Document[] => {
  const xmlArray: Document[] = [];
  for (const str of stringArray) {
    try {
      const xmlDoc = stringToXml(str);
      xmlArray.push(xmlDoc);
    } catch (error) {
      console.error('Error parsing XML:', error);
    }
  }
  return xmlArray;
}
