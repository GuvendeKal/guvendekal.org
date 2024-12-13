window.$docsify = {
  basePath: './docs/',
  loadSidebar: true,
  auto2top: true,
  sidebar: '_sidebar.md',
  themeColor: '#0B87DA',
  logo: 'images/logo.svg',
  notFoundPage: '404.md',
  pagination: {
    previousText: 'Önceki Sayfa',
    nextText: 'Sonraki Sayfa',
    crossChapter: true,
    crossChapterText: true,
  },
  search: {
    placeholder: 'Arama yap...',
  },
  plugins: [
    EditOnGithubPlugin.create(
      'https://github.com/GuvendeKal/guvendekal.org/tree/main/docs/',
      '',
      '📝 Dökümanı Düzenle'
    ),
  ],
};
