package StepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import java.util.List;

public class Registration {
    WebDriver driver;

    @Given("^Enter an URL$")
    public void enter_an_URL() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://demo.nopcommerce.com/");

    }

    @When("^User click on register Link$")
    public void user_click_on_register_Link() {
        driver.findElement(By.className("ico-register")).click();
    }

    @When("^User on register page and verify register page title$")
    public void user_on_register_page_and_verify_register_page_title() {
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("nopCommerce demo store. Register", title);
    }



    @Then("^User enter \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enter_and_and_and_and(String Firstname, String Lastname, String Email, String Password, String ConformPassword) {
        driver.findElement(By.id("FirstName")).sendKeys("Poorna");
        driver.findElement(By.id("LastName")).sendKeys("Patel");
        driver.findElement(By.id("Email")).sendKeys("Abc123@gmail.com");
        driver.findElement(By.id("Password")).sendKeys("Abc123");
        driver.findElement(By.id("ConfirmPassword")).sendKeys("Abc123");
    }

    @Then("^User click on Register button$")
    public void user_click_on_Register_button()  {
        driver.findElement(By.id("register-button")).click();
    }




    @Then("^Close the browser$")
    public void close_the_browser()  {
        driver.close();

    }


}
