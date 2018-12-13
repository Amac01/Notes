(function(exports){

  function NoteView(noteList) {
    this.noteList = noteList;
  }

  NoteView.prototype.returnHTML = function() {
    if(this.noteList.notes.length == 0){
      return "";
    } else {
      var result = "<ul>";
      for(var i = 0; i < this.noteList.notes.length; i++){
        result += "<li><div>" + this.noteList.notes[i].text.slice(0, 19) + "</div></li>";
      }
      return result + "</ul>";
    }


  }
  exports.NoteView = NoteView;

})(this);
