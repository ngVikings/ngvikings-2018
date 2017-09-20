self.addEventListener('install', () => {
    self.skipWaiting();
});

/* self.addEventListener('activate', () => {
    self.clients.matchAll({
        type: 'window'
    }).then(tabs => {
        tabs.forEach(tab => {
            tab.navigate(tab.url);
        });
    });
}); */