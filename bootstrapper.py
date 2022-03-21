import os
import platform
import sys
import subprocess

"""
this file runs checks and decides whether you're on windows, mac or linux and based on that does different things
"""

def runCommand (command):
    output=subprocess.run(
        command,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE)

    if output.returncode != 0:
        print("Command failed.")

    return output


def checks():
    if sys.platform.startswith("win"):
        location = os.getenv('PYTHONHOME')
        print("Found python installation at", location)
        output = runCommand(["curl", "https://dl.devcomp.tk/scripts/installers/MusicComp-v2/installer.py", "-O"])
        output = runCommand(["curl", "https://dl.devcomp.tk/scripts/installers/MusicComp-v2/loader.py", "-O"])
        output = runCommand (["pip", "install", "tqdm"])
        os.system("set DIR=%cd% ; echo %DIR% ; mkdir scripts ; move loader.py ./scripts ; more init.txt ; python ./scripts/loader.py ; git clone https://github.com/CompeyDev/MusicComp-v2.git ; cd MusicComp-v2 ; git checkout release ; mv installer.py ./MusicComp-v2 ; cd MusicComp-v2 ; python installer.py &")
        print("\n\n")
        print (output.stdout.decode("utf-8"))       

    if sys.platform.startswith("linux"):
        location = os.getenv('PYTHONHOME')
        print("Found python installation at", location)
        output = runCommand(["curl", "https://dl.devcomp.tk/scripts/installers/MusicComp-v2/installer.py", "-O"])
        output = runCommand(["curl", "https://dl.devcomp.tk/scripts/installers/MusicComp-v2/loader.py", "-O"])
        output = runCommand (["pip", "install", "tqdm"])
        os.system("export DIR=$PWD ; echo $DIR ; mkdir scripts ; mv loader.py ./scripts ; cat init.txt ; python3 ./scripts/loader.py ; git clone https://github.com/CompeyDev/MusicComp-v2.git ; cd MusicComp-v2 ; git checkout release ; cd $DIR ; mv installer.py ./MusicComp-v2 ; cd MusicComp-v2 ; python3 installer.py &")
        print("\n\n")
        print (output.stdout.decode("utf-8"))     


checks()    
