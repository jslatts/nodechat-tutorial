if (typeof BasicTest6 == 'function' && BasicTest6.nonJoose) {
    __global__.nonJooseDoubleDeclared = true;
    throw "Double declaration of BasicTest6";
}


BasicTest6 = function() {
    this.VERSION = 0.1;
}
BasicTest6.nonJoose = true;

BasicTest6.prototype.result = function () { return 6 };

var someGlobalVar = true