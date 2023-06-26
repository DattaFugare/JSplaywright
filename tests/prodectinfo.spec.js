const {test,expect} = require('@playwright/test')
test("print frist product name", async ({page})=>
{
    const username=page.locator("#username");
    const password=page.locator("#password");
    const admin = page.locator("input[value='admin']");
    const formcontrol= page.locator("select[class='form-control']");
    const combobox=page.getByRole('combobox');
    const terms=page.locator("#terms");
    const signInBtn=page.locator("#signInBtn");
    const prodcutname=page.locator(".card-body a");
    let titlestring="LoginPage Practise | Rahul Shetty Academy"

   await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

   console.log(await page.title())

   await expect(page).toHaveTitle(titlestring)

  await username.fill("rahulshettyacademy")
   await password.fill("learning")
   await admin.click()
   await formcontrol .click()
   await combobox.selectOption('stud');
   await terms.click()
   await signInBtn.click()

  console.log( await prodcutname.nth(1).textContent())
  console.log( await prodcutname.first().textContent())

  //get title of all the product
  console.log( await prodcutname.allTextContents())
});


test("list out products ", async ({page})=>
{
    const username=page.locator("#username");
    const password=page.locator("#password");
    const admin = page.locator("input[value='admin']");
    const formcontrol= page.locator("select[class='form-control']");
    const combobox=page.getByRole('combobox');
    const terms=page.locator("#terms");
    const signInBtn=page.locator("#signInBtn");
    const prodcutname=page.locator(".card-body a");
    let titlestring="LoginPage Practise | Rahul Shetty Academy"

   await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

   console.log(await page.title())

   await expect(page).toHaveTitle(titlestring)

  await username.fill("rahulshettyacademy")
   await password.fill("learning")
   await admin.click()
   await formcontrol .click()
   await combobox.selectOption('stud');
   await terms.click()

   await Promise.all([
    
    
    await signInBtn.click(),
    await page.waitForURL("https://rahulshettyacademy.com/angularpractice/shop"),
   ]);
  
  // console.log( await prodcutname.nth(1).textContent())
  // console.log( await prodcutname.first().textContent())
  console.log( await prodcutname.allTextContents())
  //get title of all the product
 
});