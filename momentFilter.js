angular.module('momentFilter',[])
    .provider('momentFilterConfig',function(){
        this.format = 'MM/DD/Y, h:mm A';
        this.defaultFormat = function(format){return this.format = typeof format !== 'undefined' ? format : this.format;};
        this.$get = function(){return this;}
    })
    .filter('moment',['momentFilterConfig',function(momentFilterConfig){
    return function(input,format){
        return typeof format === 'undefined' ? moment(input).format(momentFilterConfig.defaultFormat()) : moment(input).format(format);
    };
}]);