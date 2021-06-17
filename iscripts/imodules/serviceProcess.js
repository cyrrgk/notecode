define(function() {
    var Module = (function() {
        var baseIModules = project.baseIModules;
        var CON = function(dom) {
            baseIModules.BaseIModule.call(this, dom);
            this.getInfo();
        };
        potato.createClass(CON, baseIModules.BaseIModule);

        CON.prototype.getInfo = function() {
            api_ajax('project/statistic', {
                succ: function(json) {
                    console.log(json);
                },
                fail: function(json) {
                    alert(1)
                }
            });
        }

        return CON;
    })();
    return Module;
});
