class Node {
    constructor(type, field = null, operator = null, value = null) {
        this.type = type;
        this.field = field;
        this.operator = operator;
        this.value = value;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }
}

module.exports = { Node };
