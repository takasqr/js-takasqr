class Analytics {
    property1: string;
    property2: number;
  
    constructor(property1: string, property2: number) {
      this.property1 = property1;
      this.property2 = property2;
    }
  
    myMethod(): void {
      console.log('This is a method from MyClass');
    }
  }

export default new Analytics('example', 123);