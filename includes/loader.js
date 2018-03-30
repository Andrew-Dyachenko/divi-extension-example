// External Dependencies
import $ from 'jquery';

// Internal Dependencies
import HelloWorld from './modules/HelloWorld/HelloWorld';

$(window).on('et_builder_api_ready', (event, API) => {
  API.registerModule('dicm_hello_world', HelloWorld);
});
