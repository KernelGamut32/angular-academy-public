# Playground

```typescript
const names = [
    { firstName: "Darth", lastName: "Vader" },
    { firstName: "Vito", lastName: "Corleone" },
    { firstName: "Francis", middleName: "Ford", lastName: "Coppola" },
];

function displayNames(nameStrategy: (firstName: string, lastName: string, middleName?: string) => void) {
    for (let counter = 0; counter < names.length; counter++) {
        nameStrategy(names[counter].firstName, names[counter].lastName, names[counter].middleName);
    }

    // names.forEach((name: { firstName: string, lastName: string, middleName?: string}) => {
    //     nameStrategy(name.firstName, name.lastName, name.middleName);
    // })
}

function formatName(firstName: string, lastName: string, middleName?: string) {
    if (middleName) {
        console.log(`${lastName}, ${firstName} ${middleName}`);
    } else {
        console.log(`${lastName}, ${firstName}`);
    }
}

function formatNameSpecial(firstName: string, lastName: string, middleName?: string) {
    if (middleName) {
        console.log(`${firstName.toUpperCase()} ${middleName.toUpperCase()} ${lastName.toUpperCase()}`);
    } else {
        console.log(`${firstName.toUpperCase()} ${lastName.toUpperCase()}`);
    }
}

displayNames(formatName);
displayNames(formatNameSpecial);
```

```typescript
interface Director {
    readonly id: number;
    firstName: string;
    middleName?: string;
    lastName: string;
    getFullNamePs?: () => string;
    getFullNameMs(): string;
}

function getFullName(firstName: string, lastName: string, middleName?: string): string {
    return `${firstName}${middleName ? " " + middleName : ""} ${lastName}`;
}

const ff: Director = {
    id: 1,
    firstName: "Francis",
    middleName: "Ford",
    lastName: "Coppola",
    getFullNamePs: () => {
        return getFullName(ff.firstName, ff.lastName, ff.middleName);
    },
    getFullNameMs() {
        return getFullName(ff.firstName, ff.lastName, ff.middleName);
    }
}

const gl: Director = {
    id: 2,
    firstName: "Geoge",
    lastName: "Lucas",
    getFullNameMs() {
        return getFullName(gl.firstName, gl.lastName);
    }
}

console.log(ff);
console.log(ff.getFullNamePs ? ff.getFullNamePs() : "Not Provided");
console.log(ff.getFullNameMs());
console.log(gl.getFullNamePs ? gl.getFullNamePs() : "Not Provided");
console.log(gl.getFullNameMs());
```

```typescript
class SimpleDictionary<Key, Value = Key> {
    key: Key;
    value: Value;

    constructor(key: Key, value: Value) {
        this.key = key;
        this.value = value;
    }

    getValue(key: Key): Value | undefined {
        return this.key === key
            ? this.value
            : undefined;
    }
}

const games: SimpleDictionary<number, string>[] = [
    new SimpleDictionary(1000, "Monopoly"),
    new SimpleDictionary(2000, "Checkers"),
    new SimpleDictionary(3000, "Chess"),
    new SimpleDictionary(4000, "Splendor"),
];

const states: SimpleDictionary<string>[] = [
    new SimpleDictionary("OH", "Ohio"),
    new SimpleDictionary("CA", "California"),
    new SimpleDictionary("NY", "New York"),
];


function findAThing<Key, Value>(key: Key, collection: SimpleDictionary<Key, Value>[]): Value | undefined {
    for (let c = 0; c < collection.length; c++) {
        const val = collection[c].getValue(key as Key);
        if (val) {
            return val;
        }
    }
    return undefined;
}

console.log(findAThing(1000, games));
console.log(findAThing(4000, games));
console.log(findAThing(5000, games));

console.log(findAThing("OH", states));
console.log(findAThing("CA", states));
console.log(findAThing("MI", states));
```

```typescript
interface Faculty<Subject> {
    name: string;
    subject: Subject;
}

class TeachingPosition implements Faculty<string> {
    name: string;
    subject: string;
    isTenured: boolean;

    constructor(name: string, subject: string, isTenured: boolean) {
        this.name = name;
        this.subject = subject;
        this.isTenured = isTenured;
    }

    toString(): string {
        return `${this.name} teaches ${this.subject} and ${this.isTenured ? "is tenured" : "is not yet tenured"}`;
    }
}

const teachingJob1 = new TeachingPosition("Joe Schmoe", "Applied Mathematics", true);
const teachingJob2 = new TeachingPosition("Bob Roberts", "Basket Weaving", false);

console.log(teachingJob1.toString());
console.log(teachingJob2.toString());
```
