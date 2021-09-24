var amendments = ['The First Amendment - This amendment guarantees freedom of religion, speech, and the press, to petition the government for a redress of grivances, and protects the right of assembly.', "The Second Amendment - This amendment protects the right to keep and bear arms.", "The Third Amendment - This amendment guards against the forced quartering of troops.", "The Fourth Amendment - This amendment protects against unreasonable searches and seizures. (Warrant with proof is needed.)", "The Fifth Amendment - This amendment guarantees a trial by jury and 'due process of law,' and guards against double jeopardy (being charged twice for the same offense) and self-incrimination.", "The Sixth Amendment - This amendment outlines the rights of the accused, including the right to have a 'speedy and public' trial, the right to be informed of the charges made against him, the right to call witnesses in his defense, and the right to have an attorney in his defense.", "The Seventh Amendment - This amendment lays out the rules of common law.", "The Eighth Amendment - This amendment protects against 'cruel and unusual' punishments.", "The Ninth Amendment - This amendment ensures that the individual rights that are not enumerated in the Constitution are secure—that is, that these rights should not be automatically infringed upon because they are omitted from the Constitution.", "The Tenth Amendment - This amendment limits the power of federal government by reserving for the states all powers that are not explicitly granted to the federal government by the Constitution, nor denied to the states."];

change_text(0);
function change_text(i){
  if (amendments.length > i) {
    setTimeout(function() {
      document.getElementById("amendment_var").innerHTML = amendments[i];
      change_text(++i);
    }, 3000); // 1 second (in milliseconds)
  } else if (amendments.length == i) { // Loop
    change_text(0);
  }
}



