const login = document.getElementById("login");
const login__success = document.getElementById("login__success");
const form = document.getElementById("login__form");
const uname = document.getElementById("Username");
const psw = document.getElementById("Password");
const addNewForm = document.getElementById('addNewForm')
const user__img = document.getElementById('addNewForm__popup__url')
const user__name = document.getElementById('addNewForm__popup__name')
const user__country = document.getElementById('addNewForm__popup__country')
const user__rating = document.getElementById('addNewForm__popup__rating')
const grid__list = document.getElementById('grid')
const searching = document.getElementById('form__search')
const search__error = document.getElementById('search__error')

function loginButton() {
    login.style.display = 'flex';
    login__success.style.display = 'none';
}

function loginCancel() {
    login.style.display = 'none';
    form.reset();
}

function loginSuccess() {
    event.preventDefault();
    form.style.display = 'none';
    login__success.style.display = 'flex';

}
function loginSuccessCancel() {
    login.style.display = 'none'
    form.reset();
}

function addNew() {
    addNewForm.style.display = 'flex';
}

function addNewCancel() {
    addNewForm.style.display = 'none';
    addNewForm.reset();

}

function addNewMember() {
    data.push({ Img_URL: user__img.value, name: user__name.value, country: user__country.value, rating: user__rating.value });
    listValue(data);
    addNewForm.style.display = 'none';
    event.preventDefault();
    addNewForm.reset();
}

let data = [
    {
        Img_URL: 'grid__img1.png', name: 'Chris', country: 'Korea', rating: 5
    },
    {
        Img_URL: 'grid__img2.png', name: 'Alia', country: 'India', rating: 4
    },
    {
        Img_URL: 'grid__img3.png', name: 'Emma', country: 'America', rating: 4
    },
    {
        Img_URL: 'grid__img4.png', name: 'Watson', country: 'Thailand', rating: 3
    }
]

let counter = 0;
const listValue = (gridData) => {
    grid__list.innerHTML = ""
    for (let i = 0; i < gridData.length; i++) {
        counter++;
        grid__list.innerHTML += `
        <div class='grid__element' id=grid__element${counter}>
        <img src=${gridData[i].Img_URL} class="grid__element__img">
        <p class="grid__element__name" id=grid__img__name>${gridData[i].name}</p>
        <p class="grid__element__country">${gridData[i].country}</p>
        <div class="grid__element__rating" id=grid__rating${counter}>
        </div>`

        const grid__rating = document.getElementById(`grid__rating${counter}`)
        let rate = gridData[i].rating
        generateStar(rate, grid__rating)

    };
    counter = 0;
}
listValue(data);

function generateStar(num, grid__rating) {
    for (let i = 1; i <= 5; i++) {
        if (i <= num) {
            grid__rating.innerHTML += '<i class="fa fa-solid fa-star"></i>'
        }
        else {
            grid__rating.innerHTML += `<i class="fa fa-solid fa-star-o"></i>`

        }
    }
}

let dataFilter = []
function profileSearch() {
    let text = searching.value.toLowerCase();
    dataFilter = data.filter((input) => {
        if (input.name.toLowerCase().includes(text)) {
            return input.name;
        }
    });
    if (dataFilter.length === 0) {
        search__error.style.display = 'block';
        grid__list.style.display = 'none';
    }
    else {
        search__error.style.display = 'none';
        grid__list.style.display = 'grid';
        listValue(dataFilter);
    }
}
