module.exports = {
    icon: function (name) {
        return `<svg class="icon" role="img" focusable="false" aria-hidden="true" width="24" height="24">
                    <use xlink:href="#svg-${name}"></use>
                </svg>`
    }
}