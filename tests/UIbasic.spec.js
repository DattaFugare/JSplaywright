const {test,expect}=require('@playwright/test');

test("first test case", async ()=>
{



});

test("second test case", async ({page})=>
{
    
   
   await page.goto("https://www.opencart.com/?route=account/login")

  

  
});

test("third test case", async ({browser})=>
{
  
const  context = browser.newContext();

  const page=(await context).newPage()
   await (await page).goto("https://www.opencart.com/?route=account/login")


   
   console.log((await page).title())
  
});