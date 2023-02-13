let pwd;
let num = 0;
do {
    pwd = +prompt('введите пароль').trim()
    num++
} while (pwd!==7777&&num!==10)