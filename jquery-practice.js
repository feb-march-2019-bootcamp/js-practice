import $ from 'jquery';

const btn = $('#app .btn');

btn.html('New buttons')

btn.attr('class', btn.attr('class') + ' red')

console.log(btn);