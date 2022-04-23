package com.cybertek.library.pages;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AddSpartanPage extends LoginPage{

    @FindBy(xpath = "//div//p//a//i['fas fa-user-plus']")
    public WebElement AddSpartan;

    @FindBy(id = "name")
    public WebElement name;

    @FindBy(id = "genderSelect")
    public WebElement gender;

    @FindBy(id = "phone")
    public WebElement phone;

    @FindBy(id = "submit_btn")
    public WebElement submit;

    @FindBy(xpath = "//div//a[1]")
    public WebElement backToTheListbtn;




    public void createSpartan(String ad, String cins, String nomre){
        this.name.sendKeys(ad);
        this.gender.sendKeys(cins);
        this.phone.sendKeys(nomre);
        submit.click();
    }
}
