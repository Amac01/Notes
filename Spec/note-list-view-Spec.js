var testOne = new Test();

noteList = new NoteList();
noteList.addNote("Favourite food: pesto");
noteListView = new NoteListView(noteList);

testOne.compare("", noteListView.returnHTML(), "<ul><li><div>Favourite food: pesto</div></li></ul>");

noteList = new NoteList();
noteListView = new NoteListView(noteList);
testOne.compare("", noteListView.returnHTML(), "");

noteList = new NoteList();
noteList.addNote("Favourite food: pesto");
noteList.addNote("My string");
noteList.addNote("One More string");
noteListView = new NoteListView(noteList);
testOne.compare("", noteListView.returnHTML(),
  "<ul><li><div>Favourite food: pesto</div></li><li><div>My string</div></li><li><div>One More string</div></li></ul>");
