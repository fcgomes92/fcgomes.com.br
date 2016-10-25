/**
 * Created by gomes on 16/10/16.
 */
if (process.env.NODE_ENV === 'development') {
    module.exports = require('./configureStore.dev')
} else {
    module.exports = require('./configureStore.prod')
}