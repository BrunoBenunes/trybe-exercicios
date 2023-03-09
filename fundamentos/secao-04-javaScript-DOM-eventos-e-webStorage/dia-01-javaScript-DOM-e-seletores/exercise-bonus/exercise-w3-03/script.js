const modifyBCParagraph = (color) => {
  const paragraph = document.querySelectorAll('.conteudo p')[0];
  paragraph.style.backgroundColor = color;
}
modifyBCParagraph('red');