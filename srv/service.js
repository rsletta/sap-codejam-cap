module.exports = srv => {
    console.log('Service name:', srv.name)

    if (srv.name === 'CatalogService') {

        srv.after('READ', 'Books', xs => {
            let newBooks = [];
            xs.forEach((x,i) => {
                if (x.stock > 500) {
                    x.title = '(5% off!)' + x.title
                }
                newBooks.push(x)
            });
            return newBooks
        });
    }
}