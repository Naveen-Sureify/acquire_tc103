declare module '*.xml' {}
declare module '*.ejs' {}
declare module 'csv-ps' {
  class CsvParser {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    parseAll(csvString: string): any[] {}
  }
}
