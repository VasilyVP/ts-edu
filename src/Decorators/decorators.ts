class Base<T = {}> {
    props: T;

    constructor(props: T) {
        this.props = props;
    }
}

type FuncProps = {
    one: number;
    two: number;
} & PropProp;

@special
class MyClass extends Base<FuncProps> {
    one: number;
    two: number;

    constructor(props: FuncProps) {
        super(props);

        this.one = props.one;
        this.two = props.two;
    }

    @printable
    printProps() {
        console.log('one: ', this.one);
        console.log('two: ', this.two);
        //console.log('specProp: ', this.props.specProp);
    }
}


type PropProp = {
    specProp?: string;
}

function special<T extends { new(...args: any[]): {} }>(wrappable: T) {
    const specProp = 'Special property';

    return class extends wrappable {
        props: any;

        constructor(...props: any[]) {
            super(props[0]);
            this.props = { ...props[0], specProp };
        }
    };
}

type Printable = {
    [k: string]: any;
} & PropProp;
function printable(target: any, property: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function func(...args: any[]) {
        const result = originalMethod.apply(this, args);

        console.log('specProp: ', (this as Printable).props.specProp);
        
        return result;
    }
}


const my = new MyClass({ one: 1, two: 2 });

my.printProps();
