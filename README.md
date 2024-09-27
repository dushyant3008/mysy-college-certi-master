# Start: G:\mysy-college-certi-master\mysy-college-certi-master
# New setup:
- Download from github.com/parv141206
- After that, open it in vscode.
- Run 
```
npm install
``` 
- please run 
```
npm run build
```
# Few commands
- Run on development mode : npm run dev
- Run on deployment mode (recom) : npm run start

# Client 
- Kindly review GenerateDoc1 component for fresh certificate and GenerateDoc2 for renew certificate.

# Server
- For resetting counter, view counter.txt and counter_re.txt
- Main python code is in main.py ( DO NOT EDIT )
- You can edit input.docx for fresh certificate editing.
- You can edit input_r.docx for renew certificate editing.

# If it stops working , check if there is a node_modules folder. If not, run 
```
npm install
```

# If server shows error, ensure that no word file is open. Close all word files before running.

# in case of adding more servers to the system , follow following steps:
1) Go to START.bat in mysy folder and copy paste changing the port only
2) Then press Control + R and type " shell:startup ". in the folder u will find the start.bat file. make same changes in that too
3) Finally go to nginx folder at G:\mysy-college-certi-master\nginx-1.26.0\conf and open nginx.conf file and add in that too. simply copy and paste in the upstream backend, like this {
        server 160.160.19.13:5001;
        server 160.160.19.13:5002;
        server 160.160.19.13:5003;
        server 160.160.19.13:5004;
        server 160.160.19.13:5005;
    }
Done

# In case of IP changed, change it in following locations:
- GenerateDoc.jsx
- GenerateDoc2.jsx

# If more gone wrong, contact Parv Shah 9601465697