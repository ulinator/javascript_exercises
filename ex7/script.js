var lexicon = {
	"merry":"god",
	"christmas":"jul",
	"and":"och",
	"happy":"gott",
	"new":"nytt",
	"year":"ar"
}

var translator = function(string) {
	var splitArray = string.split(" ");

	var isInLexicon = function(string) {
		return lexicon[string] || string;
	}

	translated = splitArray.map(isInLexicon).join(" ");
	return translated;
}

console.log(translator("merry machismo christmas and a happy new year"));