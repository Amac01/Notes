var testOne = new Test();

noteList = new NoteList();
noteList.addNote("Favourite food: pesto");
noteListView = new NoteListView(noteList);

testOne.compare(noteListView.returnHTML(), "<ul><li><div>Favourite food: pesto</div></li></ul>");
