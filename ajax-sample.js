function refreshServerInfo() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', function() {
    console.log(this.responseText);

    const data = JSON.parse(this.responseText);
    console.log(Object.keys(data));

    const serverInfo = document.querySelector('.serverInfo');
    Object.keys(data).forEach(p => {
      const replacements = serverInfo.querySelectorAll(`[data-replace="${p}"]`);
      for(let r of replacements) {
        r.textContent = data[p];
      }
    });
  });
  req.open('GET','http://localhost:7070', true);
  req.send();
};

//setInterval(refreshServerInfo, 1000);