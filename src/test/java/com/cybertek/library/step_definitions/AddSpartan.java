package com.cybertek.library.step_definitions;
import com.cybertek.library.pages.AddSpartanPage;
import com.cybertek.library.utilities.Driver;
import com.github.javafaker.BackToTheFuture;
import io.cucumber.java.bs.A;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class AddSpartan {
    AddSpartanPage addSpartanPage= new AddSpartanPage();

    @When("I click on add spartan")
    public void i_click_on_add_spartan() {
        addSpartanPage.AddSpartan.click();
        System.out.println(Driver.getDriver().getTitle());
        Assert.assertEquals(Driver.getDriver().getTitle(), "Add New Spartan");
    }

    @Then("Add spartan page is displayed and spartan is created")
    public void add_spartan_page_is_displayed() {
        addSpartanPage.createSpartan("Cucu", "male", "1111111112231");
        addSpartanPage.backToTheListbtn.click();
    }


    @When("I type {string}, {string} and {string}")
    public void i_type_and(String string, String string2, String string3) throws InterruptedException {
        addSpartanPage.AddSpartan.click();
      addSpartanPage.createSpartan(string,string2,string3);
      Thread.sleep(3);
        addSpartanPage.backToTheListbtn.click();
        Thread.sleep(3);
        addSpartanPage.AddSpartan.click();
        addSpartanPage.createSpartan(string,string2,string3);
        addSpartanPage.backToTheListbtn.click();
        addSpartanPage.AddSpartan.click();
        addSpartanPage.createSpartan(string,string2,string3);
    }

}
