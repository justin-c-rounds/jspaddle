Paddle = function () {
  var
    paddle = {};

  paddle.go = function () {
    var
        iframe,
        script;

    iframe = document.createElement('iframe');
    document.getElementById('stage').appendChild(iframe);
    script = iframe.contentWindow.document.createElement('script');
    script.innerHTML = editor.session.doc.getValue();
    iframe.contentWindow.onload = function () {};
    iframe.contentWindow.document.head.appendChild(script);
    iframe.contentWindow.onload();
    document.body.className = 'running';
  };

  paddle.stop = function () {
    document.getElementById('stage').innerHTML = '';
    document.body.className = '';
  };

  return paddle;
}();