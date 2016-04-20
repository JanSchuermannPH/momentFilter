angular.module('momentFilter',[])
    .provider('momentFilterProvider',function(){
        this.format = 'MM/DD/Y, h:mm A';
        this.defaultFormat = function(format){return this.format = typeof format !== 'undefined' ? format : this.format;};
        this.$get = function(){return this;}
    })
    .filter('moment',['momentFilterProvider',function(momentFilterProvider){
    return function(input,format){
        return typeof format === 'undefined' ? moment(input).format(momentFilterProvider.defaultFormat()) : moment(input).format(format);
    };
}]);