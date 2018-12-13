var testOne = new Test();


noteList2 = new NoteList();
noteList2.addNote("Favourite color: purple");
noteview = new NoteView(noteList2);
testOne.compare(noteview.returnHTML(),
"<ul><li><div>Favourite color: pu</div></li></ul>");
