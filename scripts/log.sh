cat <<'EOF'



        
            


                                        MusicComp is installing...
      
        $$\      $$\                     $$\            $$$$$$\                                    
        $$$\    $$$ |                    \__|          $$  __$$\                                   
        $$$$\  $$$$ |$$\   $$\  $$$$$$$\ $$\  $$$$$$$\ $$ /  \__| $$$$$$\  $$$$$$\$$$$\   $$$$$$\  
        $$\$$\$$ $$ |$$ |  $$ |$$  _____|$$ |$$  _____|$$ |      $$  __$$\ $$  _$$  _$$\ $$  __$$\ 
        $$ \$$$  $$ |$$ |  $$ |\$$$$$$\  $$ |$$ /      $$ |      $$ /  $$ |$$ / $$ / $$ |$$ /  $$ |
        $$ |\$  /$$ |$$ |  $$ | \____$$\ $$ |$$ |      $$ |  $$\ $$ |  $$ |$$ | $$ | $$ |$$ |  $$ |
        $$ | \_/ $$ |\$$$$$$  |$$$$$$$  |$$ |\$$$$$$$\ \$$$$$$  |\$$$$$$  |$$ | $$ | $$ |$$$$$$$  |
        \__|     \__| \______/ \_______/ \__| \_______| \______/  \______/ \__| \__| \__|$$  ____/ 
                                                                                        $$ |      
                                                                                        $$ |      
                                                                                        \__|      
                 
           



EOF

count=0
total=34
pstr="[=======================================================================]"

while [ $count -lt $total ]; do
  sleep 0.5 # this is work
  count=$(( $count + 1 ))
  pd=$(( $count * 73 / $total ))
  printf "\r%3d.%1d%% %.${pd}s" $(( $count * 100 / $total )) $(( ($count * 1000 / $total) % 10 )) $pstr
done
