Magento testing tool

Magento is an open-source e-commerce platform written in PHP. This tool is designed to test Magento basic functionality.

Getting Started
* Clone this repository 
* npm install to install all required dependencies


Run Tests
To run tests:
1. run selenium server in hub mode ./ hub_3.14.0-json.bat
2. run node(s) ./ se-node_1-3.14.0 � json.bat (run also ./se-node_2-3.14.0 � json.bat in case you need 2 nodes)
3. run npm run test command

Changes added to the project according to the module 8 home task

1. According to task 1 changed click method in base_element.js: line 16
2. According to task 2 added 2 implementation of JS executer in files spec.js: lines 40,42								      base_element.js: line 25
3. Configured Selenium Grid with 2 nodes. Find screenshots of configured nodes grid console in Screenshots directory.

