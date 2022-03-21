import os
import platform
import sys
import subprocess

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
        output = runCommand (["pip", "install", "tqdm"])
        os.system("more init.txt ; python ./scripts/loader.py ; python installer.py &")
        print("\n\n")
        print (output.stdout.decode("utf-8"))       

    if sys.platform.startswith("linux"):
        location = os.getenv('PYTHONHOME')
        print("Found python installation at", location)
        output = runCommand(["curl", "https://dl.devcomp.tk/scripts/installers/MusicComp-v2/installer.py", "-O"])
        output = runCommand (["pip", "install", "tqdm"])
        os.system("cat init.txt ; python3 ./scripts/loader.py ; python3 installer.py &")
        print("\n\n")
        print (output.stdout.decode("utf-8"))     



checks()    
