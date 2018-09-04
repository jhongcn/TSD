module MyModule {
    export interface MyInterface {
        /**
         * getName
         */
        getName(): string;

        /**
         * 
         */
        getAllInfo(): string;
    }

    export class MyClass implements MyInterface {
        private _name : string;
        private _sex : string;
        private _age : number;

        constructor(name : string, sex : string, age : number) {
            this._name = name;
            this._sex = sex;
            this._age = age;
        }

        /**
         * getName 
         */
        public getName() : string {
            return this._name;
        }

        /**
         * getAllInfo
         */
        public getAllInfo() : string {
            return "I'm " + this._name + ", and " + "my age is " + this._age + ". I'm " + this._sex;
        }
    }
}

var my : MyModule.MyInterface = new MyModule.MyClass('John', 'girl', 22);
console.log(my.getAllInfo());