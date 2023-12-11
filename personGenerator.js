const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ирина",
            "id_2": "Виктория",
            "id_3": "Алла",
            "id_4": "Любовь",
            "id_5": "Ксения",
            "id_6": "Анастасия",
            "id_7": "Юля",
            "id_8": "Екатерина",
            "id_9": "Надежда",
            "id_10": "Жанна"
        }
    }`,
    pppJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ирина",
            "id_2": "Виктория",
            "id_3": "Алла",
            "id_4": "Любовь",
            "id_5": "Ксения",
            "id_6": "Анастасия",
            "id_7": "Юля",
            "id_8": "Екатерина",
            "id_9": "Надежда",
            "id_10": "Жанна"
        }
    }`,
    aaaJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ирина",
            "id_2": "Виктория",
            "id_3": "Алла",
            "id_4": "Любовь",
            "id_5": "Ксения",
            "id_6": "Анастасия",
            "id_7": "Юля",
            "id_8": "Екатерина",
            "id_9": "Надежда",
            "id_10": "Жанна"
        }
    }`,
    professionFemaleJson: `{
        "count": 4,
        "list": {     
            "id_1": "Медсестра",
            "id_2": "Уборщица",
            "id_3": "Учительница",
            "id_4": "Бухгалтерша",
            "id_5": "",
            "id_6": "",
            "id_7": "",
            "id_8": "",
            "id_9": "",
            "id_10": ""

        }
    }`,
    professionMaleJson: `{
        "count": 4,
        "list": {     
            "id_1": "Военный",
            "id_2": "Шахтер",
            "id_3": "Инженер",
            "id_4": "Геодезист",
            "id_5": "",
            "id_6": "",
            "id_7": "",
            "id_8": "",
            "id_9": "",
            "id_10": ""

        }
    }`,
 
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomGender: function (){
        return (Math.floor (Math.random()*2) == 1) ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomYearBirth: function(min, max) {
        min = 1990;
        max = 2010;
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    randomFirstName: function() {
        if (this.person.gender === 'Мужчина'){
        return this.randomValue (this.firstNameMaleJson);
        }else{
        return this.randomValue (this.firstNameFemaleJson);
        }

    },

     randomSurname: function() {
        if (this.person.gender === this.GENDER_MALE){
        return this.randomValue (this.surnameJson);
        }else{
        return this.randomValue (this.surnameJson) + 'а';
        }
    },
    randomPatronymic: function() {
        if (this.person.gender === 'Мужчина'){
        return this.randomValue (this.firstNameMaleJson) + 'ович';
        //  } else if (firstNameMaleJson.endsWith("й")){
        // return this.randomValue (this.firstNameMaleJson) + 'евич';
        }else{
        return this.randomValue (this.firstNameMaleJson) + 'овна';
        }
    },

    randomProfession: function() {
        if (this.person.gender === 'Мужчина'){
        return this.randomValue (this.professionMaleJson);
        }else{
        return this.randomValue (this.professionFemaleJson);
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.YearBirth = this.randomYearBirth();
        this.person.Patronymic = this.randomPatronymic();
        this.person.Profession = this.randomProfession();
        return this.person;
    }
};

