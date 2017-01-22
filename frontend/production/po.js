console.log('po summoned')

function includeScripts (scriptPaths) {
  for (var i = 0; i < scriptPaths.length; i++) {
    console.log('adding script', scriptPaths[i])
    var imported = document.createElement('script')
    imported.src = scriptPaths[i]
    imported.defer = true
    imported.async = true
    document.head.appendChild(imported)
  }
}

function includeCss (cssPaths) {
  for (var i = 0; i < cssPaths.length; i++) {
    console.log('adding css', cssPaths[i])
    var imported = document.createElement('link')
    imported.rel = 'stylesheet'
    imported.href = cssPaths[i]
    imported.async = true
    document.head.appendChild(imported)
  }
}

includeScripts(['https://code.getmdl.io/1.1.3/material.min.js', 'https://www.gstatic.com/firebasejs/3.6.6/firebase.js', '../scripts/config.js', '../scripts/main.js'])
includeCss(['https://fonts.googleapis.com/icon?family=Material+Icons', 'https://code.getmdl.io/1.1.3/material.orange-indigo.min.css', 'https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en', '../styles/main.css'])
