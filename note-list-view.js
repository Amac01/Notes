(function(exports){

  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.returnHTML = function() {
    return "<ul><li><div>" + this.noteList.notes[0].text + "</div></li></ul>";

  }
  exports.NoteListView = NoteListView;

})(this);
