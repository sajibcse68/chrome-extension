const axioss = require('axios');

console.log('YESSSS');
// alert(window.location.href);

debugger;
axioss.get('https://api.github.com/orgs/appscode/repos')
  .then(function(resp) {
    alert(resp)
})
