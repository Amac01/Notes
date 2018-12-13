var testOne = new Test();
var note = new Note("Our favourite language is Ruby.");

testOne.compare("Returns a note's text:", note.returnText(), "Our favourite language is Ruby.");

var note1 = new Note("Our favourite color is purple.");
var note2 = new Note("Our favourite food is chicken.");

testOne.compare("Returns a note's id:", note1.id, 1);
