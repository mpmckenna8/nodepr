
var foo1 = new Foo("foo1");
var foo2 = new Foo("foo2");
foo1.data.push(4);
foo1.showData(); // "foo1", [1, 2, 3, 4]
foo2.showData(); // "foo2", [1, 2, 3]
