/* Footer bölümü */

window.$docsify.plugins = [].concat(
  function(hook) {
    hook.afterEach(function(html, next) {
      var footer = '<footer style="text-align: center; margin-top: 50px; padding: 10px;">' +
                   '<p>guvendekal.org içinde bulunan tüm içerikler ' +
                   '<a href="https://raw.githubusercontent.com/GuvendeKal/guvendekal.org/refs/heads/main/LICENSE" target="_blank">' +
                   'CC0 lisansı</a> altında kamu yararı gözetilerek yazılmıştır.' +
                   '</p></footer>';
      html = html + footer;
      next(html);
    });
  },
  window.$docsify.plugins
);
