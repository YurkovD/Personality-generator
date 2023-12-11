
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.YearBirth;
    document.getElementById('PatronymicOutput').innerText = initPerson.Patronymic;
    document.getElementById('ProfessionOutput').innerText = initPerson.Profession;
};

