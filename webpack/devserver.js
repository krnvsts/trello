// Сервер для разработки
module.exports = function () {
    return {
        devServer: {
            stats: 'errors-only',
            port: 9000
        }
    };
};