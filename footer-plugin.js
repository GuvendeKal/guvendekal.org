window.$docsify.plugins = [].concat(
    function(hook) {
      hook.afterEach(function(html, next) {
        var footer = '<footer style="text-align: center; margin-top: 50px; padding: 10px;">' +
                     '<p><a href="https://raw.githubusercontent.com/GuvendeKal/guvendekal.org/refs/heads/main/LICENSE">' +
                     'Bu sitedeki tüm içerikler CC0 lisansı altında kamu yararı gözetilerek yazılmıştır.' +
                     '</a></p>' +
                     '</footer>';
        html = html + footer;
        next(html);
      });
    },
    window.$docsify.plugins
  );
  