import Client from 'tplink-smarthome-api';

const c = new Client().startDiscovery();

c.on('bulb-new', (b:any) => {
    b.setPowerState(true)
})

setTimeout(() => {
    c.stopDiscovery();
}, 10000);