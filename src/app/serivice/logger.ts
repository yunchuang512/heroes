export class Logger {
  static log(content: string): void {
    console.log(content);
  }

  static logtag(tag: string, content: string): void {
    console.log(tag + '=>' + content);
  }

  static logtable(content: any): void {
    console.table(content);
  }
}
