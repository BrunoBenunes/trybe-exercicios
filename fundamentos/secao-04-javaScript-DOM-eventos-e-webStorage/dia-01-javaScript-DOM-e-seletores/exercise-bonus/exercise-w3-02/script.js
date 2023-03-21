const saveForms = () => {
  const firstName = document.querySelectorAll('input')[0].value;
  const lastName = document.querySelectorAll('input')[1].value;
  const fullName = `${firstName} ${lastName}`;
  return fullName;
}
saveForms()