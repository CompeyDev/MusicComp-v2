from tqdm import tqdm
import time

for i in tqdm (range (101), 
            desc="Installing...", 
            ascii=False, ncols=100):
    time.sleep(0.10)                    
