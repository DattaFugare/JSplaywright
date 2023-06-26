const {test,expect }=require("@playwright/test")

test("register user", async ({page})=>{


    const createaccountlink= page.locator("header[class='page-header'] li:nth-child(3) a:nth-child(1)");
   const firstname= page.getByLabel('First Name');
   const lastname=  page.getByLabel('Last Name');
   const Email= page.getByLabel('Email', { exact: true });
   const Password= page.getByRole('textbox', { name: 'Password*', exact: true });
   const ConfirmPassword= page.getByLabel('Confirm Password');
   const CreateanAccount= page.getByRole('button', { name: 'Create an Account' })
    let pagetitlestring="Home Page";
  await page.goto("https://magento.softwaretestingboard.com/")
  console.log(await page.title())

  await expect(page).toHaveTitle(pagetitlestring)
  
  await createaccountlink.click()
  
  await firstname.click();
  await firstname.fill('dattatray');
  await lastname.click();
  await lastname.fill('fugare');
  await Email.click();
  await Email.fill('dattatrayfugare77@gmail.com');
  await Password.click();
  await Password.fill('Datta123sujay');
  await ConfirmPassword.click();
  await ConfirmPassword.fill('Datta123sujay');
  await CreateanAccount.click();


});



test ("login into application", async ({page})=>
{

 const SignIn= page.getByRole('link', { name: 'Sign In' })
  const Email=page.getByLabel('Email')
  const Password=page.getByLabel('Password')
 const SignIn_btn= page.getByRole('button', { name: 'Sign In' })

  await page.goto('https://magento.softwaretestingboard.com/');
  await SignIn.click();
  await Email.click();
  await Email.fill('dattatrayfugare77@gmail.com');
  await Password.click();
  await Password.fill('Datta123sujay');
  await SignIn_btn.click();
});
// test("listout Hot Sellers ", async ({page})=>
// {

//  const SignIn= page.getByRole('link', { name: 'Sign In' })
//   const Email=page.getByLabel('Email')
//   const Password=page.getByLabel('Password')
//  const SignIn_btn= page.getByRole('button', { name: 'Sign In' })

//   await page.goto('https://magento.softwaretestingboard.com/');
//   await SignIn.click();
//   await Email.click();
//   await Email.fill('dattatrayfugare77@gmail.com');
//   await Password.click();
//   await Password.fill('Datta123sujay');
 
//   await Promise.all( [await SignIn_btn.click(),
//     await page.waitForURL("https://magento.softwaretestingboard.com/"),]
    
//     );


  
//   console.log(page.title())

//   // const fristproduct =await page.locator(".product-item-name  .product-item-link").allTextContents()
  
//   // console.log(await page.locator(".product-item-name  .product-item-link").allTextContents())
// });

// test("select prodect to add cart", async ({page})=>
//   {



//     await page.getByRole('menuitem', { name: 'What\'s New' }).click();
//   await page.getByText('New in men\'s').click();
//   await page.getByRole('list').filter({ hasText: 'Hoodies & Sweatshirts Jackets Tees Tanks Pants Shorts' }).getByRole('link', { name: 'Jackets' }).click();
//   await page.getByRole('link', { name: 'Montana Wind Jacket' }).first().click();
//   await page.getByRole('option', { name: 'XL' }).click();
//   await page.getByRole('option', { name: 'Red' }).click();
//   await page.getByRole('button', { name: 'Add to Cart' }).click();
//   await page.getByRole('button', { name: 'Add to Cart' }).click();
//   await page.getByRole('link', { name: ' My Cart 2 2\nitems' }).click();
//   await page.getByRole('link', { name: 'View and Edit Cart' }).click();
//   await page.getByRole('button', { name: 'Proceed to Checkout' }).click();

    
//   });