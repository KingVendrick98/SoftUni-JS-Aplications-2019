(() => {

    const app = Sammy('#rooter', function () {
        this.use('Handlebars', 'hbs');

        this.get('/', function (ctx) {

        });
    });

    app.run();
})()