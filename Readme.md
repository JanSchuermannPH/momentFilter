#AngularJS Moment.js Filter

## Usage

Apply the filter using the default formatting:
```html
<span>{{ date | moment }}</span>
Result: 04/20/2016, 9:39 PM
```
Apply the filter using custom formatting:
```html
<span>{{ date | moment:'MM/DD/Y' }}</span>
Result: 04/20/2016
```
Set a different default formatting
```javascript
app.config(function(momentFilterProvider){
    momentFilterProvider.defaultFormat('dddd, MMMM Do YYYY, h:mm:ss a');
});
```
```html
<span>{{ date | moment }}</span>
Result: Wednesday, April 20th 2016, 9:47:43 pm
```
