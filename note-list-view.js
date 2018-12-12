(function(exports){

  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.returnHTML = function() {
    if(this.noteList.notes.length == 0){
      return "";
    } else {
      var result = "<ul>";
      for(var i = 0; i < this.noteList.notes.length; i++){
        result += "<li><div>" + this.noteList.notes[i].text + "</div></li>";
      }
      return result + "</ul>";
    }


  }
  exports.NoteListView = NoteListView;

})(this);
