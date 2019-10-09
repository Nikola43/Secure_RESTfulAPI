var _ = require('lodash');

var User = module.exports = function (_node) {
    _.extend(this, _node.properties);
    if(this.createdDate) {
        this.createdDate = new Date(this.createdDate.toString());
    }
    if(this.updatedDate) {
        this.updatedDate = new Date(this.updatedDate.toString());
    }
};