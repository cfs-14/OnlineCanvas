# comp467project
Task: Create an online paint editor.

Instructions for project:
1.	download and extract zip to destination folder
2.	download and install angular ide: https://www.genuitec.com/products/angular-ide/download/
3.	open angular ide and file/import select/Angular Project 
4.	specify root directory, e.g. openPaintOnline extracted folder 
5.	Project name: whatever you want 

Note(To run the project locally): 
1.	Check auth0-variables.ts and make sure the clientID is set to development
2.	Check auth.service.ts and make sure the redirectUri is set to development
3.	Right click project root e.g. whatever you names the project 
4.	Run As/ 1 Angular Web Application 
5.	Wait for web browser to open if not open a web browser and navigate to localhost:4200
6.	Before logging in press f5 or alt+f5 to reset your cookies for this site
        Reason: If you visit the aws hosted site then run it locally and visit it then you will get an error for invalid token. This is                     because your browser will store the token in cookies and when you login to the local site after visiting the aws site it                   will use the stored token in your cookies which is invalid because technically they are different clients. If you get this                 error then refresh your cookies using f5 or alt+f5.
