
if( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js')
    .then( reg => console.log('services worker registrado', 
                                                            reg.scope))
    .catch(err => {
        console.log('Fallo el registro del SW', err)
    });

}