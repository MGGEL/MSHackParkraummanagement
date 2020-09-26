

// jQuery
const $  = require('jquery');
global.$ = global.jQuery = $;

// Bootstrap
require('bootstrap');


require('../css/app.scss');

class App {

    constructor() {
        console.log('test', 1);
    }

}

$(document).ready(function () {
    let app = new App();
});
