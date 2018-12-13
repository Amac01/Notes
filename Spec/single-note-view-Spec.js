var testOne = new Test();


notelist2 = new NoteList();
notelist2.addNote("Favourite color: blue");
noteview = new NoteView(notelist2);
testOne.compare(noteview.returnHTML(),
"<ul><li><div>Favourite color: blue</div></li></ul>");
