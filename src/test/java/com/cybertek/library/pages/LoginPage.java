package com.cybertek.library.pages;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import com.cybertek.library.utilities.Driver;

public class LoginPage {

    public LoginPage(){PageFactory.initElements(Driver.getDriver(),this);}

    @FindBy(xpath = "//div//small//i['fas fa-users'][1]")
    WebElement WebData;

    @FindBy(id = "back_to_home_btn")
    public WebElement BackToHomeBtn;

    public void webDataPage(){WebData.click();}
}
