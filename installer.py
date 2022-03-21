import subprocess
import os
import time
import platform
import sys

def runCommandStats (command):
    output=subprocess.run(
        command,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE)

    if output.returncode != 0:
        print("\n\nCommand failed. Please make sure you filled out botconfig.js first before running this command!")

    return output

def runCommand (command):
    output=subprocess.run(
        command,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE)  


def setup():
    if sys.platform.startswith("win"):
        os.system("del ./app.json")
        os.system("del ./renovate.json")
        os.system("del ./Logs.log")
        os.system("del ./.circleci/")
        os.system("del ./.github/")
        os.system("del ./package-lock.json")
        os.system("echo off")
        os.system("npm i -G yarn") 
        os.system("yarn")   
        os.system("echo on")                  
        os.system("yarn start")
        print ("\n\n")

    elif sys.platform.startswith("linux"):
        output = runCommand (["rm", "./app.json"])
        output = runCommand (["rm", "./renovate.json"])
        output = runCommand (["rm", "./Logs.log"])
        output = runCommand (["rm", "./.circleci/*"])
        output = runCommand (["rm", "./.github"])
        output = runCommand (["rm", "./package-lock.json"])
        output = runCommand (["npm", "i", "-G", "yarn"])
        output = runCommand (["yarn"])
        output = runCommandStats (["node", "index"])
        print ("\n\n")
        print (output.stdout.decode("utf-8"))                                        

        
setup()
