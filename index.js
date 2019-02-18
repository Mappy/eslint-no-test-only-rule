function checkIfOnly (node, subject) {
    const callee = node.callee
    return callee
        && callee.object
        && callee.object.name
        && callee.object.name === subject
        && callee.property
        && callee.property.name
        && callee.property.name === 'only'
}


module.exports.rules = {
    'test-no-only': function(context) {
        return {
            "CallExpression": function(node) {
                if (checkIfOnly(node, 'test')) context.report(node, "test.only is not allowed");
            }
        }
    },
    'describe-no-only': function(context) {
        return {
            "CallExpression": function(node) {
                if (checkIfOnly(node, 'describe')) context.report(node, "describe.only is not allowed");
            }
        }
    },
}
