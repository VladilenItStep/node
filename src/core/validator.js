export class Validator {

    static required(str = '') {
        return str && str.trim()

    }

    static isEmailValid(value = '') {

        const arrayFromStr = value.trim().split('')

        for (let i = 0; i < arrayFromStr.length; i++) {
            if (arrayFromStr[i] === ' ') return false
        }

        if (!value.includes('@')) return false

        return value.trim()

    }

    static isPasswordValid(value = '') {
        const counter = {
            letter: 0,
            digit: 0,
            uppercaseLetter: 0
        }

        const arrayFromStr = value.trim().split('')

        arrayFromStr.forEach((symbol) => {
            if (typeof symbol === 'string' && !isFinite(symbol)) {
                counter.letter++
            }

            if (isFinite(symbol)) {
                if (symbol !== " ") {
                    counter.digit++
                }
            }

            if (!isFinite(symbol) && /[A-Яа-яA-Za-z ]/g.test(symbol) && symbol === symbol.toUpperCase()) {
                counter.uppercaseLetter++
            }

        })

        for (let key in counter) {
            if (counter[key] === 0) return false
        }

        return value

    }
}