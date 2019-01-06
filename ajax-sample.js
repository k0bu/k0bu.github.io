//import { normalize } from "path";

// function refreshServerInfo() {
//   const req = new XMLHttpRequest();
//   req.addEventListener('load', function() {
//     console.log(this.responseText);

//     const data = JSON.parse(this.responseText);
//     console.log(Object.keys(data));

//     const serverInfo = document.querySelector('.serverInfo');
//     Object.keys(data).forEach(p => {
//       const replacements = serverInfo.querySelectorAll(`[data-replace="${p}"]`);
//       for(let r of replacements) {
//         r.textContent = data[p];
//       }
//     });
//   });
//   req.open('GET','http://localhost:7070', true);
//   req.send();
// };

//setInterval(refreshServerInfo, 1000);

$(document).ready(function(){
  let TimerID = setInterval(refreshServerInfo, 200);

  function refreshServerInfo(){
    const $serverInfo = $('.serverInfo');
    //jQuery.get.(~)
    $.get('http://localhost:7070').then(
      function (data) {
        Object.keys(data).forEach( p=> {
          $(`[data-replace="${p}"]`).text(data[p]);
        });
      },
      function(jqXHR, textStatus, err){
        const $errorInfo = $('.error');
        console.error("Error has occured:" + err);
        $errorInfo.text("Error: Cannot access the server.");
        $errorInfo.css({
          'margin-left': '20px',
          'font-weight': 'normal'
        });
        clearInterval(TimerID);
      }
    );
  }
});

