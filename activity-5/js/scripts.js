(function () {

  var data = [
    {
      name: 'Blank Line at the End of File',
      description: 'This is a minimal and super simple extension that adds an extra blank line at the end of any saved file.',
      author: 'riccardoNovaglia',
      url: 'https://marketplace.visualstudio.com/items?itemName=riccardoNovaglia.missinglineendoffile',
      downloads: 18835,
      stars: 2,
      price: 'FREE',
      selector: 'p1'
    },
    {
      name: 'Rainbow Brackets',
      description: 'Add some fun into your editor with 🌈 Rainbow Brackets! This extension provides rainbow colors for round brackets, square brackets, and curly brackets.',
      author: '2gua',
      url: 'https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets',
      downloads: 812012,
      stars: 69,
      price: 'FREE',
      selector: 'p2'
    },
    {
      name: 'Path Intellisense',
      description: 'The Path Intellisense extension helps to autocomplete filenames. Super useful when writing out paths in markup, or in any file that has path references.',
      author: 'Christian Kohler',
      url: 'https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense',
      downloads: 4402884,
      stars: 86,
      price: 'FREE',
      selector: 'p3'
    }
  ];

  function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function () {
      return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function () {
      return this.stars.toLocaleString();
    };
  }

  var getTodaysDate = function () {
    var today = new Date();
    return today.toDateString();
  };

  var getEl = function (id) {
    return document.getElementById(id);
  }

  var writePackageInfo = function (package) {
    var selector = package.selector,
      nameEl = getEl(selector + '-name'),
      descEl = getEl(selector + '-description'),
      authEl = getEl(selector + '-author'),
      downloadEl = getEl(selector + '-downloads'),
      starsEl = getEl(selector + '-stars');

      nameEl.textContent = package.name;
      descEl.textContent = package.description;
      authEl.textContent = package.author;
      downloadEl.textContent = package.getFormattedDownloads();
      starsEl.textContent = package.getFormattedStars();
  }

  dateEl = getEl('date');
  dateEl.textContent = getTodaysDate();

  var debuggerForChrome = new Package(data[0]);
  writePackageInfo(debuggerForChrome);

  var instantMarkDown = new Package(data[1]);
  writePackageInfo(instantMarkDown);
    
  var settingsSync = new Package(data[2]);
  writePackageInfo(settingsSync);

}());