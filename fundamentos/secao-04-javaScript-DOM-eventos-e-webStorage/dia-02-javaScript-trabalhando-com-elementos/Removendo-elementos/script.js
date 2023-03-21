const removeAnyChild = () => {
  const elemento = document.getElementById('elementoOndeVoceEsta')
  const elementoToRemove = elemento.children[0]
  elemento.removeChild(elementoToRemove)
}
removeAnyChild()