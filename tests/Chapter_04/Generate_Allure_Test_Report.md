## Allure Report with Playwright [Screenshots, Videos & Traces]
- Step1: Install Allure Report command-line tool
  ### npm install -g --save-dev allure-commandline
  
- Step2: Install the Allure Playwright adapter.
  ### npm install --save-dev allure-playwright

- Step3: Add below config in playwright.config.js file.
  ### reporter:[
  ### ['html'],
  ### ['allure-playwright']
  ### ],

- Step4: Run Playwright tests.
  ### npx playwright test

- Step5: Generate Allure Report
  ### npx allure serve allure-results

  or

  ### allure generate allure-results --clean
  ### allure open
  
![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/0dc08076-a4ba-4f9f-9b89-ecd8fc81f5ba)

![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/5fc751fa-81ca-4dc6-9c49-54834258d0aa)

![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/36161f37-2cf2-4373-a30d-f888adb405de)

![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/b7ef2588-adbd-40fc-9801-ed1554fd38ef)



## Playwright Test Report
![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/dd9e360b-bd9e-425a-9191-848a13791d29)

![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/9ea0128b-5906-476f-9fc7-615b240d7623)

![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/379bb630-b84d-4a47-a70e-8afca0d33240)
