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
        os.system("more init.txt")
        os.system("pip install tqdm")
        from tqdm import tqdm
        for i in tqdm (range (101), 
                    desc="Installing...", 
                    ascii=False, ncols=100):
            time.sleep(0.10)
        os.system("echo off")
        os.system("npm i -G yarn") 
        os.system("yarn")   
        os.system("echo on")                  
        os.system("yarn start")
        print ("\n\n")

    elif sys.platform.startswith("linux"):
        output = runCommand (["pip", "install", "tqdm"])
        from tqdm import tqdm
        os.system("cat init.txt")
        print("\n\n")
        for i in tqdm (range (101), 
                    desc="Installing...", 
                    ascii=False, ncols=100):
            time.sleep(0.10)
        output = runCommand (["rm", "app.json"])
        output = runCommand (["rm", "renovate.json"])
        output = runCommand (["rm", "Logs.log"])
        output = runCommand (["rm", ".circleci/*"])
        output = runCommand (["rm", ".github"])
        output = runCommand (["rm", "package-lock.json"])
        output = runCommand (["npm", "i", "-G", "yarn"])
        output = runCommand (["yarn"])
        output = runCommandStats (["yarn", "start"])
        print ("\n\n")
        print (output.stdout.decode("utf-8"))                                        

        
setup()
