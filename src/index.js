import { PageAuthorization } from "./components/page-authorization.component.js";
import { Notification } from "./components/modals/notification.component.js";
import { PageContent } from "./components/page-content.component.js";
import { FormCreatePostModal } from "./components/modals/create-form.component.js";
import { PostInfoModal } from "./components/modals/todo-info.components.js";
import { ConfirmActionModal } from "./components/modals/confirm-action.component.js";
import { FormEditPostModal } from "./components/modals/edit-form.comonent.js";

export const originUrl = window.location.href
console.log(originUrl);


const loginPage = new PageAuthorization("login");
export const pageContent = new PageContent("page-content", loginPage);
export const formCreatePostModal = new FormCreatePostModal("create");
export const postInfoModal = new PostInfoModal("info");
export const confirmInfoModal = new ConfirmActionModal("confirm");
export const formEditPostModal = new FormEditPostModal("edit");


export const notification = new Notification("notification");

if (JSON.parse(localStorage.getItem("selectedUserId"))) {
    loginPage.hide();
    pageContent.show();
}

window.addEventListener('popstate', function(e) {
    const userId = JSON.parse(localStorage.getItem('selectedUserId'))
    if (e.state && userId) {
        postInfoModal.show(e.state)
    }
})

/*
const wareStore = {
        jackets: "empty",
        hats: "empty",
        socks: "empty",
        pants: 15,
        parer: true,
        mixers: 14,
        date: new Date(),

    }
    // [
    //   ["jackets", 5],
    //   ["hats", "empty"],
    //   ["socks", "empty"],
    //   ["pants", 15],
    //   ["parer", true],
    //   ["mixers", 14],
    //   ["date", "2024-07-29T16:00:21.931Z"],
    //   ["cookers", "empty"]
    // ];

//   [["hats", "empty"], ["socks", "empty"], ["cookers", "empty"]]

function printReport(obj) {
    const result = Object.entries(obj)
        .filter(([key, value]) => value === "empty")
        .reduce((acc, [key, value]) => `${acc} ${key},`, '');
    return result.trim().length ? `We need this items:${result.slice(0, -1)}!` : 'Everything fine'
}

console.log(printReport(wareStore));

*/

/*

// Дан массив ключей ['login', 'email', 'gender']
// Дан массив значений ['user', 'myEmail@mail.ru', 'male or female']
// создать F , которая принимает два параметра (1 - массив ключей, 2-ой - массив значений)
// по результату должен получится объкт, который F возвращает
const obj = {
    login: 'user',
    email: 'myEmail@mail.ru',
    gender: 'male or female',
}

const keys = ['login', 'email', 'gender']
const value = ['user', 'myEmail@mail.ru', 'male or female']


function createObject(kyesArray, valueArray) {
    // const arr = kyesArray.map((el, index) => {
    //     return [el, valueArray[index]]
    // })
    // return Object.fromEntries(arr)

    // return kyesArray.reduce((acc, item, index) => {
    //     acc[item] = valueArray[index]
    //     return acc
    // }, {})

    // const result = {}

    // kyesArray.forEach((el, indx, arr) => {
    //     console.log(el);
    //     result[el] = valueArray[indx]
    // });

    // return result

    // const obj = {} // так не делать
    // obj[kyesArray[0]] = valueArray[0]
    // obj[kyesArray[1]] = valueArray[1]
    // obj[kyesArray[2]] = valueArray[2]

    // return result

}


console.log(createObject(keys, value))

*/

/*
const forTestArr = [
    { role: "admin", status: "online" },
    { role: "user", status: "online" },
    { role: "user", status: "offline" },
    { role: "admin", status: "online" },
    { name: "Vlad", age: "32" },
    { name: "Sveta", age: "32" },
    { name: "Anna", age: "32" },
    { car: "BMV", age: "1990" },
];

function filterByKey(key, arr) {
    // 1 - название ключа объекта
    // 2 - массив, который будет фильтроваться 
    // функция должна вернуть массив объектов, которые содеражт указанный ключ или если ключа нет - вернуть null
    const filtredArray = arr.filter((el) => el.hasOwnProperty(key))
    return filtredArray.length ? filtredArray : null
}

console.log(filterByKey("car", forTestArr))

function filterByRole(role, arr) {
    // 1 - значение role объекта (т.е. его значение - admin, user)
    // 2 - массив, который будет фильтроваться 
    // функция должна вернуть массив объектов, которые содеражт указанную роль
    return arr.filter((el) => el.role === role)

}

console.log(filterByRole("admin", forTestArr))

function filterByStatus(status, arr) {
    // 1 - значение status объекта (т.е. его значение - online, offline)
    // 2 - массив, который будет фильтроваться 
    // функция должна вернуть массив объектов, которые содеражт указанный статус

}

console.log(filterByRole("online", forTestArr))



const arr1 = ['opel', 'bmw', 'audi', 'mazda', 'nissan', 'mercedes'] // общий список каталога 
const str = 'bmw' // значение для фильтра 
const arr2 = ['bmw', 'mercedes'] // масив значений для фильтра 

function foo(arr1, str) {
    // функция должна возвращать массив элементов, которые пользователь не выбрал 
    return arr1.filter((el) => el !== str)
}

foo(arr1, str)

function fooTemp(arr1, arr2) {
    return arr1.filter((el) => {
        return !arr2.find((item) => item === el)
    })
}

console.log(fooTemp(arr1, arr2))
*/


// есть [2, 'dwa' 'dwa', {}, null, false, 5, 1]

// нужно реализовать ф-ю sum(), которая на вход будет принимать массив данных с любыми типами

// function sum(arr) {
//     return arr.reduce((acc, item) => {
//         if (typeof item === 'number') {
//             return acc += item
//                 // acc = acc + item
//         }
//         return acc
//     }, 0)
// }

// const sum2 = (arr) => arr.reduce((acc, item) => typeof item === 'number' ? acc += item : acc, 0)

// console.log(sum2([2, 4, 3, 'dwa', {}, null, false, 5, 1]))

// function sum3(arr) {
//     let sum = 0

//     arr.forEach(item => {
//         if (typeof item === 'number') {
//             sum += item
//         }
//     });

//     return sum
// }

// console.log(sum3([2, 4, 3, 'dwa', {}, null, false, 5, 1]))

// Реализовать функцию transformData, которая принимает объект.
// пример объекта 

/*
const obj = {
        name: 'Vlad',
        age: 32,
        sayHi() {
            console.log('Hello ', this.name)
        },
        empty: undefined,
        car: undefined
    }
    // и возвращает новый объект с такими же полями, но если значение у объекта undefined
    // то происходит его замена на строку 'пусто'

const obj2 = {
    name: 'Vlad',
    age: 32,
    sayHi() {
        console.log('Hello ', this.name)
    },
    empty: 'пусто',
    car: 'пусто'
}

function transformData(obj) {
    const result = {}
    for (let key in obj) {
        if (obj[key] === undefined) {
            result[key] = 'пусто'
        } else {
            result[key] = obj[key]
        }
    }
    return result
}


function transformData2(obj) {
    const result = Object.keys(obj).reduce((acc, key) => {
        if (obj[key] === undefined) {
            acc[key] = 'пусто'
            return acc
        } else {
            acc[key] = obj[key]
            return acc
        }
    }, {})

    return result
}


function transformData3(obj) {

    const result = Object.entries(obj).map(([key, value]) => {
        if (value === undefined) {
            return [key, 'пусто']
        } else {
            return [key, value]
        }

    })
    return Object.fromEntries(result)
}



console.log(transformData3(obj));
*/