

const {test,expect} = require('@playwright/test')

test("login to Rahul Shetty Academy ", async ({page})=>
{
    
//    const context= browser.newContext();
//    const page=(await context).newPage();
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

   console.log(await page.title())

   await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")

  await page.locator("#username").type("rahulshettyacademy")
   await page.locator("#password").type("learning")
   await page.locator("input[value='admin']").click()
   await page.locator("select[class='form-control']").click()
   await page.getByRole('combobox').selectOption('stud');
   await page.locator("#terms").click()
   await page.locator("#signInBtn").click()


  
});

test("without info login error msg ", async ({page})=>
{
    
//    const context= browser.newContext();
//    const page=(await context).newPage();
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

   console.log(await page.title())

   await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")

//   await page.locator("#username").type("rahulshettyacademy")
//    await page.locator("#password").type("learning")
   
   await page.locator("#signInBtn").click()
  console.log( await page.locator("[style*='block']").textContent())

  await expect(page.locator("[style*='block']")).toContainText("Empty")
   


  
});
test("invalid info login error msg ", async ({page})=>
{
    
//    const context= browser.newContext();
//    const page=(await context).newPage();
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

   console.log(await page.title())

   await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")

  await page.locator("#username").type("dattatray")
   await page.locator("#password").type("fugare123")
   
   await page.locator("#signInBtn").click()
  console.log( await page.locator("[style*='block']").textContent())
   
  await expect(page.locator("[style*='block']")).toContainText("Incorrect username/password.")

  
});