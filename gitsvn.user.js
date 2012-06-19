// gitsvn.user.js
// --------------

var cmd = document.getElementById('checkoutcmd');
if (cmd) {
  var svn = cmd.innerHTML;
  if (svn.search(/^\s*svn checkout/i) === 0) {
    addCss();
    appendGitSvn(cmd, svn)
  }
}

function addCss() {
  var css = '#gitcmd { display: block; margin:5px 0; }',
      style = document.createElement('style');

  style.innerHTML = css;
  document.head.appendChild(style);
}


function appendGitSvn(elem, html) {
  var gitCmd = html.replace('svn checkout', 'git svn clone')
                    .replace('trunk/', ' -s')
                    .replace('-read-only', ''),
      gitElem = document.createElement('tt'),
      parent = elem.parentNode;

  gitElem.id = "gitcmd";
  gitElem.innerHTML = gitCmd;
  parent.insertBefore(gitElem, elem.nextSibling);
}
