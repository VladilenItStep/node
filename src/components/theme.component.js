import { Component } from "../core/component.js";
import { Storage } from "../core/storage.js";

export class ThemeComponent extends Component {
    constructor(id, pageConent) {
        super(id)
        this.pageConent = pageConent
    }

    init() {
        if (Storage.getUserData()) {
            this.componet.value = Storage.getUserData().theme
        } else {
            this.componet.value = 'gray'
        }

        this.componet.addEventListener('change', onThemeHandler.bind(this))
    }

    value() {
        return this.componet.value
    }
}

function onThemeHandler(e) {
    Storage.setTheme(e.target.value)

    const classList = this.pageConent.classList

    Array.from(classList).forEach((cls) => {
        if (cls === 'application') return
        this.pageConent.classList.remove(cls)
    })

    this.pageConent.classList.add(e.target.value)
}