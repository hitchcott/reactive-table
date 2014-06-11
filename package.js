Package.describe({
    summary: "A reactive table designed for Meteor"
});

Package.on_use(function (api) {
    api.use('templating', 'client');
    api.use('jquery', 'client');
    api.use('underscore', 'client');
    api.use('just-i18n', 'client');
    api.use('tap-i18n', ['client','server']);

    api.add_files("package-tap.i18n", ['client', 'server']);
    api.add_files('lib/reactive_table.html', 'client');
    api.add_files('lib/reactive_table_i18n.js', 'client');
    api.add_files('lib/reactive_table.js', 'client');
    api.add_files('lib/reactive_table.css', 'client');


    api.add_files([
      "i18n/en.i18n.json",
      "i18n/zh.i18n.json",
    ], 'client');
});
