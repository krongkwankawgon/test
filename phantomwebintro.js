var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
  console.log(msg);
};

page.open("http://phantomjs.org/", function(status) {
  if (status === "success") {
    page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
      page.evaluate(function() {
        console.log("$(\".explanation\").text() -> " + $("small").text());
      });
      phantom.exit(0);
    });
  } else {
    phantom.exit(1);
  }
});
