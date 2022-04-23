package com.cybertek.library.step_definitions;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import com.cybertek.library.pages.LoginPage;
import com.cybertek.library.utilities.ConfigurationReader;
import com.cybertek.library.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class Login {

    LoginPage loginPage = new LoginPage();

    @Given("I go to the website")
    public void i_go_to_the_website() {
        System.out.println("GOING TO MAIN PAGE OF SPARTANS");
        String url = ConfigurationReader.getProperty("browser");
        Driver.getDriver().get("http://52.207.61.129:8000/");
    }

    @Then("web data page is displayed")
    public void web_data_page_is_displayed() {
        System.out.println("Main Page opens");
        loginPage.webDataPage();
        String actualTitle = Driver.getDriver().getCurrentUrl();
        System.out.println(actualTitle);
        Assert.assertTrue(actualTitle.endsWith("spartans"));

    }

}
