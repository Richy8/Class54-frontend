module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "./public/sass/basic_scss/_colors.scss"; @import "./public/sass/basic_scss/_breakpoints.scss"; @import "./public/sass/basic_scss/_mixins.scss";`
            }
        }
    },
};